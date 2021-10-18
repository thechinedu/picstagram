import styles from "./index.module.css";

import { FC } from "react";

type LogoProps = {
  size?: "normal" | "large";
};

const Logo: FC<LogoProps> = ({ size = "normal" }) => {
  const fontSize = size === "normal" ? "large" : "x-large";

  return (
    <div className={styles.logo} style={{ fontSize: `var(--${fontSize})` }}>
      Picstagram
    </div>
  );
};

export default Logo;
