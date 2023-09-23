import React, { FC } from "react";
import classNames from "classnames";

interface TitleProps {
  text: string;
  className?: string;
}

const Title: FC<TitleProps> = ({ text, className }) => {
  const titleClass = classNames(
    "font-extrabold text-4xl leading-10 tracking-wider text-lightDark uppercase",
    className
  );

  return <h2 className={titleClass}>{text}</h2>;
};

export default Title;
