import Account from "@components/Account";
import type { NextPage } from "next";

const GuestHome = () => <Account type="login" />;
const AuthUserHome = () => <div>Homepage for signed in user</div>;

const Home: NextPage = () => {
  const currentUser = null; //useAuth();
  return currentUser ? <AuthUserHome /> : <GuestHome />;
};

export default Home;
