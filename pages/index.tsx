import Account from "@components/Account";
import Dashboard from "@components/Dashboard";
import { useAuth } from "@providers/AuthProvider";

import type { NextPage } from "next";

const GuestHome = () => <Account type="login" />;
const AuthUserHome = () => <Dashboard />;

const Home: NextPage = () => {
  // TODO: if user is signed in, the GuestHome component first renders before the AuthUserHome component
  // because a network request first has to be made to decide if a user is signed in or not
  // maybe the Layout component can help handle this more efficiently somehow?
  const { user } = useAuth();

  return user ? <AuthUserHome /> : <GuestHome />;
};

export default Home;
