// import styles from "@styles/Home.module.css";

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
    <section>
      <Logo size="large" />

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

        <button disabled>Log In</button>
      </form>
    </section>
  );
};

export default Home;
