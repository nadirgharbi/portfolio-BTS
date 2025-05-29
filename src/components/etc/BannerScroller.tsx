import { useEffect, ReactNode } from "react";
import { FaFigma, FaGit, FaGitlab, FaJava, FaJs, FaPython, FaReact, FaSymfony, FaDocker, FaPhp, FaVuejs } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoVisualStudio } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiIntellijidea, SiInsomnia, SiPostman, SiAdonisjs, SiTypescript, SiNodedotjs, SiLaravel, SiCsharp, SiNextdotjs, SiExpo, SiDjango, SiVite, SiMariadb, SiAngular } from "react-icons/si";
import { NavLink } from "react-router-dom";

export const BannerScroller = () => {
	const logoCSS: string = "text-primary/75 dark:text-default/75 w-20 h-20" as const;

	const logoSkills: Array<{ icon: ReactNode; alt: string }> = [
		{ icon: <FaReact className={logoCSS} />, alt: "React" },
		{ icon: <FaJs className={logoCSS} />, alt: "Javascript" },
		{ icon: <SiTypescript className={logoCSS} />, alt: "Typescript" },
		{ icon: <SiNextdotjs className={logoCSS} />, alt: "Next.js" },
		{ icon: <BiLogoTailwindCss className={logoCSS} />, alt: "TailwindCSS" }, // Changé en Tools (comme Figma) ou "Design" si vous créez cette catégorie
		{ icon: <GrMysql className={logoCSS} />, alt: "MySQL" },
		{ icon: <SiNodedotjs className={logoCSS} />, alt: "Node.js" }, // NodeJS est un environnement, "Tools" est ok
		{ icon: <FaVuejs className={logoCSS} />, alt: "Vue.js" },
		{ icon: <SiExpo className={logoCSS} />, alt: "Expo (React Native)" },
		{ icon: <SiVite className={logoCSS} />, alt: "Vite" },
		{ icon: <SiMariadb className={logoCSS} />, alt: "MariaDB" },
		{ icon: <FaPhp className={logoCSS} />, alt: "PHP" },
		{ icon: <BiLogoVisualStudio className={logoCSS} />, alt: "VS Code" },
		{ icon: <SiIntellijidea className={logoCSS} />, alt: "IntelliJ IDEA" },
		{ icon: <SiLaravel className={logoCSS} />, alt: "Laravel" },
		{ icon: <FaPython className={logoCSS} />, alt: "Python" },
		{ icon: <SiDjango className={logoCSS} />, alt: "Django" },
		{ icon: <FaJava className={logoCSS} />, alt: "Java" },
		{ icon: <FaGit className={logoCSS} />, alt: "Git" },
		{ icon: <SiAngular className={logoCSS} />, alt: "Angular" },
		{ icon: <SiCsharp className={logoCSS} />, alt: "C#" },
		{ icon: <SiAdonisjs className={logoCSS} />, alt: "AdonisJS" },
		{ icon: <FaFigma className={logoCSS} />, alt: "Figma" },
		{ icon: <FaGitlab className={logoCSS} />, alt: "GitLab" },
		{ icon: <FaSymfony className={logoCSS} />, alt: "Symfony" },
		{ icon: <FaDocker className={logoCSS} />, alt: "Docker" },
		{ icon: <SiInsomnia className={logoCSS} />, alt: "Insomnia" },
		{ icon: <SiPostman className={logoCSS} />, alt: "Postman" },
	] as const;

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
			<div className={`scroller max-w-full self-center overflow-hidden md:[mask:linear-gradient(90deg,_transparent,_white_20%,_white_80%,_transparent)] animate-fade-in`}>
				<NavLink to={"/skills"}>
					<ul className="scroller__inner flex flex-wrap gap-16 w-max animate-scroll transition-all hover:opacity-75">
						{logoSkills.map((logo) => (
							<li className="">{logo.icon}</li>
						))}
					</ul>
				</NavLink>
			</div>
		</>
	);
};
