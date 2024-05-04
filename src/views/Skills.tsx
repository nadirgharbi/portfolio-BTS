import { useState, ReactNode } from "react";
import { FaCss3, FaFigma, FaGit, FaGitlab, FaHtml5, FaJava, FaJs, FaPython, FaReact, FaSymfony, FaDocker } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoVisualStudio, BiCode } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiIntellijidea, SiInsomnia, SiPostman, SiRuby, SiAdonisjs, SiTypescript, SiNginx, SiNodedotjs, SiLaravel } from "react-icons/si";
import { BsGear } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Tooltip } from "react-tooltip";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import BTSE4 from "@/assets/GHARBI-NADIR-BTSSIDOPROFE4-2024.pdf";
import { Separator } from "@/components/ui/separator";

export const Skills = () => {
	// For tabs
	const [activeTab, setActiveTab] = useState<"Framework" | "Language" | "Tools" | "All">("All");

	// For logos
	const logoCSS: string = "text-primary/75 dark:text-default/75 w-14 h-14" as const;
	const logoSkills: Array<{ icon: ReactNode; alt: string; typeTech: "Framework" | "Language" | "Tools" }> = [
		// premiere ligne
		{ icon: <FaReact className={logoCSS} />, alt: "ReactJS", typeTech: "Framework" }, // React
		{ icon: <FaJs className={logoCSS} />, alt: "Javascript", typeTech: "Language" }, // Javascript
		{ icon: <SiTypescript className={logoCSS} />, alt: "Typescript", typeTech: "Language" }, // Typescript
		{ icon: <FaHtml5 className={logoCSS} />, alt: "HTML", typeTech: "Language" }, // HTML
		{ icon: <FaCss3 className={logoCSS} />, alt: "CSS3", typeTech: "Language" }, // CSS3
		{ icon: <FaGit className={logoCSS} />, alt: "Git", typeTech: "Tools" }, // Git
		{ icon: <FaPython className={logoCSS} />, alt: "Python", typeTech: "Language" }, // Python
		{ icon: <BiLogoTailwindCss className={logoCSS} />, alt: "TailwindCSS", typeTech: "Framework" }, // TailwindCSS

		// deuxieme ligne
		{ icon: <BiLogoVisualStudio className={logoCSS} />, alt: "VS code", typeTech: "Tools" }, // VS code
		{ icon: <FaGitlab className={logoCSS} />, alt: "Gitlab", typeTech: "Tools" }, // Gitlab
		{ icon: <GrMysql className={logoCSS} />, alt: "MySQL", typeTech: "Language" }, // MySQL
		{ icon: <SiAdonisjs className={logoCSS} />, alt: "AdonisJS", typeTech: "Framework" }, // Adonis
		{ icon: <SiInsomnia className={logoCSS} />, alt: "Insomnia", typeTech: "Tools" }, // Insomnia
		{ icon: <FaSymfony className={logoCSS} />, alt: "Symfony", typeTech: "Framework" }, // Symfony
		{ icon: <FaFigma className={logoCSS} />, alt: "Figma", typeTech: "Tools" }, // Figma
		{ icon: <FaJava className={logoCSS} />, alt: "Java", typeTech: "Language" }, // Java

		// troisieme ligne
		{ icon: <SiPostman className={logoCSS} />, alt: "Postman", typeTech: "Tools" }, // Postman
		{ icon: <SiIntellijidea className={logoCSS} />, alt: "IntelliJ", typeTech: "Tools" }, // IntelliJ
		{ icon: <SiLaravel className={logoCSS} />, alt: "Laravel ", typeTech: "Framework" }, // Laravel
		{ icon: <FaDocker className={logoCSS} />, alt: "Docker", typeTech: "Tools" }, // Docker
		{ icon: <SiRuby className={logoCSS} />, alt: "Ruby", typeTech: "Language" }, // Ruby
		{ icon: <SiNginx className={logoCSS} />, alt: "Nginx", typeTech: "Tools" }, // Nginx
		{ icon: <SiNodedotjs className={logoCSS} />, alt: "NodeJS ", typeTech: "Tools" }, // NodeJS
	] as const;

	return (
		<>
			<div className="min-h-screen flex flex-col items-center px-6 lg:px-32 pt-40 gap-12 text-primary dark:text-default bg-white dark:bg-primary overflow-x-hidden">
				<Tooltip id="tooltip-skills" />
				<p className="text-3xl md:text-4xl font-extrabold">Compétences</p>
				<div className={`grid grid-cols-2 md:grid-cols-4 gap-12 p-12 w-screen md:w-auto md:relative z-[900] `}>
					<button className={`grid justify-items-center items-center gap-2 font-semibold relative z-[100] ${activeTab == "All" ? "text-secondary" : "text-primary dark:text-default"}`} onClick={() => setActiveTab("All")}>
						<HiOutlineSquares2X2 size={34} />
						Tous
					</button>
					<button className={`grid justify-items-center gap-2 font-semibold  ${activeTab == "Language" ? "text-secondary" : "text-primary dark:text-default"}`} onClick={() => setActiveTab("Language")}>
						<BiCode size={32} />
						Language
					</button>
					<button className={`grid justify-items-center gap-2 font-semibold  ${activeTab == "Framework" ? "text-secondary" : "text-primary dark:text-default"}`} onClick={() => setActiveTab("Framework")}>
						<BsGear size={32} />
						Framework
					</button>
					<button className={`grid justify-items-center gap-2 font-semibold  ${activeTab == "Tools" ? "text-secondary" : "text-primary dark:text-default"}`} onClick={() => setActiveTab("Tools")}>
						<VscTools size={32} />
						Outils
					</button>
				</div>
				{/* ALL SKILLS */}
				<div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-8 justify-items-center gap-10 pt-20 relative w-full md:w-2/3 mx-auto animate-fade-up z-[99]">
					{logoSkills.map((logo) => (
						<div className={`transition-all ${logo.typeTech === activeTab || activeTab == "All" ? "opacity-100" : "opacity-20"}`} data-tooltip-content={logo.alt} data-tooltip-id={logo.typeTech === activeTab || activeTab == "All" ? "tooltip-skills" : ""}>
							{logo.icon}
						</div>
					))}
				</div>


				{/* CTA TABLEAU */}
				<div className="flex flex-col justify-center items-center mt-28 animate-fade-up rounded-2xl ">
        <Separator decorative className="w-screen mb-16"/>
					<div className="flex flex-col justify-center items-center text-center gap-5 md:w-2/3 ">
						<p className="text-3xl font-extrabold tracking-tighter">Epreuve E4</p>
						<p>Telechargez mon tableau de competence pour en savoir plus sur mes réalisations professionnelles ainsi que les compétences qui ont été mises en œuvre</p>
						<a href={BTSE4} download>
							<Button className="flex gap-2 !bg-secondary hover:!bg-secondary/90 !text-default">
								<Download size={18} />
								Télécharger mon Tableau de competence
							</Button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
