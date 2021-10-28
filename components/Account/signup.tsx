import styles from "./index.module.css";

import Box from "@components/Box";
import Input from "@components/Input";
import Logo from "@components/Logo";
import Spacer from "@components/Spacer";
import Link from "next/link";
import { useState } from "react";
import { object as yupObject, string as yupString } from "yup";

const schema = yupObject().shape({
  email: yupString().email().required(),
  fullName: yupString().required(),
  userName: yupString().length(3).required(),
  password: yupString().length(6).required(),
});

const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    fullName: "",
    userName: "",
    password: "",
  });
  const { email, fullName, userName, password } = formState;
  const isValid = schema.isValidSync(formState);

  return (
    <section className={styles.container}>
      <Box size={4}>
        <Logo size="large" />
        <p>Sign up to see photos and videos from your friends</p>

        <Spacer y={4} />

        <form>
          <Input
            id="email-address"
            label="Email address"
            onChange={(evt) =>
              setFormState({ ...formState, email: evt.target.value })
            }
            type="email"
            value={email}
          />
          <Spacer y={1} />

          <Input
            id="full-name"
            label="Full Name"
            onChange={(evt) =>
              setFormState({ ...formState, fullName: evt.target.value })
            }
            type="text"
            value={fullName}
          />
          <Spacer y={1} />

          <Input
            id="username"
            label="Username"
            onChange={(evt) =>
              setFormState({ ...formState, userName: evt.target.value })
            }
            type="text"
            value={userName}
          />
          <Spacer y={1} />

          <Input
            id="password"
            label="Password"
            onChange={(evt) =>
              setFormState({ ...formState, password: evt.target.value })
            }
            type="password"
            value={password}
          />
          <Spacer y={2} />

          <button className={styles.btn} disabled={!isValid}>
            Next
          </button>
        </form>
      </Box>

      <Spacer y={4} />

      <Box size={3}>
        <p>
          Have an account? <Link href="/">Log in</Link>
        </p>
      </Box>
    </section>
  );
};

export default Signup;
