"use client";

import { createContext, use, useState } from "react";

export interface User {
  name: string;
}

export interface UserContext {
  user: User | undefined;
  tryToLogin: (login?: string, password?: string, onFail?: (message?: string) => void) => void;
  logout: () => void;
}

const Context = createContext({} as UserContext);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type UseUser<T = User> = () => UserContext;

export const useUser: UseUser = () => use(Context);

export function UserProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [user, setUser] = useState<User | undefined>();

  // a simulator of a real login process
  const tryToLogin = async (
    login?: string,
    password?: string,
    onFail?: (message?: string) => void
  ) => {
    setTimeout(() => {
      if (login == "hello@24x7.work" && password == "welcome!") {
        setUser({ name: "John D. Stranger" } as User);
        return;
      }

      if (onFail !== undefined) {
        onFail("Can't login. Check e-mail and password");
      }
    }, 500 + Math.ceil(700 * Math.random()));
  };

  const logout = () => {
    setUser(undefined);
  };

  return <Context value={{ user, tryToLogin, logout }}>{children}</Context>;
}
