import { FC, SVGProps } from "react";

const Bookmark: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="#262626"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <polygon
      fill="none"
      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default Bookmark;
