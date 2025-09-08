import styles from "@/style/page.module.scss";

export default function FooterSelect({
  icon,
  title,
  children,
}: {
  icon?: React.ReactNode;
  title?: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  let titleElem: React.ReactNode | null = null;
  if (icon !== undefined || title !== undefined) {
    titleElem = (
      <div className={styles.title}>
        {icon}
        {title && <span>{title}</span>}
      </div>
    );
  }

  return (
    <div className={styles.item}>
      {titleElem}
      {children}
    </div>
  );
}
