import { FaCss3, FaFigma, FaGit, FaGitlab, FaHtml5, FaJava, FaJs, FaPhp, FaPython, FaReact, FaSymfony, FaDocker } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoVisualStudio } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiIntellijidea, SiInsomnia, SiPostman, SiRuby } from "react-icons/si";

export const Skills = () => {
	return (
		<>
			<div className="h-screen flex flex-col px-32 lg:px-64 py-40 gap-20 text-primary dark:text-default bg-white dark:bg-primary static z-[999]">
				<div className="w-full h-40 overflow-hidden">
					<div className="flex">
						<div className="flex animate-swipe">
							<FaPython className="text-primary dark:text-default w-32 h-32" />
							<FaPhp className="text-primary dark:text-default w-32 h-32" />
							<FaReact className="text-primary dark:text-default w-32 h-32" />
							<FaJs className="text-primary dark:text-default w-32 h-32" />
							<BiLogoTypescript className="text-primary dark:text-default w-32 h-32" />
							<FaHtml5 className="text-primary dark:text-default w-32 h-32" />
							<FaGit className="text-primary dark:text-default w-32 h-32" />
							<GrMysql className="text-primary dark:text-default w-32 h-32" />
							<BiLogoVisualStudio className="text-primary dark:text-default w-32 h-32" />
							<FaFigma className="text-primary dark:text-default w-32 h-32" />
							<BiLogoTailwindCss className="text-primary dark:text-default w-32 h-32" />
							<SiIntellijidea className="text-primary dark:text-default w-32 h-32" />
							<FaSymfony className="text-primary dark:text-default w-32 h-32" />
							<FaJava className="text-primary dark:text-default w-32 h-32" />
							<SiPostman className="text-primary dark:text-default w-32 h-32" />
							<FaCss3 className="text-primary dark:text-default w-32 h-32" />
							<FaGitlab className="text-primary dark:text-default w-32 h-32" />
							<FaDocker className="text-primary dark:text-default w-32 h-32" />
							<SiInsomnia className="text-primary dark:text-default w-32 h-32" />
							<SiRuby className="text-primary dark:text-default w-32 h-32" />
						</div>
					</div>
				</div>

				{/* <p className="text-4xl font-extrabold text-center relative z-[999]">Mes compétences</p>
				<div className="relative w-full p-16 overflowx-hidden">
					<div className="flex gap-12  animate-marquee-infinite">
						<FaPython className="text-primary dark:text-default w-32 h-32" />
						<FaPhp className="text-primary dark:text-default w-32 h-32" />
						<FaReact className="text-primary dark:text-default w-32 h-32" />
						<FaJs className="text-primary dark:text-default w-32 h-32" />
						<BiLogoTypescript className="text-primary dark:text-default w-32 h-32" />
						<FaHtml5 className="text-primary dark:text-default w-32 h-32" />
						<FaGit className="text-primary dark:text-default w-32 h-32" />
						<GrMysql className="text-primary dark:text-default w-32 h-32" />
						<BiLogoVisualStudio className="text-primary dark:text-default w-32 h-32" />
						<FaFigma className="text-primary dark:text-default w-32 h-32" />
						<BiLogoTailwindCss className="text-primary dark:text-default w-32 h-32" />
						<SiIntellijidea className="text-primary dark:text-default w-32 h-32" />
						<FaSymfony className="text-primary dark:text-default w-32 h-32" />
						<FaJava className="text-primary dark:text-default w-32 h-32" />
						<SiPostman className="text-primary dark:text-default w-32 h-32" />
						<FaCss3 className="text-primary dark:text-default w-32 h-32" />
						<FaGitlab className="text-primary dark:text-default w-32 h-32" />
						<FaDocker className="text-primary dark:text-default w-32 h-32" />
						<SiInsomnia className="text-primary dark:text-default w-32 h-32" />
						<SiRuby className="text-primary dark:text-default w-32 h-32" />
					</div>
				</div> */}
			</div>
		</>
	);
};
