"use client";

import { useCallback, useState } from "react";

type DisclosureReturnType = [boolean, { open: () => void; close: () => void }];

export default function useModalManager(initialState: boolean): DisclosureReturnType {
  const [opened, setOpened] = useState(initialState);

  const open = useCallback(() => {
    if (opened) return;
    setOpened(true);
  }, [opened]);

  const close = useCallback(() => {
    if (!opened) return;
    setOpened(false);
  }, [opened]);

  return [opened, { open, close }];
}
