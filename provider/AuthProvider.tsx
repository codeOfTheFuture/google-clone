import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  User,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase.setup";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null),
    [loading, setLoading] = useState<boolean>(false),
    router = useRouter();

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
      router.push('/');
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
    loading,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
