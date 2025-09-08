"use client";

import CircleCheck from "@/component/icon/CircleCheck";
import { useRef, useState } from "react";
import "./style.scss";

export default function TextToCopy({ title, text }: { title: string; text: string }) {
  const copyMark = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);

    if (copyMark.current) {
      copyMark.current.style.display = "inline-block";

      if (!visible) {
        setVisible(true);
        setTimeout(hideCopyMark, 2000);
      }
    }
  };

  const hideCopyMark = () => {
    if (copyMark.current) {
      copyMark.current.style.display = "none";
    }
    setVisible(false);
  };

  const doCopy = () => {
    if (navigator.clipboard !== undefined) copyToClipboard();
  };

  return (
    <>
      <span className="title">{title}</span>
      <span className="copyable">{text}</span>
      <span className="copy-action" onClick={doCopy}>
        copy
      </span>
      <span ref={copyMark} className="copy-mark">
        <CircleCheck />
      </span>
    </>
  );
}
