import styles from "./index.module.css";

import Box from "@components/Box";
import Story from "@components/Story";
import { CircleLeft, CircleRight } from "@components/Icons";
import { FC, useRef, useState } from "react";

const SCROLL_OFFSET = 375;

const StoryList: FC = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const handleScrollClick = (dir: "left" | "right") => () => {
    const container = mainContainerRef.current as HTMLDivElement;
    const left = dir === "left" ? -SCROLL_OFFSET : SCROLL_OFFSET;

    container.scrollBy({
      left,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = mainContainerRef.current as HTMLDivElement;
    const { scrollWidth, scrollLeft, offsetWidth } = container;

    if (scrollWidth - scrollLeft <= offsetWidth) setIsLastPage(true);
    else if (scrollLeft >= 10) {
      setIsFirstPage(false);
      setIsLastPage(false);
    } else {
      setIsFirstPage(true);
      setIsLastPage(false);
    }
  };

  return (
    <Box className={styles.mainContainer}>
      <div
        className={styles.storyContainer}
        ref={mainContainerRef}
        onScroll={handleScroll}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Story key={i} />
        ))}
      </div>
      {!isFirstPage && (
        <CircleLeft
          className={styles.iconLeft}
          onClick={handleScrollClick("left")}
        />
      )}
      {!isLastPage && (
        <CircleRight
          className={styles.iconRight}
          onClick={handleScrollClick("right")}
        />
      )}
    </Box>
  );
};

export default StoryList;
