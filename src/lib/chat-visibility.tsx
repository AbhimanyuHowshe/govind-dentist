"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const ChatVisibilityContext = createContext<{
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
} | null>(null);

export function ChatVisibilityProvider({ children }: { children: ReactNode }) {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <ChatVisibilityContext.Provider value={{ chatOpen, setChatOpen }}>
      {children}
    </ChatVisibilityContext.Provider>
  );
}

export function useChatVisibility() {
  const ctx = useContext(ChatVisibilityContext);
  if (!ctx) {
    throw new Error("useChatVisibility must be used within ChatVisibilityProvider");
  }
  return ctx;
}
