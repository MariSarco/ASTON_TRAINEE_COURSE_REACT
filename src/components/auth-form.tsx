import { FC, useState } from "react";
interface FormProps {
  name: string;
  title: string;
  className: string;
  handleClick: (email: string, password: string) => void;
}

const Form: FC<FormProps> = ({ name, title, className, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col gap-y-6">
      <span className="font-bold text-xl text-accent">{name}</span>
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
