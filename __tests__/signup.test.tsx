import Signup from "@pages/sign-up";
import { createUserWithEmailAndPassword, getAuth } from "@utils/firebase";
import { act, render, screen, userEvent } from "@utils/test-utils";
import { useRouter } from "next/router";

jest.mock("@utils/firebase");
jest.mock("next/router");

describe("Sign up", () => {
  let emailInput: HTMLInputElement;
  let fullNameInput: HTMLInputElement;
  let userNameInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let signUpButton: HTMLButtonElement;

  beforeEach(() => {
    render(<Signup />);
    emailInput = screen.getByLabelText("Email address");
    fullNameInput = screen.getByLabelText("Full Name");
    userNameInput = screen.getByLabelText("Username");
    passwordInput = screen.getByLabelText("Password");
    signUpButton = screen.getByText("Sign up");
  });

  it("renders the picstagram heading", () => {
    const heading = screen.getByText("Picstagram");
    expect(heading).toBeInTheDocument();
  });

  describe("when a user enters valid values", () => {
    it("creates a new user", async () => {
      const mockRouter = jest.fn();
      const mockAuthReturn = {};

      (getAuth as jest.Mock).mockReturnValue(mockAuthReturn);

      (createUserWithEmailAndPassword as jest.Mock).mockReturnValue({
        user: {},
      });

      (useRouter as jest.Mock).mockImplementation(() => ({
        push: mockRouter,
      }));

      expect(screen.queryByText("Sign up")).toBeInTheDocument();
      expect(signUpButton).toBeDisabled();

      userEvent.type(emailInput, "test@example.com");
      userEvent.type(fullNameInput, "Test User");
      userEvent.type(userNameInput, "testuser");
      userEvent.type(passwordInput, "s3c3r3tp@ss");

      expect(signUpButton).toBeEnabled();

      userEvent.click(signUpButton);
      await act(async () => {}); // TODO: temp fix for 'act warnings'. Find a better solution

      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        mockAuthReturn,
        emailInput.value,
        passwordInput.value
      );
      expect(mockRouter).toHaveBeenCalledWith("/");
      expect(screen.queryByText("Sign up")).not.toBeInTheDocument();
    });
  });

  describe("when a user enters invalid values", () => {
    it("shows helpful hints when filling out the form", () => {
      const hintElement = screen.getByTestId("hint");

      expect(hintElement).toHaveTextContent("");

      userEvent.type(emailInput, "test@");
      expect(hintElement).toHaveTextContent("Email must be a valid email");

      userEvent.clear(emailInput);
      userEvent.type(emailInput, "test@example.com");
      expect(hintElement).toHaveTextContent("Full Name is a required field");

      userEvent.type(fullNameInput, "Test User");
      expect(hintElement).toHaveTextContent(
        "User Name must be at least 3 characters"
      );

      userEvent.type(userNameInput, "testuser");
      expect(hintElement).toHaveTextContent(
        "Password must be at least 6 characters"
      );

      userEvent.type(passwordInput, "s3c3r3tp@ss");

      expect(hintElement).toHaveTextContent("");
    });
  });
});
