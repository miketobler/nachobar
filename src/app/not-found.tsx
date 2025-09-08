import styles from "@/style/error.module.scss";
import Link from "next/link";

const altText = "Nacho Bar";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <picture>
          <source srcSet="/img/logo-dark.svg" media="(prefers-color-scheme: dark)" />
          <img src="/img/logo-light.svg" alt={altText} />
        </picture>
      </div>
      <div className={styles.message}>
        <div className={styles.code}>404</div>
        <div className={styles.text}>There is no entrance</div>
        <div>
          <Link href="/">Go to the front door</Link>
        </div>
      </div>
    </div>
  );
}
