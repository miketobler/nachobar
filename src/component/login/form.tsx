import Button from "@/component/ui/button";
import Header from "@/component/ui/header";
import TextInput from "@/component/ui/text-input";
import { useUser } from "@/provider/user";
import styles from "@/style/page.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import isEmail from "validator/lib/isEmail";

export default function LoginForm() {
  const [inited, setInited] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [lockForm, setLockForm] = useState(false);
  const [lockButton, setLockButton] = useState(true);
  const [warningMessage, setWarningMessage] = useState<string | undefined>();
  const { user, tryToLogin } = useUser();

  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPass = useRef<HTMLInputElement>(null);
  const inputSubmit = useRef<HTMLButtonElement>(null);

  const checkButtonStatus = useCallback(() => {
    if (!inputEmail.current || !inputPass.current || !inputSubmit.current) return;

    // show alert if a login isn't an email
    if (inputEmail.current.value.length > 0 && !isEmail(inputEmail.current.value)) {
      setEmailAlert(true);
    } else {
      setEmailAlert(false);
    }

    // disable the submit button if we have not full credentials or the form is locked
    if (lockForm || inputEmail.current.value.length == 0 || inputPass.current.value.length == 0) {
      setLockButton(true);
    } else {
      setLockButton(false);
    }
  }, [lockForm]);

  const onLoginFail = (message?: string) => {
    setLockForm(false);
    setLockButton(false);
    setWarningMessage(message !== undefined && message.length > 0 ? message : undefined);
  };

  const submitForm = (ev: React.SyntheticEvent<HTMLFormElement>) => {
    // prevent a default action (a form request to the server)
    ev.preventDefault();

    // remove focus from the button
    if (inputSubmit.current) {
      inputSubmit.current.blur();
    }

    // clean up a warning message
    setWarningMessage(undefined);

    // lock the form and the button
    setLockForm(true);
    setLockButton(true);

    // try to login with provided credentials
    tryToLogin(inputEmail.current?.value, inputPass.current?.value, onLoginFail);
  };

  useEffect(() => {
    if (!inited && inputEmail.current) {
      inputEmail.current.focus();
      setInited(true);
    }

    checkButtonStatus();
  }, [inited, checkButtonStatus]);

  // don't show the login form if we already have an user
  if (user !== undefined) {
    return <></>;
  }

  return (
    <div className={styles.login}>
      <form method="POST" onSubmit={submitForm}>
        <Header title="Enter the Safe Room" warning={warningMessage} bottom="lg" />
        <TextInput
          ref={inputEmail}
          onChange={checkButtonStatus}
          alert={emailAlert}
          lock={lockForm}
          title="E-mail"
          name="email"
          bottom="md"
        />
        <TextInput
          ref={inputPass}
          onChange={checkButtonStatus}
          lock={lockForm}
          title="Password"
          name="pass"
          password
          bottom="lg"
        />
        <Button ref={inputSubmit} lock={lockButton} lockForm={lockForm} title="Sign in" />
      </form>
    </div>
  );
}
