import styles from "./index.module.css";

import Box from "@components/Box";
import Input from "@components/Input";
import Logo from "@components/Logo";
import Spacer from "@components/Spacer";
import { useState } from "react";
import { object as yupObject, string as yupString } from "yup";

const schema = yupObject().shape({
  email: yupString().email().required(),
  password: yupString().length(6).required(),
});

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formState;
  const isValid = schema.isValidSync(formState);

  return (
    <section className={styles.container}>
      <Box size={4}>
        <Logo size="large" />

        <Spacer y={4} />

        <form>
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

          <button className={styles.btn} disabled={!isValid}>
            Log In
          </button>
        </form>

        <Spacer y={4} />

        <a href="#">Forgotten your password?</a>
      </Box>

      <Spacer y={4} />

      <Box size={3}>
        <p>
          Don&#39;t have an account? <a href="#">Sign up</a>
        </p>
      </Box>
    </section>
  );
};

export default Login;
