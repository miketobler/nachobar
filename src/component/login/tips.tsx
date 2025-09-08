import LoginTip from "@/component/ui/login-tip";
import Modal from "@/component/ui/modal";
import TextToCopy from "@/component/ui/text-to-copy";
import useModalManager from "@/hook/modal-manager";

export default function LoginTips() {
  const [opened, { open, close }] = useModalManager(false);

  return (
    <>
      <Modal opened={opened} close={close} title="How to enter the&nbsp;Safe&nbsp;Room">
        <p>Use followed credentials:</p>
        <blockquote>
          <p className="copyable">
            <TextToCopy title="E-mail" text="hello@24x7.work" />
          </p>
          <p className="copyable">
            <TextToCopy title="Password" text="welcome!" />
          </p>
        </blockquote>
      </Modal>

      <LoginTip title="Help me to enter" action={open} />
    </>
  );
}
