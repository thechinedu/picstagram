import Login from "@pages/index";
import { getAuth, signInWithEmailAndPassword } from "@utils/firebase";
import { render, screen, userEvent } from "@utils/test-utils";

jest.mock("@utils/firebase");

describe("Login", () => {
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let loginButton: HTMLButtonElement;

  beforeEach(() => {
    render(<Login />);
    emailInput = screen.getByLabelText("Email address");
    passwordInput = screen.getByLabelText("Password");
    loginButton = screen.getByRole("button", { name: "Log in" });
  });

  it("renders the picstagram heading", () => {
    const heading = screen.getByText("Picstagram");
    expect(heading).toBeInTheDocument();
  });

  describe("when the user's credentials is correct", () => {
    it("allows the user to log in to the platform", () => {
      const mockAuthReturn = {};

      (getAuth as jest.Mock).mockReturnValue(mockAuthReturn);

      (signInWithEmailAndPassword as jest.Mock).mockReturnValue({
        user: {},
      });

      expect(screen.getByText("Log in")).toBeInTheDocument();
      expect(loginButton).toBeDisabled();

      userEvent.type(emailInput, "test@example.com");
      userEvent.type(passwordInput, "s3c3r3tp@ss");

      expect(loginButton).toBeEnabled();

      userEvent.click(loginButton);

      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        mockAuthReturn,
        emailInput.value,
        passwordInput.value
      );
      expect(screen.queryByText("Log in")).not.toBeInTheDocument();
    });
  });

  describe("when the user's credentials is not correct", () => {
    it("prevents the user from logging in", () => {
      (signInWithEmailAndPassword as jest.Mock).mockImplementation(() => {
        throw new Error("Invalid credentials");
      });

      userEvent.type(emailInput, "test@example.com");
      userEvent.type(passwordInput, "s3c3r3tp@ss");

      userEvent.click(loginButton);

      expect(
        screen.getByText("Invalid email or password. Please try again")
      ).toBeInTheDocument();
    });
  });
});
