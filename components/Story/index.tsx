import styles from "./index.module.css";

import Image from "next/image";
import { FC } from "react";

const Story: FC = () => {
  return (
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
  );
};

export default Story;
