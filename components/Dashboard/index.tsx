import styles from "./index.module.css";

import Box from "@components/Box";
import Header from "@components/Header";
import { Home } from "@components/Icons";
import Spacer from "@components/Spacer";
import StoryList from "@components/StoryList";
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

      <div className={styles.feedContainer}>
        <div className={styles.feedContent}>
          <StoryList />
          <WelcomeMessage />

          <Box size={2}>
            <div className="top-section">
              <div className="image-and-metadata">
                <Image
                  src="https://placebeard.it/30/30/notag"
                  alt="feed item owner"
                  width={30}
                  height={30}
                />

                <div className="user-name">
                  <h4>menfashion.feed</h4>
                </div>
              </div>

              <div className="menu-vert-icon"></div>
            </div>

            <div className="middle-section"></div>

            <div className="metadata-section"></div>

            <div className="add-new-comment"></div>
          </Box>
        </div>

        <p className={styles.aside}>Suggestions section</p>
      </div>
    </main>
  );
};

export default Dashboard;
