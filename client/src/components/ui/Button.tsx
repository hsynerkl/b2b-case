import { Link } from "react-router-dom";
import clsx from "clsx";
import type { MouseEvent, ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  to?: string;
  className?: string;
  children: ReactNode;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export const Button = ({
  variant = "primary",
  to,
  className,
  children,
  onClick,
  disabled,
  type = "button",
}: ButtonProps) => {
  const styles = clsx(
    "w-fit select-none",
    variant === "primary" &&
      "bg-dark text-light hover:bg-primary transition px-4 py-2 rounded-full text-xs cursor-pointer disabled:!bg-dark disabled:opacity-50 disabled:cursor-not-allowed",
    variant === "secondary" && "örnek olması için ekledim",
    className,
  );

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
};
