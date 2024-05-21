import { useNavigate } from "react-router-dom";
import { Form } from "./auth-form";
import { setUser } from "../../store/slices/user/user-slice";
import { useAppDispatch } from "../hooks/redux-hooks";
import { signInUser } from "../../store/services/farebase-service";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignIn = (email: string, password: string) => {
    signInUser(email, password)
      .then((payload) => {
        if (payload?.user) {
          dispatch(
            setUser({
              email: payload.user.email,
              id: payload.user.uid,
              token: payload.user.refreshToken,
            })
          );
          navigate("/");
        }
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
