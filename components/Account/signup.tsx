import styles from "./index.module.css";

import Box from "@components/Box";
import Input from "@components/Input";
import Logo from "@components/Logo";
import Spacer from "@components/Spacer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { object as yupObject, string as yupString } from "yup";

const schema = yupObject().shape({
  email: yupString().email().required(),
  fullName: yupString().required(),
  userName: yupString().min(3).required(),
  password: yupString().min(6).required(),
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

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("success");
    } catch (err: any) {
      console.log(err.code);
      console.log(err.message);
    }
  };

  const displayHint = () => {
    if (Object.values(formState).every((val) => val === "")) return "";

    try {
      schema.validateSync(formState, { abortEarly: false });
      return "";
    } catch (err: any) {
      return err.errors[0];
    }
  };

  return (
    <section className={styles.container}>
      <Box size={4}>
        <Logo size="large" />
        <p className={styles.msg}>
          Sign up to see photos and videos from your friends
        </p>

        <Spacer y={4} />

        <form onSubmit={handleSubmit}>
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
            Sign up
          </button>

          <Spacer y={2} />
          <p className={styles.hint}>{displayHint()}</p>
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
