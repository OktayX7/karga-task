import React, { FC } from "react";
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "white" | "lightDark";
  className?: any;
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  className,
  type,
}) => {
  const buttonClasses = classNames({
    "bg-primary hover:bg-opacity-80 text-white px-8 py-6 rounded-2xl":
      variant === "primary",
    "bg-white hover:bg-opacity-80 text-primary px-8 py-6 rounded-2xl":
      variant === "white",
    "bg-lightDark hover:bg-opacity-80 text-white bg-opacity-50 px-3 py-2":
      variant === "lightDark",
    [className]: className !== undefined,
  });

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
