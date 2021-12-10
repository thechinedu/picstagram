import styles from "./index.module.css";

import Box from "@components/Box";
import Header from "@components/Header";
import { Home } from "@components/Icons";
import Spacer from "@components/Spacer";
import Image from "next/image";

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

      <Box size={2} className={styles.storyContainer}>
        <div className={styles.storyImageContainer}>
          <figure>
            <Image
              src="https://placebeard.it/65/65/notag"
              alt="user story"
              width={65}
              height={65}
              className={styles.storyImage}
            />

            <figcaption>username</figcaption>
          </figure>
        </div>

        <div className={styles.storyImageContainer}>
          <figure>
            <Image
              src="https://placebeard.it/65/65/notag"
              alt="user story"
              width={65}
              height={65}
              className={styles.storyImage}
            />

            <figcaption>username</figcaption>
          </figure>
        </div>
      </Box>

      <WelcomeMessage />
    </main>
  );
};

export default Dashboard;
