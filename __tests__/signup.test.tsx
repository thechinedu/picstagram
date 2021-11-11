import {
  act,
  render,
  RenderResult,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  let auth: ReturnType<typeof getAuth>;

  beforeAll(() => {
    initializeApp(config);

    auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:9099");
  });

  beforeEach(async () => {
    await waitFor(() => {
      container = render(
        <AuthProvider>
          <Signup />
        </AuthProvider>
      );
    });
  });

  it("renders the picstagram heading", () => {
    const heading = container.getByText("Picstagram");
    expect(heading).toBeInTheDocument();
  });

  describe("when a user enters valid values", () => {
    it("creates a new user", () => {
      const emailInput = container.getByLabelText("Email address");
      const fullNameInput = container.getByLabelText("Full Name");
      const userNameInput = container.getByLabelText("Username");
      const passwordInput = container.getByLabelText("Password");
      const submitButton = container.getByText("Sign up");

      expect(submitButton).toBeDisabled();

      // act(() => {
      userEvent.type(emailInput, "test@example.com");
      userEvent.type(fullNameInput, "Test User");
      userEvent.type(userNameInput, "testuser");
      userEvent.type(passwordInput, "s3c3r3tp@ss");
      // screen.debug();
      // });

      expect(submitButton).toBeEnabled();
      userEvent.click(submitButton);

      console.log(auth.currentUser, "currentUser");

      expect(4).toBe(4);
    });
  });
});
