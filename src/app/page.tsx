"use client";

import FooterLink from "@/component/login/footer-link";
import FooterSelect from "@/component/login/footer-select";
import LoginForm from "@/component/login/form";
import Licenses from "@/component/login/licenses";
import LoginTips from "@/component/login/tips";
import Logo from "@/component/ui/logo";
import UserInfo from "@/component/ui/user-info";
import { useUser } from "@/provider/user";
import { useVisualTheme } from "@/provider/visual-theme";
import styles from "@/style/page.module.scss";
import { useEffect, useRef } from "react";

export default function MainPage() {
  const { addThemeSelector } = useVisualTheme();
  const themeSelectRef = useRef(null);

  const { user } = useUser();

  useEffect(() => {
    addThemeSelector(themeSelectRef);
  });

  let content: React.ReactNode;
  if (user === undefined) {
    content = (
      <div className={styles.login_block}>
        <Logo />
        <LoginForm />
        <div></div>
        <LoginTips />
      </div>
    );
  } else {
    content = (
      <div className={styles.login_block}>
        <Logo />
        <UserInfo />
      </div>
    );
  }

  return (
    <>
      <div className={styles.indicator}>
        <div></div>
      </div>
      <div className={styles.container}>
        {content}
        <div className={styles.footer}>
          <div className={styles.line}></div>
          <div className={styles.line}>
            <FooterLink>
              &copy; <a href="mailto:mike@tobler.pro">Mikhail Tobler</a>, 2025
            </FooterLink>
            <Licenses title="Licenses" />
            <FooterSelect title="Theme">
              <select ref={themeSelectRef}>
                <option value="auto">Auto</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </FooterSelect>
          </div>
        </div>
      </div>
    </>
  );
}
