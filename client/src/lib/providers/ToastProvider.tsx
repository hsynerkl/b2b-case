import { Toaster } from "sonner";
import type { ReactNode } from "react";

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        richColors
        expand={false}
        closeButton
        duration={3000}
        theme="light"
      />
    </>
  );
};

export default ToastProvider;
