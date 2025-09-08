import CircleUser from "@/component/icon/CircleUser";
import { createMargins, margins } from "./margins";
import "./style.scss";

export default function Header({
  title,
  warning,
  top,
  bottom,
}: {
  title: string;
  warning?: string;
  top?: margins;
  bottom?: margins;
}) {
  const classes = ["header-block"];
  classes.push(createMargins(top, bottom));

  return (
    <>
      <div className={classes.join(" ")}>
        <div className="header">{title}</div>
        {warning !== undefined && (
          <div className="header-warning">
            <span className="icon">
              <CircleUser />
            </span>
            <span>{warning}</span>
          </div>
        )}
      </div>
    </>
  );
}
