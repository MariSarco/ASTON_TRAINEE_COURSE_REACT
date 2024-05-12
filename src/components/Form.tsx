import { FC, useState } from "react";
interface FormProps {
  title: string;
  className: string;
  handleClick: (email: string, password: string) => void;
}

const Form: FC<FormProps> = ({ title, className, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button
        className={className}
        onClick={() => handleClick(email, password)}
      >
        {title}
      </button>
    </div>
  );
};

export { Form };
