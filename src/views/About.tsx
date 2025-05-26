import myPic from "@/assets/me.png";
import { BsCake2, BsPatchCheck, BsPersonCheck } from "react-icons/bs";
import { Badge } from "../components/ui/badge";
import { useEffect, useState } from "react";
import { Experiences } from "@/components/etc/Experiences";
import { experiencesData, studiesData } from "@/lib/data";
import { Studies } from "@/components/etc/Studies";
import { BannerScroller } from "@/components/etc/BannerScroller";
import { FaLaptopCode, FaChess, FaTableTennisPaddleBall } from "react-icons/fa6";

export const About = () => {
	const [ageNumber, setAgeNumber] = useState<number>(0);
	const [projectsNumber, setProjectsNumber] = useState<number>(0);
	const [experienceNumber, setExperienceNumber] = useState<number>(0);
	const currAge = 24;

	const studyInfo = { studyName: "Bachelor Concepteur Développeur d'Applications en alternance", schoolName: "CESI", schoolLocation: "Aix-en-Provence" };
	const companyInfo = { name: "AVIS2SANTE", location: "SIX-FOURS-LES-PLAGES" };

	// Compteur automatique pour augmenter l'age
	useEffect(() => {
		// pour l'age
		const interval = setInterval(() => {
			if (ageNumber < currAge) {
				setAgeNumber((prev) => prev + 1);
			} else {
				clearInterval(interval);
			}
		}, 50); // Interval de 50ms seconde

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
		}, 100); // Interval de 100ms seconde

		return () => clearInterval(interval);
	}, [projectsNumber]);

	useEffect(() => {
		// pour les annees d'experiences
		const interval = setInterval(() => {
			if (experienceNumber < 4) {
				setExperienceNumber((prev) => prev + 1);
			} else {
				clearInterval(interval);
			}
		}, 300); // Interval de 300ms seconde

		return () => clearInterval(interval);
	}, [experienceNumber]);

	return (
		<div className={"max-h-full flex flex-col lg: justify-center px-12 lg:px-40 pt-40 text-primary dark:text-default bg-white dark:bg-primary"}>
			{/* PRESENTATION / INTRO */}
			{/* border-b border-b-black/30 dark:border-b-white/15 */}
			<div className="flex flex-col-reverse xl:flex-row items-start justify-center gap-16 relative pb-20 animate-fade-in-scale self-center ">
				{/* Left part */}
				<div className="space-y-16 text-center lg:text-start w-full lg:max-w-6xl">
					<p className="text-3xl lg:text-4xl font-extrabold mb-10">À Propos de moi</p>
					{/* Qui suis je */}
					<div className="space-y-2">
						<p className="text-lg font-extrabold  text-secondary tracking-wide">Mon profil</p>
						<p className="text-lg leading-relaxed">
							Je suis{" "}
							<Badge variant={"outline"} className="rounded-lg text-base font-mono">
								Nadir
							</Badge>{" "}
							, étudiant en <span className="font-light">{studyInfo.studyName}</span> <span className="font-semibold">à l'école {studyInfo.schoolName}</span> à {studyInfo.schoolLocation}. Je suis
							actuellement en alternance au sein de l'entreprise{" "}
							<Badge variant={"outline"} className="rounded-lg text-base">
								<a className="font-mono hover:text-secondary" href="https://avis2sante.fr" target="_blank">
									{companyInfo.name}
								</a>
							</Badge>{" "}
							située à <span className="font-semibold">{companyInfo.location}</span>.
						</p>
					</div>

					{/* Mes centres d'intérêts */}
					<div>
						<p className="text-lg font-extrabold text-secondary tracking-wide">Mes centres d'intérêts</p>
						<div className="flex flex-wrap flex-row max-lg:justify-center gap-12 py-5">
							{/* Sports intellectuels */}
							<div className="flex flex-col w-[22rem] gap-3">
								<FaChess className="text-primary/75 dark:text-white/90 max-lg:mx-auto w-20 h-20" />
								<p className="font-semibold text-black dark:text-white/90">Les jeux et activités intellectuelles</p>
								{/* Proposition de description plus courte et directe : */}
								<p className="lg:text-start font-light">J'aime stimuler ma réflexion avec des jeux de logique et de stratégie comme les échecs, le sudoku ou autres casse-tête.</p>
							</div>

							{/* Le développement de jeux vidéo */}
							<div className="flex flex-col w-[22rem] gap-3">
								<FaLaptopCode className="text-primary/75 dark:text-white/90 max-lg:mx-auto w-20 h-20" />
								<p className="font-semibold text-black dark:text-white/90">Développer des jeux vidéo</p>
								{/* Description conservée comme demandée */}
								<p className="lg:text-start font-light">
									Au-delà du divertissement, les jeux vidéo ont été pour moi une véritable révélation. C'est en me demandant comment donner vie à ces mondes interactifs que mon parcours de développeur
									a commencé.
								</p>
							</div>

							{/* Sports en duel */}
							<div className="flex flex-col w-[22rem] gap-3">
								<FaTableTennisPaddleBall className="text-primary/75 dark:text-white/90 max-lg:mx-auto w-20 h-20" />
								<p className="font-semibold text-black dark:text-white/90">Les sports en duel</p>
								<p className="lg:text-start font-light">Étant de nature compétitive, j'aime particulièrement les sports en duel comme le tennis ou le ping-pong.</p>
							</div>
						</div>
					</div>

					{/* Mon objectif */}
					{/* <div>
						<p className="text-lg font-extrabold text-secondary tracking-wide">Mes objectifs</p>
						<p>Actuellement, je poursuis</p>
					</div> */}
				</div>

				{/* Right part */}
				<div className="mx-auto">
					<img src={myPic} alt="my-picture-profile" className="w-40 lg:w-52 ring-4 ring-secondary rounded-full selection:bg-transparent animate-fade-up" />
				</div>
			</div>

			{/* <Separator className="my-5 w-full lg:w-96" /> */}

			<div className="flex flex-col bg-neutral-100 dark:bg-neutral-900 border border-secondary rounded-xl w-2/3 mx-auto ">
				{/* Icon + numbers */}
				<div className="flex flex-wrap w-full justify-center md:justify-between px-20 py-12 max-lg:items-center gap-16 md:mx-auto ">
					{/* Age */}
					<div className="flex flex-col text-start md:flex-row items-center ">
						<div className="flex flex-col max-lg:items-center max-lg:text-center lg:flex-row gap-3">
							<BsCake2 size={52} className="" />
							<div className="leading-5">
								<p className="text-4xl font-extrabold">{ageNumber}</p>
								<p className="font-light text-nowrap">ans</p>
							</div>
						</div>
					</div>

					{/* Nombre de projets */}
					<div className="flex flex-col text-start md:flex-row items-center ">
						<div className="flex flex-col max-lg:items-center max-lg:text-center lg:flex-row gap-3">
							<BsPatchCheck size={52} className="" />
							<div className="leading-5">
								<p className="text-4xl font-extrabold">+ {projectsNumber}</p>
								<p className="font-light text-nowrap">projets réalisés</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col text-start md:flex-row items-center ">
						<div className="flex flex-col max-lg:items-center max-lg:text-center lg:flex-row gap-3">
							<BsPersonCheck size={52} className="" />
							<div className="leading-5">
								<p className="text-4xl font-extrabold">{experienceNumber}</p>
								<p className="font-light text-nowrap">années d’expérience</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* BANNER SCROLLER */}
			<div className="flex flex-col justify-center items-center gap-10 mt-32 relative w-full lg:w-2/3 mx-auto">
				<BannerScroller />
			</div>

			{/* EXPERIENCES AND STUDIES */}
			<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 pt-32 relative z-[900] animate-fade-up">
				{/* Left part */}
				<div className="flex flex-col gap-12">
					<div className="max-w-3xl">
						<p className="text-2xl lg:text-xl text-center lg:text-start font-bold py-6">Experience</p>
						<Experiences experiences={experiencesData} />
					</div>
				</div>

				{/* Right part */}
				<div className="flex flex-col lg:items-start gap-12 relative z-[900]">
					<div className="max-w-3xl">
						<p className="text-2xl lg:text-xl text-center lg:text-start font-bold py-6">Parcours Scolaire</p>
						<Studies studies={studiesData} />
					</div>
				</div>
			</div>
		</div>
	);
};
