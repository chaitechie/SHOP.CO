import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [checkingStatus, setCheckingStatus] = useState<boolean>(true);
  const [userId, setUserId] = useState<string>("");
  const [userName, setUserName] = useState<string | null>(null)
  useEffect(() => {
    const auth = getAuth();
    const signingIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        setUserId(user.uid);
        setUserName(user?.displayName)
      }
      setCheckingStatus(false);
    });
    return () => signingIn();
  }, []);
  return { loggedIn, checkingStatus, userId,userName };
};
