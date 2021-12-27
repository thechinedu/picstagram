import styles from "./index.module.css";

import Box from "@components/Box";
import { Menu } from "@components/Icons";
import Image from "next/image";
import { FC } from "react";

const Post: FC = () => {
  return (
    <Box size={2} className={styles.postContainer}>
      <div className={styles.postHeader}>
        <div className="image-and-metadata">
          <a href="#" className={styles.postHeaderImageContainer}>
            <Image
              src="https://placebeard.it/30/30/notag"
              alt="feed item owner"
              width={30}
              height={30}
            />
          </a>
        </div>

        <div className="user-name">
          <h4>menfashion.feed</h4>
        </div>

        <Menu className={styles.postHeaderIcon} />
      </div>

      <div className="middle-section"></div>

      <div className="metadata-section"></div>

      <div className="add-new-comment"></div>
    </Box>
  );
};

export default Post;
