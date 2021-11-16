import Signup from "@pages/sign-up";
import { createUserWithEmailAndPassword, getAuth } from "@utils/firebase";
import { act, render, screen, userEvent } from "@utils/test-utils";
import { useRouter } from "next/router";

jest.mock("@utils/firebase");
jest.mock("next/router");

describe("Home", () => {
  beforeEach(() => {
    render(<Signup />);
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
      const mockRouterReturn: string[] = [];
      const mockAuthReturn = {};

      (getAuth as jest.Mock).mockReturnValue(mockAuthReturn);

      (createUserWithEmailAndPassword as jest.Mock).mockReturnValue({
        user: {},
      });

      (useRouter as jest.Mock).mockReturnValue(mockRouterReturn);

      const emailInput: HTMLInputElement =
        screen.getByLabelText("Email address");
      const fullNameInput: HTMLInputElement =
        screen.getByLabelText("Full Name");
      const userNameInput: HTMLInputElement = screen.getByLabelText("Username");
      const passwordInput: HTMLInputElement = screen.getByLabelText("Password");
      const submitButton: HTMLButtonElement = screen.getByText("Sign up");

      expect(submitButton).toBeDisabled();

      userEvent.type(emailInput, "test@example.com");
      userEvent.type(fullNameInput, "Test User");
      userEvent.type(userNameInput, "testuser");
      userEvent.type(passwordInput, "s3c3r3tp@ss");

      expect(submitButton).toBeEnabled();

      userEvent.click(submitButton);
      await act(async () => {}); // TODO: temp fix for 'act warnings'. Find a better solution

      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        mockAuthReturn,
        emailInput.value,
        passwordInput.value
      );
      expect(mockRouterReturn.length).toBe(1);
      expect(mockRouterReturn[0]).toBe("/");
    });
  });
});
