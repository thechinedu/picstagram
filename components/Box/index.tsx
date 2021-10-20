import styles from "./index.module.css";

import { numToSpacerVal } from "@components/Spacer";
import cn from "classnames";
import { FC } from "react";

type BoxProps = {
  size?: number;
  className?: string;
};

const Box: FC<BoxProps> = ({ children, className, size = 0 }) => (
  <div
    className={cn(className, styles.box)}
    style={{ padding: numToSpacerVal(size) }}
  >
    {children}
  </div>
);

export default Box;
