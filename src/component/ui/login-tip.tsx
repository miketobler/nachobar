import SpanLink from "@/component/ui/span-link";
import "./style.scss";

export default function LoginTip({ title, action }: { title: string; action: () => void }) {
  return (
    <div className="text-links margin-top-xl">
      <div className="login-tip">
        <SpanLink action={action}>{title}</SpanLink>
      </div>
    </div>
  );
}
