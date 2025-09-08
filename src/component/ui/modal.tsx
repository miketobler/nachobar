import { useEffect, useRef } from "react";
import "./style.scss";

export default function Modal({
  title,
  opened,
  close,
  children,
}: {
  title?: string;
  opened: boolean;
  close: () => void;
  children: React.ReactNode | React.ReactNode[];
}) {
  const activeButton = useRef(null);

  const hasTitle = title !== undefined && title.length > 0;

  const disableTab = (ev: React.KeyboardEvent<HTMLButtonElement>) => {
    if (ev.key === "Tab") {
      ev.preventDefault();
    }
  };

  // if a modal is opened, set focus to the button
  useEffect(() => {
    if (opened && activeButton.current) {
      document.body.classList.add("fixed");
      (activeButton.current as HTMLButtonElement).focus();
    }
  });

  const cancelClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    document.body.classList.remove("fixed");
    ev.stopPropagation();
  };

  const currentClasses = opened ? "modal modal-opened" : "modal";

  return (
    <div className={currentClasses} onClick={close}>
      <div className="modal-panel" onClick={cancelClick}>
        {hasTitle && <div className="title">{title}</div>}
        {children}
        <div className="action">
          <button className="main" onKeyDown={disableTab} onClick={close} ref={activeButton}>
            <div>OK</div>
          </button>
        </div>
      </div>
    </div>
  );
}
