import { useNavigate } from "react-router-dom";
import { Form } from "./auth-form";
import { setUser } from "../../store/slices/user/user-slice";
import { useAppDispatch } from "../hooks/redux-hooks";
import { signUpUser } from "../../store/services/farebase-service";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    signUpUser(email, password)
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
      .catch(console.error);
  };

  return (
    <Form
      name="Registration"
      className="bg-amber-500 border border-amber-500 hover:bg-amber-600 text-white font-bold py-1 px-2 rounded"
      title="SignUp"
      handleClick={handleRegister}
    />
  );
};

export { SignUp };
