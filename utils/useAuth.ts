import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useState, useEffect } from "react";

const auth = getAuth();

export const useAuth = () => {
  const [user, setUser] = useState<User>();
  
  useEffect(() => {
    const unsubscribeAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
    return unsubscribeAuthStateChanged;
  }, []);

  return {
    user,
  };
}