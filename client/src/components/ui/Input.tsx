import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

type InputProps = {
  variant?: "primary" | "secondary";
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  variant = "primary",
  label,
  className,
  ...props
}: InputProps) => {
  const styles = clsx(
    variant === "primary" &&
      "flex h-10 w-full rounded-lg border border-gray focus-visible:ring-primary bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2",
    variant === "secondary" && "örnek olması için ekledim",
    className,
  );

  return (
    <div className="w-full">
      {label && <label className="text-sm font-medium mb-1.5">{label}</label>}
      <input className={styles} {...props} />
    </div>
  );
};
