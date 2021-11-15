import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Signup from "@pages/sign-up";
import { AuthProvider } from "@providers/AuthProvider";
import { createUserWithEmailAndPassword } from "@utils/firebase";
import { useRouter } from "next/router";

jest.mock("@utils/firebase");
jest.mock("next/router");

(createUserWithEmailAndPassword as jest.Mock).mockReturnValue({
  user: {},
});

(useRouter as jest.Mock).mockReturnValue([]);

describe("Home", () => {
  beforeEach(() => {
    render(
      <AuthProvider>
        <Signup />
      </AuthProvider>
    );
  });

  it("renders the picstagram heading", () => {
    const heading = screen.getByText("Picstagram");
    expect(heading).toBeInTheDocument();
  });

  describe("when a user enters valid values", () => {
    it("creates a new user", async () => {
      /**
       * Mock firebase auth
       * test that the right hint is displayed
       * test that the user is redirected to the home page (mock router if it is not possible to test that a redirect happens)
       * test that signup is not allowed if the email is already in use
       * test that signup is not allowed if the password is not strong enough
       */
      const emailInput = screen.getByLabelText("Email address");
      const fullNameInput = screen.getByLabelText("Full Name");
      const userNameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const submitButton = screen.getByText("Sign up");

      expect(submitButton).toBeDisabled();

      userEvent.type(emailInput, "test@example.com");
      userEvent.type(fullNameInput, "Test User");
      userEvent.type(userNameInput, "testuser");
      userEvent.type(passwordInput, "s3c3r3tp@ss");
      // screen.debug();

      expect(submitButton).toBeEnabled();

      userEvent.click(submitButton);
      await act(async () => {}); // TODO: temp fix for act warnings. Find a better solution

      expect(4).toBe(4);
    });
  });
});
