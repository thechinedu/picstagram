import { AuthProvider } from "@providers/AuthProvider";
import { act, render, RenderOptions, screen } from "@testing-library/react";
import { FC, ReactElement } from "react";

const Provider: FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Provider, ...options });

export { customRender as render };
export { act, screen };
export { default as userEvent } from "@testing-library/user-event";
