import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase.setup";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(
    () =>
      auth.onAuthStateChanged((firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      }),
    []
  );

  // Google provider sign in
  const signInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    try {
      setLoading(true);
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  // logOut
  const logOut = async () => {
    const auth = getAuth();

    try {
      return await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(user);
  const value = {
    user,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
