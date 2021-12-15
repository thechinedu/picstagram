import styles from "./index.module.css";

import Box from "@components/Box";
import Story from "@components/Story";
import { CircleLeft, CircleRight } from "@components/Icons";
import { FC } from "react";

// Formula for calculating the amount of pages for the stories
// total_items / (scroll_left_width / size of individual item)  => Math.round(10/ (425/425))

const ScrollOffset = 320;

const StoryList: FC = () => {
  const handleScrollToRight = () => {};

  return (
    <Box className={styles.mainContainer}>
      <div className={styles.storyContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Story key={i} />
        ))}
      </div>
      <CircleLeft className={styles.iconLeft} />
      <CircleRight className={styles.iconRight} onClick={handleScrollToRight} />
    </Box>
  );
};

export default StoryList;
