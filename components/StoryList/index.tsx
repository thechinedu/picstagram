import styles from "./index.module.css";

import Box from "@components/Box";
import Story from "@components/Story";
import { CircleLeft, CircleRight } from "@components/Icons";
import { FC, useRef } from "react";

const SCROLL_OFFSET = 375;

const StoryList: FC = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollToRight = () => {
    const container = mainContainerRef.current as HTMLDivElement;
    const currentWidth = container.getBoundingClientRect().width;
    const { scrollWidth } = container;
    const pageTotal = Math.ceil(scrollWidth / currentWidth);

    container.scrollBy({
      left: SCROLL_OFFSET,
      behavior: "smooth",
    });

    setTimeout(() => {
      console.log({
        scrollLeft: container.scrollLeft,
        pageTotal,
        currentWidth,
      });
    }, 1);
  };

  return (
    <Box className={styles.mainContainer}>
      <div className={styles.storyContainer} ref={mainContainerRef}>
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
