import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const changeNav = `${
    isScrolled
      ? "backdrop-blur-xl bg-default/50 dark:bg-primary/50 fixed shadow dark:shadow-default/10 px-8 lg:px-40 "
      : "top-5 absolute px-8 "
  }`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 500;

      if (scrollPosition > threshold) {
        setIsScrolled(true);
      } else if (scrollPosition == 0) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        `flex w-full items-center gap-8 z-[999] transition-all duration-500 top-0 py-4 ` +
        changeNav
      }
    >
      <NavLink to={"/"} className={"max-h-16"}>
        <svg xmlns="http://www.w3.org/2000/svg" >
          <circle cx="30" cy="30" r="30" fill="white" />
          <text
            x="10.2%"
            y="30%"
            text-anchor="middle"
            font-size="44"
            font-family="Arial, sans-serif"
            font-weight="800"
            fill="var(--color-secondary)"
          >
            n
          </text>
        </svg>
      </NavLink>
    </div>
  );
};
