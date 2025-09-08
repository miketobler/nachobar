import { Ref } from "react";
import { createMargins, margins } from "./margins";
import "./style.scss";

export default function Button({
  title,
  top,
  bottom,
  ref,
  lock = true,
  lockForm: lockFrom = false,
}: {
  title: string;
  top?: margins;
  bottom?: margins;
  ref?: Ref<HTMLButtonElement>;
  lock: boolean;
  lockForm: boolean;
}) {
  const classes = ["submit-button"];
  if (lock) classes.push("submit-button-lock");
  classes.push(createMargins(top, bottom));

  return (
    <div className={classes.join(" ")}>
      <button ref={ref} className="main" type="submit" disabled={lock}>
        <div>{title}</div>
      </button>
      <div className="loader-position" style={{ display: lockFrom ? "block" : "none" }}>
        <div className="loader"></div>
      </div>
    </div>
  );
}
