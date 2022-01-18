import { User } from "firebase/auth";
import { createContext, useContext } from "react";

export interface Context {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
}

export const initialState = {
  user: null,
  signInWithGoogle: async () => {},
  logOut: async () => {},
};

export const AuthContext = createContext<Context>(initialState);

export const useAuth = (): Context => useContext(AuthContext);
