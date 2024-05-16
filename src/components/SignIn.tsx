import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./auth-form";
import { setUser } from "../store/slices/user-slice";
import { useAppDispatch } from "./hooks/redux-hooks";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <Form
      name="Authorization"
      className="bg-amber-500 border border-amber-500 hover:bg-amber-600 text-white font-bold py-1 px-2 rounded"
      title="SignIn"
      handleClick={handleSignIn}
    />
  );
};

export { SignIn };
