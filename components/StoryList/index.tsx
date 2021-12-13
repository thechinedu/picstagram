import styles from "./index.module.css";

import Box from "@components/Box";
import Story from "@components/Story";
import { FC } from "react";

const StoryList: FC = () => {
  return (
    <Box size={3} className={styles.storyContainer}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <Story key={i} />
      ))}
    </Box>
  );
};

export default StoryList;
