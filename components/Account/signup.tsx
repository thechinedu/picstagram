import styles from "./index.module.css";

import Box from "@components/Box";
import Input from "@components/Input";
import Logo from "@components/Logo";
import Spacer from "@components/Spacer";
import { useAuth } from "@providers/AuthProvider";
import {
  errorCodeToMessage,
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "@utils/firebase";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { object as yupObject, string as yupString } from "yup";

const schema = yupObject().shape({
  email: yupString().email().required(),
  fullName: yupString().required().label("Full Name"),
  userName: yupString().min(3).required().label("User Name"),
  password: yupString().min(6).required(),
});

const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    fullName: "",
    userName: "",
    password: "",
  });
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [serverErrorCode, setServerErrorCode] = useState("");
  const router = useRouter();
  const { user } = useAuth();
  const { email, fullName, userName, password } = formState;
  const isValid = schema.isValidSync(formState);

  // TODO: find a better way to do this so that the sign up component doesn't have to render at all
  // maybe the Layout component can handle this?
  if (user) router.push("/");

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsCreatingAccount(true);

    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, {
        displayName: fullName,
      });

      await sendEmailVerification(user);

      setServerErrorCode("");

      router.push("/");
    } catch (err: any) {
      console.log(err.code, err.message);
      setServerErrorCode(err.code);
    } finally {
      setIsCreatingAccount(false);
    }
  };

  const displayHint = () => {
    // TODO: serverErrorCode should be reset when a user starts updating the relevant input field
    if (serverErrorCode) return errorCodeToMessage(serverErrorCode);

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

          <button
            className={styles.btn}
            disabled={!isValid || isCreatingAccount}
          >
            {isCreatingAccount ? "Creating account..." : "Sign up"}
          </button>

          <Spacer y={2} />
          <p
            className={cn(styles.hint, { [styles.errorHint]: serverErrorCode })}
          >
            {displayHint()}
          </p>
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
