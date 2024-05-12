import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
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
    <Form className="text-white" title="SignIn" handleClick={handleSignIn} />
  );
};

export { SignIn };
