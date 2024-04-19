import { ThemeProvider } from "@/components/theme/theme-provider";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/menu/Header";
import { Sidebar } from "./components/menu/Sidebar";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="selection:bg-secondary-color selection:text-default-color">
        <Header />
        <Sidebar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
};
