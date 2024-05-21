import { getUser } from "../../store/slices/user/user-selector";
import { removeUser, setUser } from "../../store/slices/user/user-slice";
import { useAppSelector, useAppDispatch } from "./redux-hooks";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

const signOut = async () => {
  const auth = getAuth();
  try {
    await auth.signOut();
  } catch (error) {
    alert(`Error signing out: ${error}`);
  }
};

export function useAuth() {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const { email, token, id } = useAppSelector(getUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        };
        dispatch(setUser(userData));
        setIsLoading(false);
      } else {
        dispatch(removeUser());
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth, dispatch]);

  return {
    isLoading: isLoading,
    isAuth: !!email,
    email,
    token,
    id,
  };
}

export { signOut };
