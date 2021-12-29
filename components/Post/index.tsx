import styles from "./index.module.css";

import Box from "@components/Box";
import { Bookmark, Comment, Heart, Menu, Share } from "@components/Icons";
import Spacer from "@components/Spacer";
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

        <h4>menfashion.feed</h4>

        <Menu className={styles.postHeaderIcon} />
      </div>

      <div>
        <Image
          src="https://placebeard.it/1080/1080/notag"
          alt="post content"
          width={1080}
          height={1080}
        />
      </div>

      <Spacer y={2} />

      <div>
        <div className={styles.actions}>
          <Heart />
          <Comment />
          <Share />
          <Bookmark />
        </div>

        <Spacer y={2} />

        <p className={styles.likeInfo}>1,115 likes</p>

        <Spacer y={1} />

        <p>
          <span className={styles.username}>menfashion.feed</span> do what makes
          you happy!
        </p>

        <Spacer y={0.5} />

        <a href="#" className={styles.comments}>
          View all 10 comments
        </a>

        <Spacer y={1} />

        <p className={styles.dateInfo}>2 hours ago</p>
      </div>

      <div className="add-new-comment"></div>
    </Box>
  );
};

export default Post;
