import styles from "./index.module.css";

import Box from "@components/Box";
import Input from "@components/Input";
import Logo from "@components/Logo";
import Spacer from "@components/Spacer";
import { getAuth, signInWithEmailAndPassword } from "@utils/firebase";
import cn from "classnames";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { object as yupObject, string as yupString } from "yup";

const schema = yupObject().shape({
  email: yupString().email().required(),
  password: yupString().min(6).required(),
});

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [hint, setHint] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { email, password } = formState;
  const isValid = schema.isValidSync(formState);
  const isSubmitButtonDisabled = !isValid || isLoggingIn;

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsLoggingIn(true);

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setIsLoggingIn(false);
      setHint("Invalid email or password. Please try again");
    }
  };

  return (
    <section className={styles.container}>
      <Box size={4}>
        <Logo size="large" />

        <Spacer y={4} />

        <form onSubmit={handleSubmit}>
          <Input
            id="email-address"
            label="Email address"
            onChange={(evt) =>
              setFormState({ password, email: evt.target.value })
            }
            type="email"
            value={email}
          />
          <Spacer y={1} />
          <Input
            id="password"
            label="Password"
            onChange={(evt) =>
              setFormState({ email, password: evt.target.value })
            }
            type="password"
            value={password}
          />
          <Spacer y={2} />

          <button
            className={styles.btn}
            disabled={isSubmitButtonDisabled}
            data-testid="submit"
          >
            {isLoggingIn ? "Logging in..." : "Log in"}
          </button>

          <Spacer y={2} />
          <p className={cn(styles.hint, styles.errorHint)} data-testid="hint">
            {hint}
          </p>
        </form>

        <Spacer y={4} />

        <a href="#">Forgotten your password?</a>
      </Box>

      <Spacer y={4} />

      <Box size={3}>
        <p>
          Don&#39;t have an account? <Link href="/sign-up">Sign up</Link>
        </p>
      </Box>
    </section>
  );
};

export default Login;
