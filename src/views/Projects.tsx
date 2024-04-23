import { ProjectsGroup } from "@/components/etc/ProjectsGroup";
import { projectsData } from "@/lib/data";
import { FaCss3, FaFigma, FaGit, FaGitlab, FaHtml5, FaJava, FaJs, FaPhp, FaPython, FaReact, FaSymfony, FaDocker } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoVisualStudio } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiIntellijidea, SiInsomnia, SiPostman, SiRuby } from "react-icons/si";

import { useRef, useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";

export const Projects = () => {
	const logoCSS = "text-primary/75 dark:text-default/75 w-16 h-16";

	const logosFirstRow = [
		<FaReact className={logoCSS} />,
		<FaJs className={logoCSS} />,
		<BiLogoTypescript className={logoCSS} />,
		<FaHtml5 className={logoCSS} />,
		<FaGit className={logoCSS} />,
		<GrMysql className={logoCSS} />,
		<BiLogoVisualStudio className={logoCSS} />,
		<FaFigma className={logoCSS} />,
		<BiLogoTailwindCss className={logoCSS} />,
		<SiIntellijidea className={logoCSS} />,
		<FaSymfony className={logoCSS} />,
		<FaJava className={logoCSS} />,
		<SiPostman className={logoCSS} />,
		<FaCss3 className={logoCSS} />,
		<FaGitlab className={logoCSS} />,
		<FaDocker className={logoCSS} />,
		<SiInsomnia className={logoCSS} />,
		<SiRuby className={logoCSS} />,
	];

	const logosSecondRow = [
		<SiIntellijidea className={logoCSS} />,
		<FaSymfony className={logoCSS} />,
		<FaJava className={logoCSS} />,
		<SiPostman className={logoCSS} />,
		<FaCss3 className={logoCSS} />,
		<FaGitlab className={logoCSS} />,
		<FaDocker className={logoCSS} />,
		<SiInsomnia className={logoCSS} />,
		<SiRuby className={logoCSS} />,
	]

	useEffect(() => {
		// Sélectionne tous les éléments avec la classe CSS '.scroller'
		const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

		// Si les animations ne sont pas désactivées, ajoute l'animation
		scrollers.forEach((scroller: HTMLElement) => {
			// Ajoute l'attribut 'data-animated="true"' à chaque élément '.scroller'
			scroller.setAttribute("data-animated", "true");

			// Sélectionne l'élément enfant '.scroller__inner'
			const scrollerInner = scroller.querySelector<HTMLElement>(".scroller__inner");
			if (scrollerInner) {
				// Récupère les éléments enfants de '.scroller__inner'
				const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];

				// Pour chaque élément enfant, clone-le et ajoute 'aria-hidden="true"'
				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true) as HTMLElement;
					duplicatedItem.setAttribute("aria-hidden", "true");
					scrollerInner.appendChild(duplicatedItem);
				});
			}
		});
	}, []); // Exécute l'effet uniquement lors du montage du composant

	return (
		<div className="flex flex-col items-center justify-center h-full px-24 lg:px-32 py-40 text-primary dark:text-default bg-white dark:bg-primary">
			{/* <p className="text-4xl font-bold">Projects</p> */}

			<div className="w-2/3 -space-y-10">
				<div className="scroller" data-direction={"left"}>
					<ul className="tag-list scroller__inner">
						{logosFirstRow.map((logo) => (
							<li>{logo}</li>
						))}
					</ul>
				</div>
				
			</div>

			<div className="py-20">
				<ProjectsGroup projects={projectsData} />
			</div>
		</div>
	);
};
