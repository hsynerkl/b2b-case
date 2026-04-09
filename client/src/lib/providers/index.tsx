import type { ReactNode } from "react";
import QueryProvider from "./QueryProvider";
import ToastProvider from "./ToastProvider";
import RouterProvider from "./RouterProvider";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <QueryProvider>
      <ToastProvider>
        <RouterProvider>{children}</RouterProvider>
      </ToastProvider>
    </QueryProvider>
  );
};
export default AppProviders;
