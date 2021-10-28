import { FC } from "react";

import Login from "./login";
import Signup from "./signup";

type AccountProps = {
  type: "login" | "signup";
};

const Account: FC<AccountProps> = ({ type }) =>
  type === "login" ? <Login /> : <Signup />;

export default Account;
