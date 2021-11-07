import Account from "@components/Account";
import { useAuth } from "@providers/AuthProvider";
import { getAuth, signOut } from "@utils/firebase";

import type { NextPage } from "next";

const GuestHome = () => <Account type="login" />;
const AuthUserHome = () => {
  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      Homepage for signed in user{" "}
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

const Home: NextPage = () => {
  // TODO: if user is signed in, the GuestHome component first renders before the AuthUserHome component
  // because a network request first has to be made to decide if a user is signed in or not
  // maybe the Layout component can help handle this more efficiently somehow?
  const { user } = useAuth();

  return user ? <AuthUserHome /> : <GuestHome />;
};

export default Home;
