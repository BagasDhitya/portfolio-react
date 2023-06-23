import { FC } from "react";
import { Link } from "react-router-dom";

import { ButtonProps } from "../utils/component";

const Button: FC<ButtonProps> = ({ id, to, label, type, target, onClick }) => {
  return (
    <Link to={to} target={target}>
      <button
        id={id}
        className={`${
          type === "filled"
            ? "bg-porto-sky-500 hover:bg-porto-sky-700"
            : "bg-white border-porto-sky-500"
        }  ${
          type === "filled" ? "text-white" : "text-porto-sky-700"
        } font-bold py-2 px-4 rounded w-full h-full`}
        onClick={onClick}
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;
