import styles from "./index.module.css";

import Header from "@components/Header";
import { Home } from "@components/Icons";
import { getAuth, signOut } from "@utils/firebase";

const Dashboard = () => {
  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <Header />

      <div className={styles.welcomeContainer}>
        <div>
          <Home />
        </div>
        <h3>Welcome to Picstagram</h3>
        <p>
          When you follow people, you&apos;ll see their photos and videos on
          this page.
        </p>
        <button>Find people to follow</button>
      </div>

      <button onClick={handleSignOut}>Sign out</button>
    </main>
  );
};

export default Dashboard;
