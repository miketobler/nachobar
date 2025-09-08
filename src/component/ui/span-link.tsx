import "./style.scss";

export default function SpanLink({
  action,
  children,
}: {
  action: () => void;
  children: React.ReactNode | React.ReactNode[];
}) {
  const catchEnter = (ev: React.KeyboardEvent<HTMLButtonElement>) => {
    if (ev.key === "Enter") {
      action();
    }
  };

  return (
    <span className="link" onClick={action} onKeyUp={catchEnter} tabIndex={0}>
      {children}
    </span>
  );
}
