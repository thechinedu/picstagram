import { FC, SVGProps } from "react";

const Menu: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    aria-label="More Options"
    color="#262626"
    fill="#262626"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <circle cx="12" cy="12" r="1.5"></circle>
    <circle cx="6" cy="12" r="1.5"></circle>
    <circle cx="18" cy="12" r="1.5"></circle>
  </svg>
);

export default Menu;
