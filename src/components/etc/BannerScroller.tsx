import { useRef, useEffect, useState, ReactPortal, ReactNode } from "react";
import { FaCss3, FaFigma, FaGit, FaGitlab, FaHtml5, FaJava, FaJs, FaPhp, FaPython, FaReact, FaSymfony, FaDocker } from "react-icons/fa6";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoVisualStudio } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiIntellijidea, SiInsomnia, SiPostman, SiRuby } from "react-icons/si";
import { IconBaseProps } from "react-icons/lib";

export const BannerScroller = () => {
	const dataAnimated: boolean = true;

	const logoCSS: string = "text-primary/75 dark:text-default/75 w-20 h-20" as const;

	const logoSkills: Array<{icon: ReactNode, alt: string}> = [
		{ icon: <FaReact className={logoCSS} />, alt: "React" }, // React
		{ icon: <FaJs className={logoCSS} />, alt: "Javascript" }, // Javascript
		{ icon: <BiLogoTypescript className={logoCSS} />, alt: "Typescript" }, // Typescript
		{ icon: <FaHtml5 className={logoCSS} />, alt: "HTML" }, // HTML
		{ icon: <FaGit className={logoCSS} />, alt: "Git" }, // Git
		{ icon: <GrMysql className={logoCSS} />, alt: "MySQL" }, // MySQL
		{ icon: <BiLogoVisualStudio className={logoCSS} />, alt: "VS code" }, // VS code
		{ icon: <FaFigma className={logoCSS} />, alt: "Figma" }, // Figma
		{ icon: <BiLogoTailwindCss className={logoCSS} />, alt: "TailwindCSS" }, // TailwindCSS
		{ icon: <SiIntellijidea className={logoCSS} />, alt: "IntelliJ" }, // IntelliJ
		{ icon: <FaSymfony className={logoCSS} />, alt: "Symfony" }, // Symfony
		{ icon: <FaJava className={logoCSS} />, alt: "Java" }, // Java
		{ icon: <SiPostman className={logoCSS} />, alt: "Postman" }, // Postman
		{ icon: <FaCss3 className={logoCSS} />, alt: "CSS3" }, // CSS3
		{ icon: <FaGitlab className={logoCSS} />, alt: "Gitlab" }, // Gitlab
		{ icon: <FaDocker className={logoCSS} />, alt: "Docker" }, // Docker
		{ icon: <SiInsomnia className={logoCSS} />, alt: "Insomnia" }, // Insomnia
		{ icon: <SiRuby className={logoCSS} />, alt: "Ruby" }, // Ruby
	] as const;

	// const logoSkills = [
	// 	"React", // React
	// 	"Javascript", // Javascript
	// 	"Typescript", // Typescript
	// 	"HTML", // HTML
	// 	"Git", // Git
	// 	"MySQL", // MySQL
	// 	"VScode", // VScode
	// 	"Figma", // Figma
	// 	"TailwindCSS", // TailwindCSS
	// 	"IntelliJ", // IntelliJ
	// 	"Symfony", // Symfony
	// 	"Java", // Java
	// 	"Postman", // Postman
	// 	"CSS3", // CSS3
	// 	"Gitlab", // Gitlab
	// 	"Docker", // Docker
	// 	"Insomnia", // Insomnia
	// 	"Ruby", // Ruby
	// ] as const;

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
		<>
			<div className="scroller max-w-full self-center overflow-hidden md:[mask:linear-gradient(90deg,_transparent,_white_20%,_white_80%,_transparent)]" data-direction={"left"} data-animated={dataAnimated}>
				<ul className="scroller__inner flex flex-wrap gap-16 w-max animate-scroll">
					{logoSkills.map((logo) => (
						<li className="">{logo.icon}</li>
					))}
				</ul>
			</div>
		</>
	);
};
