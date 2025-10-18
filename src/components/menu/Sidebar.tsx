import { useEffect, useState } from "react";
import {
	BsHouse,
	BsHouseFill,
	BsPersonVcard,
	BsPersonVcardFill,
	BsPersonGear,
	BsPersonFillGear,
	BsFileEarmarkCode,
	BsFileEarmarkCodeFill,
	BsEnvelope,
	BsEnvelopeFill,
	BsThreeDotsVertical,
	BsXLg,
} from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../theme/ModeToggle";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Download } from "lucide-react";
import CVNadir from "../../assets/CV_NADIR.pdf";
import { Button } from "../ui/button";
import ThemeSwitcher from "../theme/ThemeSwitcher";

export const Sidebar = () => {
	const location = useLocation();
	const [active, setActive] = useState<string>(location.pathname);
	const [openedMenu, setOpenedMenu] = useState<boolean>(false);

	const activeCss = "bg-secondary hover:bg-secondary/95 text-default"; // Style pour l'element actif du menu
	const globalCss = "p-2 rounded-full transition-all duration-200 hover:animate-rotating"; // Style global qui s'applique a tous les elements non actif

	const iconThreeDotsCss = "text-primary dark:text-default transition-all duration-300"; // Style pour l'icone "3 points"
	const iconCrossCss = `text-primary dark:text-default transition-all duration-300 transform  `; // Style pour l'icone "X"

	const sidebarItems = [
		{ path: "/", label: "Accueil", icon: <BsHouse size={32} />, iconFill: <BsHouseFill size={32} /> },
		{ path: "/about", label: "À Propos de moi", icon: <BsPersonVcard size={32} />, iconFill: <BsPersonVcardFill size={32} /> },
		{ path: "/skills", label: "Compétences ", icon: <BsPersonGear size={32} />, iconFill: <BsPersonFillGear size={32} /> },
		{ path: "/projects", label: "Projets", icon: <BsFileEarmarkCode size={32} />, iconFill: <BsFileEarmarkCodeFill size={32} /> },
		// { path: "/monitoring", label: "Veilles", icon: <BsBinoculars size={32} />, iconFill: <BsBinocularsFill size={32} /> },
		{ path: "/contact", label: "Contact", icon: <BsEnvelope size={32} />, iconFill: <BsEnvelopeFill size={32} /> },
	];

	const [isScrolled, setIsScrolled] = useState(false);
	const changeNav = `${isScrolled ? "fixed" : "absolute py-10"}`;

	const handleOpenMenu = () => {
		setOpenedMenu((prev) => !prev);
	};

	useEffect(() => {
		setActive(location.pathname);
		setOpenedMenu(false)
	}, [location.pathname]);

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
		<>
			{/* {{Responsive}} Layer opacity when menu opened in responsive */}
			<div className={`lg:hidden ${openedMenu ? "block" : "hidden"} bg-primary fixed z-[999] w-screen`}></div>

			<div className="w-14 absolute top-5 lg:top-auto right-8 z-[999] h-screen flex lg:items-center">
				{/* {{Responsive}} Bouton qui affiche le menu */}
				<Button variant={"link"} className={`flex no-underline border-0 lg:hidden transition-all ` + changeNav} onClick={handleOpenMenu}>
					{openedMenu ? <BsXLg className={`${iconCrossCss} animate-open-menu`} size={32} /> : <BsThreeDotsVertical className={`${iconThreeDotsCss} animate-fade-in`} size={32} />}{" "}
				</Button>

				{/* Menu */}
				<div
					className={`flex flex-col items-center justify-center gap-2 py-3 px-8 fixed z-[999] top-24 right-6 lg:top-auto lg:left-4 rounded-2xl w-14 bg-default dark:bg-primary text-primary dark:text-default border border-primary/15 dark:border-white/20 ${
						openedMenu ? "block transition-all animate-fade-in-scale" : " hidden lg:flex"
					}`}>
					{sidebarItems.map((item, key) => (
						<NavLink
							to={item.path}
							className={`${globalCss} ${active === item.path ? activeCss : ""}`}
							data-tooltip-id="tooltip"
							data-tooltip-content={item.label}
							data-tooltip-place="right"
							key={key}>
							{active === item.path ? item.iconFill : item.icon} {/* On vérifie si le chemin courrant correspond au composant concernés */}
						</NavLink>
					))}

					{/* Configuration de la bibliothèque de tooltips */}
					<Tooltip id="tooltip" />

					<Separator decorative className="w-12" />

					<Button
						variant="outline"
						size="icon"
						className="rounded-xl bg-secondary hover:bg-secondary/90 dark:bg-secondary dark:hover:bg-secondary/75  text-default hover:text-default">
						<a download href={CVNadir} data-tooltip-id="tooltip" data-tooltip-content={"Télécharger mon CV"} data-tooltip-place="right">
							<Download className="h-[1.4rem] w-[1.4rem]" />
						</a>{" "}
					</Button>

					{/* Dark/Light Mode */}
					<ModeToggle />

					{/* Theme Switcher */}
					<ThemeSwitcher />
				</div>
			</div>
		</>
	);
};
