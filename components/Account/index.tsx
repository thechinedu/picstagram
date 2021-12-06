import { FC } from "react";

import Login from "./Login";
import Signup from "./Signup";

type AccountProps = {
  type: "login" | "signup";
};

const Account: FC<AccountProps> = ({ type }) =>
  type === "login" ? <Login /> : <Signup />;

export default Account;
