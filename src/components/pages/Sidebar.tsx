import { useEffect, useState } from "react";
import { BsHouse, BsPersonVcard, BsTools, BsTerminal, BsEyeglasses, BsEnvelope } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../theme/ModeToggle";

export const Sidebar = () => {
	const [active, setActive] = useState<string>(window.location.pathname);
	const avtiveCss = "bg-secondary-color text-default-color rotate-12";

	console.log(active);

	/** Fonction qui regle l'etat active en lui donnant le nom du chemin courant */
	const handleCurrentPath = () => {
		setActive(window.location.pathname);
		console.log(active);
	};

	return (
		<div className="flex flex-col items-center justify-center gap-2 py-3 absolute left-4 top-1/3 rounded-2xl w-14 bg-primary-color dark:bg-default-color text-default-color dark:text-primary-color">
			<NavLink to={"/"} className={`p-2 rounded-full transition-all ${active == "/" ? avtiveCss : ""}`} onClick={handleCurrentPath}>
				<BsHouse size={28} />
			</NavLink>
			<NavLink to={"/about"} className={`p-2 rounded-full transition-all ${active == "/about" ? avtiveCss : ""}`} onClick={handleCurrentPath}>
				<BsPersonVcard size={28} />
			</NavLink>
			<NavLink to={"/skills"} className={`p-2 rounded-full transition-all ${active == "/skills" ? avtiveCss : ""}`} onClick={handleCurrentPath}>
				<BsTools size={28} />
			</NavLink>
			<NavLink to={"/projects"} className={`p-2 rounded-full transition-all ${active == "/projects" ? avtiveCss : ""}`} onClick={handleCurrentPath}>
				<BsTerminal size={28} />
			</NavLink>
			<NavLink to={"/monitoring"} className={`p-2 rounded-full transition-all ${active == "/monitoring" ? avtiveCss : ""}`} onClick={handleCurrentPath}>
				<BsEyeglasses size={28} />
			</NavLink>
			<NavLink to={"/contact"} className={`p-2 rounded-full transition-all ${active == "/contact" ? avtiveCss : ""}`} onClick={handleCurrentPath}>
				<BsEnvelope size={28} />
			</NavLink>
			<Separator />
			<ModeToggle />
		</div>
	);
};
