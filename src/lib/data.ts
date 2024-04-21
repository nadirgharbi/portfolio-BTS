/**
 * Mentions Legales
 *
 * Icones : https://react-icons.github.io/react-icons/
 * Polices d'ecriture : https://www.fontshare.com/
 * Librairies UI : https://ui.shadcn.com/
 */

import crmProject from "@/assets/crmproject.png";
import tictactoe from "@/assets/tic-tac-toe-img.png";
import pytris from "@/assets/pytris.png";
import snakegame from "@/assets/snakegame.png";
import tictactoeReact from "@/assets/tictactoe-react.png";

export const experiencesData = [
	{
		title: "Développeur React & React Native",
		location: "AVIS2SANTE - Six-Fours-Les-Plages",
		description: "Au sein de cette entreprise, je conçois de nouvelles fonctionnalités et de nouvelles solutions liées à la télémédecine. De plus, je monte rapidement en compétence tant dans le développement web que dans la gestion de projet.",
		date: "Décembre 2023 - Actuellement",
		latest: true,
	},
	{
		title: "Développeur front end",
		location: "NGSTECH - Marseille",
		description: "Étudiant mais aussi apprenti développeur, j'ai participé au bon développement de l'entreprise NGSTECH, organisme de formation et de services dans le domaine numérique.",
		date: "Décembre 2022 - Décembre 2023",
		latest: false,
	},
	{
		title: "Stagiaire développeur Full Stack",
		location: "ECHOES - La Crau",
		description: "Pendant une periode d'une semaine, j'ai effectué un stage dans l'entreprise ECHOES, une entreprise specialise dans le stockage de donnees de parc automobiles.",
		date: "Novembre 2022",
		latest: false,
	},
	{
		title: "Job Etudiant / Saisonnier",
		location: "TOPTISSUS - Toulon",
		description: "En parallèle de mes études, j'ai travaillé dans une boutique de tissus située à Toulon. Je me suis occupé de mettre en rayon les nouveaux produits, ainsi que d'autres tâches au sein du magasin.",
		date: "Juin 2021 - Aout 2022",
		latest: false,
	},
];

export const projectsData = [
	{
		title: "TicTacToe React",
		description: "Ce projet suit la même logique que le Morpyon réalisé en Python, mais d'une manière différente. Ce jeu, développé avec le framework React, est directement accessible depuis le navigateur et offre une expérience plus agréable. ",
		tags: ["React", "Vite Js", "TailwindCSS", "Retro"],
		imageUrl: tictactoeReact,
		hrefLink: "https://tictactoe-react-nine.vercel.app/",
		finished: true,
	},
	{
		title: "CRM NGSTech",
		description: "Mon premier projet au sein de l'entreprise NGSTech. Grâce à une méthode agile et des outils performants, j'ai pu acquérir d'énormes compétences.",
		tags: ["React", "Laravel", "MySQL", "Agile"],
		imageUrl: crmProject,
		hrefLink: "",
		finished: true,
	},
	{
		title: "Morpyon.py",
		description: "Morpyon est une version du célèbre jeu de Morpion que j'ai réalisée en tant que projet personnel.",
		tags: ["Python", "PyGame", "Git", "POO"],
		imageUrl: tictactoe,
		hrefLink: "https://github.com/nadirgharbi/TicTacToe",
		finished: true,
	},
	{
		title: "tetris.py",
		description: "Tout comme le projet Morpyon, ce projet personnel a été réalisé avec le langage Python et ses diverses librairies.",
		tags: ["Python", "PyGame", "Git", "Arcade", "POO"],
		imageUrl: pytris,
		hrefLink: "https://github.com/nadirgharbi/Pytris",
		finished: true,
	},
	{
		title: "PySnake.py",
		description: "J'ai réalisé ce projet lors de mon année en licence. C'est donc l'un de mes premiers projets aboutis en Python.",
		tags: ["Python", "PyGame", "Git", "Arcade", "POO"],
		imageUrl: snakegame,
		hrefLink: "https://github.com/nadirgharbi/PySnake",
		finished: true,
	},
	// {
	// 	title: "Flappy Bird",
	// 	description: "Afin d'améliorer mon niveau en programmation orientée objet (POO), j'ai décidé de développer le jeu Flappy Bird en Python.",
	// 	tags: ["Pygame", "POO", "Mobile", "Challenge"],
	// 	imageUrl: flappyBird,
	// 	hrefLink: "",
	// 	finished: false,
	// 	loading: true,
	// 	// Changer les etats de finished et loading lorsque le projet est terminer
	// },
];

export const studiesData = [
	{
		title: "BTS SIO",
		description: "BTS Services Informatiques aux organisations (option Solutions Logicielles et Applications Metiers) ",
		school: "Maestris",
		location: "Toulon",
		period: "2022 - Actuellement",
		status: "En cours"
	},
	{
		title: "Licence Informatique",
		description: "Niveau L1 Informatique - Parcours Informatique",
		school: "Université de Toulon",
		location: "La Garde",
		period: "2019 - 2022",
		status: "Niveau"
	},
	{
		title: "BAC STI2D",
		description: "BAC Sciences et Technologies de l'Industrie et du Développement Durable",
		school: "Lycée Rouvière",
		location: "Toulon",
		period: "2018 - 2019",
		status: "Diplomé"
	},
	{
		title: "Brevet des collèges",
		description: "Brevet des collèges",
		school: "Collège Django Reinhardt",
		location: "Toulon",
		period: "2018 - 2019",
		status: "Diplomé"
	},
] as const;

export const skillsData: string[] = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Python", "Tailwind", "Figma", "Git", "GitLab", "PHP", "MySQL", "Java", "Django"] as const;
