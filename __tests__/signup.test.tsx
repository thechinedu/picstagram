import { act, render, RenderResult, waitFor } from "@testing-library/react";
import Signup from "@pages/sign-up";
import { AuthProvider } from "@providers/AuthProvider";
import {
  config,
  connectAuthEmulator,
  getAuth,
  initializeApp,
} from "@utils/firebase";

describe("Home", () => {
  let container: RenderResult;
  beforeAll(async () => {
    initializeApp(config);

    const auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:9099");

    await waitFor(() => {
      container = render(
        <AuthProvider>
          <Signup />
        </AuthProvider>
      );
    });
  });

  it("renders the picstagram heading", async () => {
    const heading = container.queryByText("Picstagram");
    expect(heading).toBeInTheDocument();
  });
});
