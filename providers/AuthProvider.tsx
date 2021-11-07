import { getAuth, onAuthStateChanged } from "@utils/firebase";
import { createContext, FC, useEffect, useContext, useState } from "react";

import type { User } from "@utils/firebase";

type AuthStatus = "pending" | "success";

type AuthContextProps = {
  user: User | null;
  userAuthStatus: AuthStatus;
};

const AuthContext = createContext<AuthContextProps | null>(null);

const { Provider } = AuthContext;

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userAuthStatus, setUserAuthStatus] = useState<AuthStatus>("pending");

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User signed in");
        setUser(user);
      } else {
        console.log("User signed out");
        setUser(null);
      }

      setUserAuthStatus("success");
    });
  }, []);

  return <Provider value={{ user, userAuthStatus }}>{children}</Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
