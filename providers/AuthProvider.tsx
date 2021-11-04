import { getAuth, onAuthStateChanged, User } from "@firebase/auth";
import { createContext, FC, useEffect, useContext, useState } from "react";

const AuthContext = createContext<User | null>(null);

const { Provider } = AuthContext;

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

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
    });
  }, []);

  return <Provider value={user}>{children}</Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
