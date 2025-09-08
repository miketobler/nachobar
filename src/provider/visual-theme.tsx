"use client";

import { createContext, RefObject, use, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export type VisualTheme = "light" | "dark" | undefined;

export interface VisualThemeContext {
  // current theme defined by an user through a selector (auto, light, dark)
  currentTheme: VisualTheme;
  // effictive theme based on the user choice and the system state
  effectiveTheme: VisualTheme;
  // set a visual theme selector
  addThemeSelector: (_: RefObject<null>) => void;
}

const Context = createContext({} as VisualThemeContext);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type UseVisualTheme<T = VisualTheme> = () => VisualThemeContext;

// hook to get visual theme variables
export const useVisualTheme: UseVisualTheme = () => use(Context);

// theme provider
export function VisualThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const systemVisualTheme = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (theme) => {
      setDarkTheme(theme);
      computeEffectiveTheme();
    }
  );

  const [themeSelector, setThemeSelector] = useState<HTMLSelectElement | undefined>();
  const [currentTheme, setCurrentTheme] = useState<VisualTheme>();
  const [effectiveTheme, setEffectiveTheme] = useState<VisualTheme>();
  const [darkTheme, setDarkTheme] = useState(systemVisualTheme);

  const computeEffectiveTheme = () => {
    // compute value of an effective visual theme
    if (currentTheme === undefined) {
      setEffectiveTheme(darkTheme ? "dark" : "light");
    } else {
      setEffectiveTheme(currentTheme);
    }

    // set a CSS class if required
    switch (currentTheme) {
      case "dark":
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
        break;
      case "light":
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
        break;
      default:
        document.documentElement.classList.remove("light-mode");
        document.documentElement.classList.remove("dark-mode");
        break;
    }
  };

  // check current state of the visual theme selector
  // and set its actual value
  const updateSystemVisualTheme = () => {
    if (themeSelector === undefined) return;

    switch (themeSelector.value) {
      case "light":
        setCurrentTheme("light");
        break;
      case "dark":
        setCurrentTheme("dark");
        break;
      default:
        setCurrentTheme(undefined);
        break;
    }
  };

  // compute an effective theme on start
  useEffect(() => {
    computeEffectiveTheme();
  });

  // update if an user changes the visual theme selector
  const updateVisualTheme = () => {
    updateSystemVisualTheme();
  };

  // add a visual theme selector to monitor its state
  const addThemeSelector = (selector: RefObject<null>) => {
    if (!selector.current) return;

    const elem = selector.current as HTMLSelectElement;
    if (elem.type !== "select-one") return;

    if (themeSelector !== undefined) {
      themeSelector.removeEventListener("change", updateVisualTheme);
    }

    setThemeSelector(elem);
    elem.addEventListener("change", updateVisualTheme);

    updateSystemVisualTheme();
  };

  return <Context value={{ currentTheme, effectiveTheme, addThemeSelector }}>{children}</Context>;
}
