import { useUser } from "@/provider/user";
import SpanLink from "./span-link";
import "./style.scss";

export default function UserInfo() {
  const { user, logout } = useUser();
  if (user === undefined) {
    return <></>;
  }

  return (
    <div className="userinfo-block">
      <div className="title">Safe Room</div>
      <div className="text">Welcome, {user.name}!</div>
      <div className="text">The Safe Room has no exit, so take a sit, grab your drink.</div>
      <div className="leave">
        <SpanLink action={logout}>Emergency leave</SpanLink>
      </div>
    </div>
  );
}
