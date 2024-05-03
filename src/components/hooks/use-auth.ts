import { removeUser, setUser } from '../store/slices/userSlice';
import { useAppSelector, useAppDispatch } from "./redux-hooks";
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useEffect } from 'react';

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
  const {email, token, id} = useAppSelector(state => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        };
        dispatch(setUser(userData));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  });

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}

export {signOut}