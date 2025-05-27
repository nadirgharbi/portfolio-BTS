import { useState, useEffect, useRef, ReactElement } from "react";
import { FaFigma, FaGit, FaGitlab, FaJava, FaJs, FaPython, FaReact, FaSymfony, FaDocker, FaPhp, FaVuejs } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoVisualStudio, BiCode } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiIntellijidea, SiInsomnia, SiPostman, SiAdonisjs, SiTypescript, SiNodedotjs, SiLaravel, SiCsharp, SiNextdotjs, SiExpo, SiDjango, SiVite, SiMariadb } from "react-icons/si";
import { BsGear } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type SkillItem = {
	icon: ReactElement;
	alt: string;
	typeTech: string;
	level: number;
};

const TABS = ["Language", "Framework", "Tools", "All"] as const;
type TabType = (typeof TABS)[number];

export const Skills = () => {
	const [activeTab, setActiveTab] = useState<TabType>("Language");
	const [hasUserSelected, setHasUserSelected] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	// Key unique pour forcer le re-render de l'animation
	const [animationKey, setAnimationKey] = useState(0);

	const logoCSS = "text-primary/75 dark:text-default/75 w-14 h-14";
	const logoSkills: ReadonlyArray<SkillItem> = [
		{ icon: <FaReact className={logoCSS} />, alt: "React", typeTech: "Framework", level: 4 },
		{ icon: <FaJs className={logoCSS} />, alt: "Javascript", typeTech: "Language", level: 5 },
		{ icon: <SiTypescript className={logoCSS} />, alt: "Typescript", typeTech: "Language", level: 5 },
		{ icon: <SiNextdotjs className={logoCSS} />, alt: "Next.js", typeTech: "Framework", level: 3 },
		{ icon: <BiLogoTailwindCss className={logoCSS} />, alt: "TailwindCSS", typeTech: "Tools", level: 4 }, // Changé en Tools (comme Figma) ou "Design" si vous créez cette catégorie
		{ icon: <GrMysql className={logoCSS} />, alt: "MySQL", typeTech: "Tools", level: 4 },
		{ icon: <SiNodedotjs className={logoCSS} />, alt: "Node.js", typeTech: "Tools", level: 3 }, // NodeJS est un environnement, "Tools" est ok
		{ icon: <FaVuejs className={logoCSS} />, alt: "Vue.js", typeTech: "Framework", level: 3 },
		{ icon: <SiExpo className={logoCSS} />, alt: "Expo (React Native)", typeTech: "Framework", level: 4 },
		{ icon: <SiVite className={logoCSS} />, alt: "Vite", typeTech: "Tools", level: 4 },
		{ icon: <SiMariadb className={logoCSS} />, alt: "MariaDB", typeTech: "Tools", level: 3 },
		{ icon: <FaPhp className={logoCSS} />, alt: "PHP", typeTech: "Language", level: 4 },
		{ icon: <BiLogoVisualStudio className={logoCSS} />, alt: "VS Code", typeTech: "Tools", level: 5 },
		{ icon: <SiIntellijidea className={logoCSS} />, alt: "IntelliJ IDEA", typeTech: "Tools", level: 3 },
		{ icon: <SiLaravel className={logoCSS} />, alt: "Laravel", typeTech: "Framework", level: 3 },
		{ icon: <FaPython className={logoCSS} />, alt: "Python", typeTech: "Language", level: 4 },
		{ icon: <SiDjango className={logoCSS} />, alt: "Django", typeTech: "Framework", level: 2 },
		{ icon: <FaJava className={logoCSS} />, alt: "Java", typeTech: "Language", level: 3 },
		{ icon: <FaGit className={logoCSS} />, alt: "Git", typeTech: "Tools", level: 4 },
		{ icon: <SiCsharp className={logoCSS} />, alt: "C#", typeTech: "Language", level: 3 },
		{ icon: <SiAdonisjs className={logoCSS} />, alt: "AdonisJS", typeTech: "Framework", level: 3 },
		{ icon: <FaFigma className={logoCSS} />, alt: "Figma", typeTech: "Tools", level: 3 }, // Ou "Design"
		{ icon: <FaGitlab className={logoCSS} />, alt: "GitLab", typeTech: "Tools", level: 4 },
		{ icon: <FaSymfony className={logoCSS} />, alt: "Symfony", typeTech: "Framework", level: 4 },
		{ icon: <FaDocker className={logoCSS} />, alt: "Docker", typeTech: "Tools", level: 2 },
		{ icon: <SiInsomnia className={logoCSS} />, alt: "Insomnia", typeTech: "Tools", level: 4 },
		{ icon: <SiPostman className={logoCSS} />, alt: "Postman", typeTech: "Tools", level: 4 },
	];

	useEffect(() => {
		if (!hasUserSelected) {
			intervalRef.current = setInterval(() => {
				setActiveTab((prev) => {
					const currentIndex = TABS.indexOf(prev);
					const nextTab = TABS[(currentIndex + 1) % TABS.length];
					setAnimationKey((prevKey) => prevKey + 1); // Force re-render for animation
					return nextTab;
				});
			}, 5000);
		} else {
			if (intervalRef.current) clearInterval(intervalRef.current);
		}

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [hasUserSelected]);

	const handleTabClick = (tab: TabType) => {
		setActiveTab(tab);
		setHasUserSelected(true);
		setAnimationKey((prevKey) => prevKey + 1); // Force re-render for animation
		if (intervalRef.current) clearInterval(intervalRef.current);
	};

	const renderStars = (level: number) => {
		return "★".repeat(level) + "☆".repeat(5 - level);
	};

	const getTabsName = (tabs: string) => {
		switch (tabs) {
			case "Language":
				return "Langage";
			case "Framework":
				return "Framework";
			case "Tools":
				return "Outils";
			default:
				return "Tout";
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center px-6 lg:px-32 pt-40 gap-12 text-primary dark:text-default bg-white dark:bg-primary overflow-x-hidden">
			<p className="text-3xl md:text-4xl font-extrabold">Compétences</p>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-12 w-screen md:w-auto md:relative z-[900]">
				{TABS.map((tab) => (
					<button key={tab} className={`grid justify-items-center gap-2 font-semibold ${activeTab === tab ? "text-secondary" : "text-primary dark:text-default"}`} onClick={() => handleTabClick(tab)}>
						<div
							// La clé unique ici est cruciale pour que React re-monte le composant
							// et que l'animation CSS se relance.
							key={`${tab}-${animationKey}`}
							className={`relative ${activeTab === tab && !hasUserSelected ? "icon-progress-container" : ""}`}>
							{tab === "Language" && <BiCode size={32} />}
							{tab === "Framework" && <BsGear size={32} />}
							{tab === "Tools" && <VscTools size={32} />}
							{tab === "All" && <HiOutlineSquares2X2 size={34} />}
						</div>
						{getTabsName(tab)}
					</button>
				))}
			</div>

			{/* SKILLS GRID */}
			<TooltipProvider delayDuration={100}>
				{" "}
				{/* delayDuration est optionnel */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 justify-items-center gap-x-6 gap-y-10 py-12 md:py-16 relative w-full md:w-5/6 lg:w-4/5 mx-auto animate-fade-up z-[99]">
					{logoSkills.map((logo) => {
						const isVisible = activeTab === "All" || logo.typeTech === activeTab;
						return (
							// Chaque icône a son propre Tooltip
							<Tooltip key={logo.alt}>
								<TooltipTrigger asChild>
									{/* Le div qui contient l'icône et gère l'opacité */}
									<div
										className={`flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out
                                            ${isVisible ? "opacity-100 scale-100" : "opacity-30 scale-90 pointer-events-none"}`}
										// pointer-events-none pour les éléments masqués afin d'éviter les tooltips fantômes
									>
										{logo.icon}
										{/* Optionnel: afficher le nom sous l'icône aussi */}
										{/* <span className="mt-1 text-xs text-center">{logo.alt}</span> */}
									</div>
								</TooltipTrigger>
								{/* Le contenu du tooltip s'affiche uniquement si l'élément est visible */}
								{isVisible && (
									<TooltipContent side="top" className="mb-1 p-1 flex flex-col gap-1 items-center">
										{" "}
										{/* side="top" est généralement le défaut */}
										<p className="font-semibold">{logo.icon}</p>
										<p className="font-semibold">{logo.alt}</p>
										<p className={`text-2xl ${renderStars(logo.level).includes("★") ? "text-secondary" : ""}`}>{renderStars(logo.level)}</p>
									</TooltipContent>
								)}
							</Tooltip>
						);
					})}
				</div>
			</TooltipProvider>
		</div>
	);
};
