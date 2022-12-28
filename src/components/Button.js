import React from "react";
import { getClasses } from "../utils/getClasses";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

function Button({ type, variant = "primary", children, ...rest }) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={getClasses(["button", [`button--${buttonTypes[variant]}`]])}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select id={id} className={getClasses(["button", "__select"])} {...rest}>
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
