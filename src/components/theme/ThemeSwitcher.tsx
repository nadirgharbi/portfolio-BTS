import { useState, useRef, useEffect } from "react";
import { BsPalette } from "react-icons/bs";
import { Button } from "../ui/button";

const THEMES = [
  { name: "default", color: "#7070FF" },
  { name: "red", color: "#d85252" },
  { name: "green", color: "#3d9e3d" },
  { name: "blue", color: "#4788dd" },
  { name: "pink", color: "#cc53c8" },
  { name: "yellow", color: "#ffde21" },
];

export default function ThemeSwitcher() {
  const [visibleList, setVisibleList] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleThemeChange = (theme: string) => {
    document.documentElement.classList.forEach((cls) => {
      if (cls.startsWith("theme-")) {
        document.documentElement.classList.remove(cls);
      }
    });
    if (theme !== "default") {
      document.documentElement.classList.add(`theme-${theme}`);
    }
    localStorage.setItem("app-theme", theme);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setVisibleList(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 relative" ref={containerRef}>
      {/* Bouton principal */}
      <Button
        variant="default"
        size="icon"
        onClick={() => setVisibleList((prev) => !prev)}
        className="flex flex-col rounded-xl bg-secondary hover:bg-secondary/90 dark:bg-secondary dark:hover:bg-secondary/75 border border-secondary dark:border-secondary text-default hover:text-default"
      >
        <BsPalette className="h-[1.4rem] w-[1.4rem]" color="white" />
      </Button>

      {/* Liste des couleurs */}
      <div
        className={`flex flex-col gap-1.5 absolute max-md:left-1/2 left-16 max-md:-translate-x-28 mt-2 border border-primary/15 dark:border-white/20 p-3 rounded-xl transition-all duration-150
    ${
      visibleList
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }`}
      >
        {THEMES.map((t, i) => (
          <span
            key={i}
            onClick={() => handleThemeChange(t.name)}
            style={{
              backgroundColor: t.color,
              transition: "all",
            }}
            className="h-8 w-8 rounded-full cursor-pointer shadow-md border border-white/20 transform transition-all duration-0 hover:scale-125"
          />
        ))}
      </div>
    </div>
  );
}
