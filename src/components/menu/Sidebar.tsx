import { useEffect, useState } from "react";
import { BsHouse, BsHouseFill, BsPersonVcard, BsPersonVcardFill, BsPersonGear, BsPersonFillGear, BsFileEarmarkCode, BsFileEarmarkCodeFill, BsBinoculars, BsBinocularsFill, BsEnvelope, BsEnvelopeFill } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../theme/ModeToggle";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export const Sidebar = () => {
	// hooks
	const location = useLocation();
	const [active, setActive] = useState<string>(location.pathname);

	// css
	const activeCss = "bg-secondary hover:bg-secondary/95 text-default";
	const globalCss = "p-2 rounded-full transition-all duration-200 hover:animate-rotating";

	const sidebarItems = [
		{ path: "/", label: "Accueil", icon: <BsHouse size={32} />, iconFill: <BsHouseFill size={32} /> },
		{ path: "/about", label: "À Propos", icon: <BsPersonVcard size={32} />, iconFill: <BsPersonVcardFill size={32} /> },
		{ path: "/skills", label: "Compétences", icon: <BsPersonGear size={32} />, iconFill: <BsPersonFillGear size={32} /> },
		{ path: "/projects", label: "Projets", icon: <BsFileEarmarkCode size={32} />, iconFill: <BsFileEarmarkCodeFill size={32} /> },
		{ path: "/monitoring", label: "Veilles", icon: <BsBinoculars size={32} />, iconFill: <BsBinocularsFill size={32} /> },
		{ path: "/contact", label: "Contact", icon: <BsEnvelope size={32} />, iconFill: <BsEnvelopeFill size={32} /> },
	];

	useEffect(() => {
		setActive(location.pathname);
	}, [location.pathname]);

	return (
		<div className="w-14 absolute h-screen flex items-center">
			<div className="flex flex-col items-center justify-center gap-2 py-3 px-8 fixed z-[999] left-4 rounded-2xl w-14 bg-default dark:bg-primary text-primary dark:text-default border border-primary/20 dark:border-default/20">
				{sidebarItems.map((item) => (
					<NavLink to={item.path} className={`${globalCss} ${active === item.path ? activeCss : ""}`} data-tooltip-id="tooltip" data-tooltip-content={item.label} data-tooltip-place="right">
						{active === item.path ? item.iconFill : item.icon} {/* On vérifie si le chemin courrant correspond au composant concernés */}
					</NavLink>
				))}

				{/* Configuration de la bibliothèque de tooltips */}
				<Tooltip id="tooltip" />

				<Separator />

				{/* Dark/Light Mode */}
				<ModeToggle />
			</div>
		</div>
	);
};
