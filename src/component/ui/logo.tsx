import { useVisualTheme } from "@/provider/visual-theme";
import styles from "@/style/page.module.scss";
import React from "react";

export default function Logo() {
  const { currentTheme } = useVisualTheme();

  const altText = "Nacho Bar";

  let logo: React.ReactNode;
  switch (currentTheme) {
    case "dark":
      logo = (
        <picture>
          <img src="/img/logo-dark.svg" alt={altText} />
        </picture>
      );
      break;
    case "light":
      logo = (
        <picture>
          <img src="/img/logo-light.svg" alt={altText} />
        </picture>
      );
      break;
    default:
      logo = (
        <picture>
          <source srcSet="/img/logo-dark.svg" media="(prefers-color-scheme: dark)" />
          <img src="/img/logo-light.svg" alt={altText} />
        </picture>
      );
      break;
  }

  return <div className={styles.logo}>{logo}</div>;
}
