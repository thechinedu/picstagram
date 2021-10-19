import { createElement, FC } from "react";

type SpacerProps = {
  x?: number;
  y?: number;
};

const numToSpacerVal = (num: number) => {
  if (num === 0.5) return `var(--spacer-1\\/2)`;

  return `var(--spacer-${num})`;
};

const Spacer: FC<SpacerProps> = ({ x = 0, y = 0 }) => {
  const component = y ? "div" : "span";
  const style = {
    marginTop: numToSpacerVal(y),
    marginLeft: numToSpacerVal(x),
  };

  return createElement(component, { style });
};

export default Spacer;
