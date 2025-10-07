import { ThemeProvider } from "@/components/theme/theme-provider";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/menu/Header";
import { Sidebar } from "./components/menu/Sidebar";
import { Footer } from "./components/menu/Footer";
import { TooltipProvider } from "./components/ui/tooltip";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        {/* Div gradient left */}
        <div
          className="w-1/2 h-1/3 fixed -top-32 left-0 
  bg-gradient-to-r 
  from-[var(--color-secondary-80)] 
  via-[var(--color-secondary-30)] 
  to-[var(--color-accent-75)] 
  dark:from-[var(--color-secondary-80)] 
  dark:via-[var(--color-secondary-30)] 
  dark:to-[var(--color-accent-70)] 
  p-10 blur-3xl opacity-50 dark:opacity-40 rounded-full
  transition-colors duration-300"
        />
        <div className="selection:bg-secondary selection:text-default">
          <Header />
          <Sidebar />
          <Outlet />
          <Footer />
        </div>
        {/* Div gradient right */}
        <div
          className="w-1/2 h-1/3 fixed -top-32 right-0 
  bg-gradient-to-r 
  from-[var(--color-secondary-80)] 
  via-[var(--color-secondary-30)] 
  to-[var(--color-accent-75)] 
  dark:from-[var(--color-secondary-80)] 
  dark:via-[var(--color-secondary-30)] 
  dark:to-[var(--color-accent-70)] 
  p-10 blur-3xl opacity-50 dark:opacity-40 rounded-full
  transition-colors duration-300"
        />
      </TooltipProvider>
    </ThemeProvider>
  );
};
