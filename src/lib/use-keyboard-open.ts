"use client";

import { useEffect, useState } from "react";

const TEXT_INPUT_SELECTOR =
  "input:not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]), textarea";

/**
 * Tracks whether a text-like input/textarea is focused anywhere on the page —
 * a proxy for "the on-screen mobile keyboard is likely open." Used to hide
 * floating action buttons (WhatsApp, back-to-top, chat toggle) that would
 * otherwise crowd or overlap the field the user is actively typing into.
 */
export function useKeyboardLikelyOpen() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isTextInput = (target: EventTarget | null) =>
      target instanceof HTMLElement && target.matches(TEXT_INPUT_SELECTOR);

    const handleFocusIn = (e: FocusEvent) => {
      if (isTextInput(e.target)) setOpen(true);
    };
    const handleFocusOut = (e: FocusEvent) => {
      if (isTextInput(e.target)) setOpen(false);
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  return open;
}
