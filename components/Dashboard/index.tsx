import styles from "./index.module.css";

import Box from "@components/Box";
import Header from "@components/Header";
import { Home } from "@components/Icons";
import Spacer from "@components/Spacer";
import StoryList from "@components/StoryList";

const WelcomeMessage = () => (
  <Box size={2} className={styles.welcomeContainer}>
    <div className={styles.iconContainer}>
      <Home />
    </div>
    <Spacer y={2} />
    <h4>Welcome to Picstagram</h4>
    <p className={styles.welcomeMessage}>
      When you follow people, you&apos;ll see their photos and videos on this
      page.
    </p>
    <Spacer y={2} />
    <button className={styles.btn}>Find people to follow</button>
  </Box>
);

const Dashboard = () => {
  return (
    <main>
      <Header />

      <StoryList />

      <WelcomeMessage />
    </main>
  );
};

export default Dashboard;
