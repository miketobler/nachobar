import TriangleExclamation from "@/component/icon/TriangleExclamation";
import { Ref } from "react";
import { createMargins, margins } from "./margins";
import "./style.scss";

export default function TextInput({
  title,
  name,
  password = false,
  top,
  bottom,
  ref,
  onChange,
  alert,
  lock,
}: {
  title: string;
  name: string;
  password?: boolean;
  top?: margins;
  bottom?: margins;
  ref?: Ref<HTMLInputElement>;
  onChange?: () => void;
  alert?: boolean;
  lock?: boolean;
}) {
  const classes = ["text-input"];
  if (lock) classes.push("text-input-lock");
  classes.push(createMargins(top, bottom));

  return (
    <div className={classes.join(" ")}>
      <div className="title">
        <label htmlFor={name}>{title}</label>
      </div>
      <div className="input-container">
        <input
          ref={ref}
          type={password ? "password" : "text"}
          id={name}
          autoComplete="on"
          onChange={onChange}
          disabled={lock}
        />
        <div className="alert" style={{ display: alert ? "block" : "none" }}>
          <TriangleExclamation />
        </div>
      </div>
    </div>
  );
}
