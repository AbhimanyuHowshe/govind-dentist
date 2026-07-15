import { NextRequest } from "next/server";
import { buildChatSystemPrompt } from "@/lib/chatbot/system-prompt";

export const maxDuration = 30;

const MODEL_NAME = "google/gemini-2.5-flash";
const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_MESSAGES = 12;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return new Response("Chat is not configured yet.", { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const messages: ChatMessage[] | undefined = body?.messages;

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response("Invalid request.", { status: 400 });
  }

  const trimmedHistory = messages
    .slice(-MAX_HISTORY_MESSAGES)
    .filter(
      (m): m is ChatMessage =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length > 0 &&
        m.content.length <= MAX_MESSAGE_LENGTH,
    );

  if (trimmedHistory.length === 0) {
    return new Response("Invalid request.", { status: 400 });
  }

  const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL_NAME,
      stream: true,
      messages: [
        { role: "system", content: buildChatSystemPrompt() },
        ...trimmedHistory,
      ],
    }),
  });

  if (!upstream.ok || !upstream.body) {
    return new Response("The assistant is temporarily unavailable. Please try again shortly.", {
      status: 502,
    });
  }

  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (data === "[DONE]") continue;

            try {
              const parsed = JSON.parse(data);
              const delta: string | undefined = parsed.choices?.[0]?.delta?.content;
              if (delta) controller.enqueue(encoder.encode(delta));
            } catch {
              // Ignore malformed SSE chunks.
            }
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
