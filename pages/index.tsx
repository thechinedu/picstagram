import Account from "@components/Account";
import { useAuth } from "@providers/AuthProvider";

import type { NextPage } from "next";

const GuestHome = () => <Account type="login" />;
const AuthUserHome = () => <div>Homepage for signed in user</div>;

const Home: NextPage = () => {
  const { user } = useAuth();
  console.log(user);

  return user ? <AuthUserHome /> : <GuestHome />;
};

export default Home;
