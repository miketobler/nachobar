import FooterLink from "@/component/login/footer-link";
import Modal from "@/component/ui/modal";
import SpanLink from "@/component/ui/span-link";
import useModalManager from "@/hook/modal-manager";

export default function Licenses({ title }: { title: string }) {
  const [opened, { open, close }] = useModalManager(false);

  return (
    <>
      <Modal opened={opened} close={close} title="Licenses">
        <p>This site uses some external works which licensed free of charges:</p>
        <blockquote>
          <p className="list">
            <span className="title">Frameworks</span>
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>
            ,{" "}
            <a href="https://react.dev/" target="_blank">
              React
            </a>
            ,{" "}
            <a href="https://sass-lang.com/" target="_blank">
              SASS
            </a>
          </p>
          <p className="list">
            <span className="title">Logo</span>
            <a
              href="https://www.freepik.com/free-vector/hand-drawn-mexican-bar-logo-template_53579719.htm"
              target="_blank"
            >
              Freepik
            </a>
          </p>
          <p className="list">
            <span className="title">Icons</span>
            <a href="https://fontawesome.com/" target="_blank">
              Font Awesome
            </a>
          </p>
          <p className="list">
            <span className="title">Animation</span>
            <a href="https://css-loaders.com/" target="_blank">
              CSS Loaders
            </a>
          </p>
        </blockquote>
      </Modal>

      <FooterLink>
        <SpanLink action={open}>{title}</SpanLink>
      </FooterLink>
    </>
  );
}
