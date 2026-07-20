"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "motion/react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";
import { useChatVisibility } from "@/lib/chat-visibility";
import { useKeyboardLikelyOpen } from "@/lib/use-keyboard-open";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "What are your clinic hours?",
  "Tell me about the doctors.",
  "What should I do about a toothache?",
  "How do I book an appointment?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelId = useId();
  const shouldReduceMotion = useReducedMotion();
  const { setChatOpen } = useChatVisibility();
  const [isMobile, setIsMobile] = useState(false);
  const keyboardOpen = useKeyboardLikelyOpen();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    setChatOpen(open);
  }, [open, setChatOpen]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  // Opening pushes a history entry so the hardware/gesture back button closes
  // the chat instead of navigating the user away from the site entirely —
  // otherwise a full-screen mobile panel has no obvious way back for a
  // naive user beyond spotting the small close button.
  useEffect(() => {
    if (!open) return;
    window.history.pushState({ chatOpen: true }, "");
  }, [open]);

  useEffect(() => {
    const onPopState = () => setOpen(false);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const closeChat = useCallback(() => {
    if (open) window.history.back();
  }, [open]);

  const toggleChat = useCallback(() => {
    if (open) {
      window.history.back();
    } else {
      setOpen(true);
    }
  }, [open]);

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      if (info.offset.y > 100 || info.velocity.y > 500) {
        closeChat();
      }
    },
    [closeChat],
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeChat();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeChat]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isStreaming) return;

    setError(false);
    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setIsStreaming(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Chat request failed");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          updated[updated.length - 1] = { ...last, content: last.content + chunk };
          return updated;
        });
      }
    } catch {
      setError(true);
      setMessages((prev) =>
        prev.length && prev[prev.length - 1].role === "assistant" && prev[prev.length - 1].content === ""
          ? prev.slice(0, -1)
          : prev,
      );
    } finally {
      setIsStreaming(false);
    }
  }

  return (
    <div className="fixed right-4 bottom-20 z-40 flex flex-col items-end gap-3 sm:right-6 md:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="dialog"
            aria-modal="false"
            aria-label={`Chat with the ${siteConfig.shortName} assistant`}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: shouldReduceMotion ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: shouldReduceMotion ? 1 : 0.97 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex h-dvh w-full flex-col overflow-hidden border-border bg-background shadow-2xl sm:static sm:inset-auto sm:z-auto sm:h-[min(600px,calc(100dvh-7rem))] sm:w-[min(380px,calc(100vw-2rem))] sm:rounded-2xl sm:border"
            {...(isMobile && !shouldReduceMotion
              ? {
                  drag: "y" as const,
                  dragConstraints: { top: 0, bottom: 0 },
                  dragElastic: { top: 0, bottom: 0.5 },
                  onDragEnd: handleDragEnd,
                }
              : {})}
          >
            <header className="flex flex-col border-b border-border bg-brand-navy pt-[max(0.5rem,env(safe-area-inset-top))] text-white">
              <div
                className="flex justify-center py-1.5 sm:hidden"
                aria-hidden="true"
              >
                <span className="h-1 w-10 rounded-full bg-white/25" />
              </div>
              <div className="flex items-center gap-3 px-4 pb-3.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Sparkles className="size-4.5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{siteConfig.shortName}</p>
                  <p className="truncate text-xs text-white/70">Ask us anything about your dental care</p>
                </div>
                <button
                  type="button"
                  onClick={closeChat}
                  className="flex shrink-0 items-center gap-1.5 rounded-full py-1.5 pr-1 pl-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white sm:size-8 sm:justify-center sm:p-0"
                  aria-label="Close chat"
                >
                  <span className="sm:hidden">Close</span>
                  <X className="size-4.5" aria-hidden="true" />
                </button>
              </div>
            </header>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto bg-brand-soft-gray px-4 py-4"
              aria-live="polite"
            >
              {messages.length === 0 && (
                <div className="flex flex-col gap-3">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm text-brand-navy shadow-sm">
                    Hi! I&apos;m the virtual assistant for {siteConfig.shortName}. Ask me about our
                    doctors, treatments, hours, or how to book an appointment.
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => sendMessage(suggestion)}
                        className="rounded-full border border-border bg-white px-3 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:border-brand-blue hover:text-brand-blue"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm shadow-sm",
                      message.role === "user"
                        ? "rounded-tr-sm bg-brand-blue text-white"
                        : "rounded-tl-sm bg-white text-brand-navy",
                    )}
                  >
                    {message.content || (
                      <span className="inline-flex gap-1 py-0.5">
                        <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
                        <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
                        <span className="size-1.5 animate-bounce rounded-full bg-current" />
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {error && (
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive">
                  Sorry, something went wrong. Please try again, or call us at {siteConfig.phoneDisplay}.
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-border bg-background p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                aria-label="Message"
                disabled={isStreaming}
                className="h-10 flex-1 rounded-full border border-border bg-background px-4 text-sm outline-none focus-visible:border-brand-blue focus-visible:ring-3 focus-visible:ring-brand-blue/20 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isStreaming || !input.trim()}
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                aria-label="Send message"
              >
                <Send className="size-4" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={toggleChat}
        whileTap={{ scale: shouldReduceMotion ? 1 : 0.94 }}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close chat" : "Chat with our assistant"}
        className={cn(
          "flex size-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg transition-transform hover:scale-105",
          (open || keyboardOpen) && "hidden sm:flex",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "chat"}
            initial={{ opacity: 0, rotate: shouldReduceMotion ? 0 : -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: shouldReduceMotion ? 0 : 45 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
          >
            {open ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <MessageCircle className="size-6" aria-hidden="true" />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
