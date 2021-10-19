import styles from "@styles/Home.module.css";

import Input from "@components/Input";
import Logo from "@components/Logo";
import Spacer from "@components/Spacer";
import { useState } from "react";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formState;

  return (
    <section className={styles.container}>
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

        <button className={styles.btn} disabled>
          Log In
        </button>
      </form>

      <Spacer y={4} />

      <a href="#">Forgotten your password?</a>

      <Spacer y={10} />

      <p>
        Don&#39;t have an account? <a href="#">Sign up</a>
      </p>
    </section>
  );
};

export default Home;
