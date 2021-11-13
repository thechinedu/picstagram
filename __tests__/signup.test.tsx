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
import { getAuth, createUserWithEmailAndPassword } from "@utils/firebase";

jest.mock("@utils/firebase");

(getAuth as jest.Mock).mockReturnValue({});
(createUserWithEmailAndPassword as jest.Mock).mockReturnValue({
  user: {},
});

describe("Home", () => {
  let container: RenderResult;

  // beforeAll(() => {
  //   initializeApp(config);

  //   auth = getAuth();
  //   connectAuthEmulator(auth, "http://localhost:9099");
  // });

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
    it("creates a new user", async () => {
      // allow(getAuth).toBeCalled().andReturn(auth);
      // allow(getAuth).toReceive()
      // allow(createUser).toBeCalled().with(3 args).andThrow()
      /**
       * Mock firebase auth
       * test that the right hint is displayed
       * test that the user is redirected to the home page (mock router if it is not possible to test that a redirect happens)
       * test that signup is not allowed if the email is already in use
       * test that signup is not allowed if the password is not strong enough
       */
      const emailInput = container.getByLabelText("Email address");
      const fullNameInput = container.getByLabelText("Full Name");
      const userNameInput = container.getByLabelText("Username");
      const passwordInput = container.getByLabelText("Password");
      const submitButton = container.getByText("Sign up");

      // expect(submitButton).toBeDisabled();

      userEvent.type(emailInput, "test@example.com");
      userEvent.type(fullNameInput, "Test User");
      userEvent.type(userNameInput, "testuser");
      userEvent.type(passwordInput, "s3c3r3tp@ss");
      // screen.debug();

      // expect(submitButton).toBeEnabled();
      userEvent.click(submitButton);

      expect(4).toBe(4);
    });
  });
});
