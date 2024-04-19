import { useEffect, useState } from "react";
import { BsHouse, BsHouseFill, BsPersonVcard, BsPersonVcardFill, BsPersonGear, BsPersonFillGear, BsFileEarmarkCode, BsFileEarmarkCodeFill, BsBinoculars, BsBinocularsFill, BsEnvelope, BsEnvelopeFill } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../theme/ModeToggle";

export const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>(location.pathname);
  const activeCss = "bg-secondary-color hover:bg-secondary-color/95 text-default-color rotate-12";
  const globalCss = "p-2 rounded-full transition-transform";

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-14 absolute h-screen flex items-center">
      <div className="flex flex-col items-center justify-center gap-2 py-3 px-8 fixed z-[999] left-4 rounded-2xl w-14 bg-default-color dark:bg-primary-color text-primary-color dark:text-default-color border border-primary-color/20 dark:border-default-color/20">
        <NavLink to={"/"} className={`${globalCss} ${active === "/" ? activeCss : ""}`}>
          {active === "/" ? <BsHouseFill size={32} /> : <BsHouse size={32} />} {/* On vérifie si le chemin courrant correspond au composant concernés */}
        </NavLink>
        <NavLink to={"/about"} className={`${globalCss} ${active === "/about" ? activeCss : ""}`}>
          {active === "/about" ? <BsPersonVcardFill size={32} /> : <BsPersonVcard size={32} />}
        </NavLink>
        <NavLink to={"/skills"} className={`${globalCss} ${active === "/skills" ? activeCss : ""}`}>
          {active === "/skills" ? <BsPersonFillGear size={32} /> : <BsPersonGear size={32} />}
        </NavLink>
        <NavLink to={"/projects"} className={`${globalCss} ${active === "/projects" ? activeCss : ""}`}>
          {active === "/projects" ? <BsFileEarmarkCodeFill size={32} /> : <BsFileEarmarkCode size={32} />}
        </NavLink>
        <NavLink to={"/monitoring"} className={`${globalCss} ${active === "/monitoring" ? activeCss : ""}`}>
          {active === "/monitoring" ? <BsBinocularsFill size={32} /> : <BsBinoculars size={32} />}
        </NavLink>
        <NavLink to={"/contact"} className={`${globalCss} ${active === "/contact" ? activeCss : ""}`}>
          {active === "/contact" ? <BsEnvelopeFill size={32} /> : <BsEnvelope size={32} />}
        </NavLink>
        <Separator />
        <ModeToggle />
      </div>
    </div>
  );
};
