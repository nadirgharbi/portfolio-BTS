import { useState, ReactNode, useEffect, useRef } from "react";
import { FaCss3, FaFigma, FaGit, FaGitlab, FaHtml5, FaJava, FaJs, FaPython, FaReact, FaSymfony, FaDocker } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoVisualStudio, BiCode } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiIntellijidea, SiInsomnia, SiPostman, SiRuby, SiAdonisjs, SiTypescript, SiNginx, SiNodedotjs, SiLaravel, SiCsharp } from "react-icons/si";
import { BsGear } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Tooltip } from "react-tooltip";

const TABS = ["Language", "Framework", "Tools", "All"] as const;

export const Skills = () => {
	const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Language");
	const [hasUserSelected, setHasUserSelected] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const logoCSS = "text-primary/75 dark:text-default/75 w-14 h-14";
	const logoSkills = [
		{ icon: <FaReact className={logoCSS} />, alt: "ReactJS", typeTech: "Framework" },
		{ icon: <FaJs className={logoCSS} />, alt: "Javascript", typeTech: "Language" },
		{ icon: <SiTypescript className={logoCSS} />, alt: "Typescript", typeTech: "Language" },
		{ icon: <FaHtml5 className={logoCSS} />, alt: "HTML", typeTech: "Language" },
		{ icon: <FaCss3 className={logoCSS} />, alt: "CSS3", typeTech: "Language" },
		{ icon: <FaGit className={logoCSS} />, alt: "Git", typeTech: "Tools" },
		{ icon: <FaPython className={logoCSS} />, alt: "Python", typeTech: "Language" },
		{ icon: <BiLogoTailwindCss className={logoCSS} />, alt: "TailwindCSS", typeTech: "Framework" },
		{ icon: <BiLogoVisualStudio className={logoCSS} />, alt: "VS code", typeTech: "Tools" },
		{ icon: <FaGitlab className={logoCSS} />, alt: "Gitlab", typeTech: "Tools" },
		{ icon: <GrMysql className={logoCSS} />, alt: "MySQL", typeTech: "Language" },
		{ icon: <SiAdonisjs className={logoCSS} />, alt: "AdonisJS", typeTech: "Framework" },
		{ icon: <SiInsomnia className={logoCSS} />, alt: "Insomnia", typeTech: "Tools" },
		{ icon: <FaSymfony className={logoCSS} />, alt: "Symfony", typeTech: "Framework" },
		{ icon: <FaFigma className={logoCSS} />, alt: "Figma", typeTech: "Tools" },
		{ icon: <FaJava className={logoCSS} />, alt: "Java", typeTech: "Language" },
		{ icon: <SiPostman className={logoCSS} />, alt: "Postman", typeTech: "Tools" },
		{ icon: <SiIntellijidea className={logoCSS} />, alt: "IntelliJ", typeTech: "Tools" },
		{ icon: <SiLaravel className={logoCSS} />, alt: "Laravel", typeTech: "Framework" },
		{ icon: <FaDocker className={logoCSS} />, alt: "Docker", typeTech: "Tools" },
		{ icon: <SiRuby className={logoCSS} />, alt: "Ruby", typeTech: "Language" },
		{ icon: <SiNginx className={logoCSS} />, alt: "Nginx", typeTech: "Tools" },
		{ icon: <SiNodedotjs className={logoCSS} />, alt: "NodeJS", typeTech: "Tools" },
		{ icon: <SiCsharp className={logoCSS} />, alt: "C#", typeTech: "Language" },
	] as const;

	// Rotation automatique si aucun clic utilisateur
	useEffect(() => {
		if (!hasUserSelected) {
			intervalRef.current = setInterval(() => {
				setActiveTab((prev) => {
					const currentIndex = TABS.indexOf(prev);
					return TABS[(currentIndex + 1) % TABS.length];
				});
			}, 3000);
		}

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [hasUserSelected]);

	const handleTabClick = (tab: (typeof TABS)[number]) => {
		setActiveTab(tab);
		setHasUserSelected(true);
		if (intervalRef.current) clearInterval(intervalRef.current);
	};

	return (
		<div className="min-h-screen flex flex-col items-center px-6 lg:px-32 pt-40 gap-12 text-primary dark:text-default bg-white dark:bg-primary overflow-x-hidden">
			<Tooltip id="tooltip-skills" />
			<p className="text-3xl md:text-4xl font-extrabold">Compétences</p>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-12 w-screen md:w-auto md:relative z-[900]">
				{TABS.map((tab) => (
					<button key={tab} className={`grid justify-items-center gap-2 font-semibold ${activeTab === tab ? "text-secondary" : "text-primary dark:text-default"}`} onClick={() => handleTabClick(tab)}>
						{tab === "Language" && <BiCode size={32} />}
						{tab === "Framework" && <BsGear size={32} />}
						{tab === "Tools" && <VscTools size={32} />}
						{tab === "All" && <HiOutlineSquares2X2 size={34} />}
						{tab}
					</button>
				))}
			</div>

			{/* SKILLS GRID */}
			<div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 justify-items-center gap-10 pt-20 relative w-full md:w-2/3 mx-auto animate-fade-up z-[99]">
				{logoSkills.map((logo, idx) => (
					<div
						key={idx}
						className={`transition-all ${logo.typeTech === activeTab || activeTab === "All" ? "opacity-100" : "opacity-20"}`}
						data-tooltip-content={logo.alt}
						data-tooltip-id={logo.typeTech === activeTab || activeTab === "All" ? "tooltip-skills" : ""}>
						{logo.icon}
					</div>
				))}
			</div>
		</div>
	);
};
