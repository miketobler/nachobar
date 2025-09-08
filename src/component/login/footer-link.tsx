import styles from "@/style/page.module.scss";

export default function FooterLink({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className={styles.item}>
      <div className={styles.info}>{children}</div>
    </div>
  );
}
