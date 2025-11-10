import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const currentMode = localStorage.getItem("vite-ui-theme");

  /**
   * @function change the dark mode into light mode and vice-versa...
   * */
  const handleMode = () => {
    currentMode === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Button variant="outline" size="icon" className="rounded-xl group" onClick={handleMode}>
      <Sun className="h-[1.2rem] w-[1.2rem] text-primary group-hover:text-white dark:text-default rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] group-hover:text-white text-primary dark:text-default rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
