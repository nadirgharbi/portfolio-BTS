import { BannerScroller } from "@/components/etc/BannerScroller";
import { useRef, useEffect, useState, ReactPortal, ReactNode } from "react";
import { FaCss3, FaFigma, FaGit, FaGitlab, FaHtml5, FaJava, FaJs, FaPhp, FaPython, FaReact, FaSymfony, FaDocker } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoVisualStudio, BiCode } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiIntellijidea, SiInsomnia, SiPostman, SiRuby, SiAdonisjs, SiTypescript  } from "react-icons/si";
import { BsGear } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Tooltip } from "react-tooltip";

export const Skills = () => {
	const [activeTab, setActiveTab] = useState<"Framework" | "Language" | "Tools" | "All">("All");

	const logoCSS: string = "text-primary/75 dark:text-default/75 w-14 h-14" as const;

	const logoSkills: Array<{ icon: ReactNode; alt: string; typeTech: "Framework" | "Language" | "Tools" }> = [
		{ icon: <FaReact className={logoCSS} />, alt: "ReactJS", typeTech: "Framework" }, // React
		{ icon: <FaJs className={logoCSS} />, alt: "Javascript", typeTech: "Language" }, // Javascript
		{ icon: <SiTypescript className={logoCSS} />, alt: "Typescript", typeTech: "Language" }, // Typescript
		{ icon: <FaHtml5 className={logoCSS} />, alt: "HTML", typeTech: "Language" }, // HTML
		{ icon: <FaGitlab className={logoCSS} />, alt: "Gitlab", typeTech: "Tools" }, // Gitlab
		{ icon: <FaPython className={logoCSS} />, alt: "Python", typeTech: "Language" }, // Python
		{ icon: <SiAdonisjs className={logoCSS} />, alt: "AdonisJS", typeTech: "Framework" }, // Adonis
		{ icon: <FaGit className={logoCSS} />, alt: "Git", typeTech: "Tools" }, // Git
		{ icon: <GrMysql className={logoCSS} />, alt: "MySQL", typeTech: "Language" }, // MySQL
		{ icon: <BiLogoVisualStudio className={logoCSS} />, alt: "VS code", typeTech: "Tools" }, // VS code
		{ icon: <FaCss3 className={logoCSS} />, alt: "CSS3", typeTech: "Language" }, // CSS3
		{ icon: <SiInsomnia className={logoCSS} />, alt: "Insomnia", typeTech: "Tools" }, // Insomnia
		{ icon: <BiLogoTailwindCss className={logoCSS} />, alt: "TailwindCSS", typeTech: "Framework" }, // TailwindCSS
		{ icon: <FaFigma className={logoCSS} />, alt: "Figma", typeTech: "Tools" }, // Figma
		{ icon: <FaSymfony className={logoCSS} />, alt: "Symfony", typeTech: "Framework" }, // Symfony
		{ icon: <FaJava className={logoCSS} />, alt: "Java", typeTech: "Language" }, // Java
		{ icon: <SiIntellijidea className={logoCSS} />, alt: "IntelliJ", typeTech: "Tools" }, // IntelliJ
		{ icon: <SiPostman className={logoCSS} />, alt: "Postman", typeTech: "Tools" }, // Postman
		{ icon: <FaDocker className={logoCSS} />, alt: "Docker", typeTech: "Tools" }, // Docker
		{ icon: <SiRuby className={logoCSS} />, alt: "Ruby", typeTech: "Language" }, // Ruby
	] as const;

	return (
		<>
			<div className="min-h-screen flex flex-col items-center  px-6 lg:px-32 py-40 gap-24 text-primary dark:text-default bg-white dark:bg-primary">
				<Tooltip id="tooltip-skills" />
				<p className="text-3xl md:text-4xl font-extrabold">Compétences</p>
				<div className="flex gap-12 relative z-[99]">
					<button className={`grid items-center gap-2 font-semibold ${activeTab == "All" ? "text-secondary" : "text-primary dark:text-default"}`} onClick={() => setActiveTab("All")}>
						<HiOutlineSquares2X2 size={34} />
						Tous
					</button>
					<button className={`grid justify-items-center gap-2 font-semibold ${activeTab == "Language" ? "text-secondary" : "text-primary dark:text-default"}`} onClick={() => setActiveTab("Language")}>
						<BiCode size={34} />
						Language
					</button>
					<button className={`grid justify-items-center gap-2 font-semibold ${activeTab == "Framework" ? "text-secondary" : "text-primary dark:text-default"}`} onClick={() => setActiveTab("Framework")}>
						<BsGear size={34} />
						Framework
					</button>
					<button className={`grid justify-items-center gap-2 font-semibold ${activeTab == "Tools" ? "text-secondary" : "text-primary dark:text-default"}`} onClick={() => setActiveTab("Tools")}>
						<VscTools size={34} />
						Outils
					</button>
				</div>
				{/* BANNER SCROLLER */}
				<div className="grid grid-cols-10 justify-items-center gap-10 pt-20 relative w-full md:w-2/3 mx-auto animate-fade-up">
					{logoSkills.map((logo) => (
						<div className={`transition-all ${logo.typeTech === activeTab || activeTab == "All" ? "opacity-100" : "opacity-20"}`} data-tooltip-content={logo.alt} data-tooltip-id={logo.typeTech === activeTab || activeTab == "All" ? "tooltip-skills" : ""}>
							{logo.icon}
						</div>
					))}
				</div>
			</div>
		</>
	);
};
