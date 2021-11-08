import { render, screen } from "@testing-library/react";
import Home from "@pages/index";
import { AuthProvider } from "@providers/AuthProvider";
import {
  config,
  connectAuthEmulator,
  getAuth,
  initializeApp,
} from "@utils/firebase";

console.log(config, process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

describe("Home", () => {
  beforeAll(() => {
    initializeApp(config);

    const auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:9099");
  });

  it("renders a heading", () => {
    render(
      <AuthProvider>
        <Home />
      </AuthProvider>
    );

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
