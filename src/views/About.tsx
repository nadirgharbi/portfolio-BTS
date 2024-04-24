import myPic from "@/assets/me.png";
import { BsCake2, BsFire, BsPatchCheck, BsPersonCheck } from "react-icons/bs";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Experience } from "@/components/etc/Exeperience";
import { useEffect, useState } from "react";
import { Experiences } from "@/components/etc/Experiences";
import { experiencesData, studiesData } from "@/lib/data";
import { Studies } from "@/components/etc/Studies";
import { BannerScroller } from "@/components/etc/BannerScroller";

export const About = () => {
	// const [isLoading, setIsLoading] = useState(true);
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 1000);
	// }, []);

	const [ageNumber, setAgeNumber] = useState<number>(0);
	const [projectsNumber, setProjectsNumber] = useState<number>(0);
	const [experienceNumber, setExperienceNumber] = useState<number>(0);

	// Compteur automatique pour augmenter l'age
	useEffect(() => {
		// pour l'age
		const interval = setInterval(() => {
			if (ageNumber < 23) {
				setAgeNumber((prev) => prev + 1);
			} else {
				clearInterval(interval);
			}
		}, 50); // Interval de 30ms seconde

		return () => clearInterval(interval);
	}, [ageNumber]);

	useEffect(() => {
		// pour le nombre de projets
		const interval = setInterval(() => {
			if (projectsNumber < 10) {
				setProjectsNumber((prev) => prev + 1);
			} else {
				clearInterval(interval);
			}
		}, 100); // Interval de 30ms seconde

		return () => clearInterval(interval);
	}, [projectsNumber]);

	useEffect(() => {
		// pour les annees d'experiences
		const interval = setInterval(() => {
			if (experienceNumber < 2) {
				setExperienceNumber((prev) => prev + 1);
			} else {
				clearInterval(interval);
			}
		}, 300); // Interval de 30ms seconde

		return () => clearInterval(interval);
	}, [experienceNumber]);

	return (
		<div className="h-full px-6 lg:px-32 py-40 text-primary dark:text-default bg-white dark:bg-primary">
			{/* PRESENTATION / INTRO */}
			<div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-20 relative ">
				{/* Left part */}
				<div className="flex flex-col gap-12 max-w-6xl">
					<div className="space-y-6 text-center md:text-start">
						<p className="text-3xl md:text-4xl font-extrabold">À Propos de moi</p>
						<p className="text-lg leading-relaxed">
							Je suis{" "}
							<Badge variant={"outline"} className="rounded-lg text-base font-mono">
								Nadir
							</Badge>{" "}
							, étudiant en <span className="font-light">BTS SIO</span> option Solution Logicielles et Applications Métiers à l’école <span className="font-semibold">Maestris</span> à Toulon. Je suis actuellement au sein de l'entreprise{" "}
							<Badge variant={"outline"} className="rounded-lg text-base">
								<a className="font-mono hover:text-secondary" href="/">
									AVIS2SANTE
								</a>
							</Badge>{" "}
							située à <span className="font-semibold">SIX-FOURS-LES-PLAGES</span>.
						</p>
						<p className="text-lg leading-relaxed">
							<span className="font-light">Passionné</span> par le monde de l'informatique depuis mon plus jeune âge, mon parcours académique m'a permis d'acquérir des <span className="font-semibold">compétences approfondies</span> dans le développement de <span className="font-light">solutions web</span>{" "}
							et <span className="font-semibold">d'applications mobile</span>.
						</p>
					</div>

					<Separator className="-my-5" />

					{/* Icon + numbers */}
					<div className="grid grid-cols-1 justify-items-center md:justify-items-start md:grid-cols-3 gap-12 lg:gap-0">
						<div className="flex flex-col text-center md:text-start md:flex-row items-center gap-5">
							<BsCake2 size={60} className="" />
							<div className="leading-5">
								<p className="text-4xl font-extrabold">{ageNumber}</p>
								<p className="font-light">ans</p>
							</div>
						</div>
						<div className="flex flex-col text-center md:text-start md:flex-row items-center gap-5">
							<BsPatchCheck size={60} className="" />
							<div className="leading-5">
								<p className="text-4xl font-extrabold">+ {projectsNumber}</p>
								<p className="font-light">projets réalisés</p>
							</div>
						</div>
						<div className="flex flex-col text-center md:text-start md:flex-row items-center gap-5">
							<BsPersonCheck size={60} className="" />
							<div className="leading-5">
								<p className="text-4xl font-extrabold">{experienceNumber}</p>
								<p className="font-light">années d’expérience</p>
							</div>
						</div>
					</div>
				</div>

				{/* Right part */}
				<div>
					<img src={myPic} alt="my-picture-profile" className="w-64 outline outline-2 outline-secondary rounded-full selection:bg-transparent" />
				</div>
			</div>

			{/* BANNER SCROLLER */}
			<div className="flex flex-col justify-center items-center gap-10 pt-40 relative w-full md:w-2/3 mx-auto">
				<p className="text-2xl dark:text-default/75"></p>
				<BannerScroller />
			</div>

			{/* EXPERIENCES AND STUDIES */}
			<div className="flex flex-col lg:flex-row justify-center gap-10 py-32 relative animate-fade-up">
				{/* Left part */}
				<div className="flex flex-col gap-12">
					<div className="max-w-3xl">
						<p className="text-2xl lg:text-xl text-center lg:text-start font-bold py-6">Experience</p>
						<Experiences experiences={experiencesData} />
					</div>
				</div>

				{/* Right part */}
				<div className="flex flex-col gap-12">
					<div className="max-w-3xl">
						<p className="text-2xl lg:text-xl text-center lg:text-start font-bold py-6">Parcours Scolaire</p>
						<Studies studies={studiesData} />
					</div>
				</div>
			</div>

			<div className="flex justify-center gap-10 py-32 relative z-[999] animate-fade-up">hello</div>

			{/* <div className="flex justify-center">
				<p className="text-xl font-bold">BTS SIO</p>
			</div> */}
		</div>
	);
};
