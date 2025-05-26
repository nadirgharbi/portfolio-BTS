import crmProject from "@/assets/crm.png";
import tictactoePy from "@/assets/tic-tac-toe-py.png";
import pytris from "@/assets/tetris.png";
import snakegame from "@/assets/snake.png";
import tictactoeReact from "@/assets/tic-tac-toe.png";
import chess from "@/assets/chess.png";
import legalConnectLogo from "@/assets/fingerprint.png";
import MonmedecinMobile from "@/assets/mobile-phone.png";
import todoIcon from "@/assets/to-do-list.png";
import IconAPI from "@/assets/api.png";
import LandingPage from "@/assets/landing-page.png";
// import RRLogo from "@/assets/rr_logo.png";

// Arrays
const experiencesData = [
	{
		title: "Développeur React & React Native",
		location: "AVIS2SANTE - Six-Fours-Les-Plages",
		description:
			"Au sein de cette entreprise, je conçois de nouvelles fonctionnalités et de nouvelles solutions liées à la télémédecine. De plus, je monte rapidement en compétence tant dans le développement web que dans la gestion de projet.",
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
		description: "Pendant une periode d'une semaine, j'ai effectué un stage dans l'entreprise ECHOES, une entreprise specialisée dans le stockage de données de parcs automobiles.",
		date: "Novembre 2022",
		latest: false,
	},
	{
		title: "Job Etudiant / Saisonnier",
		location: "TOPTISSUS - Toulon",
		description:
			"En parallèle de mes études, j'ai travaillé dans une boutique de tissus située à Toulon. Je me suis occupé de mettre en rayon les nouveaux produits, ainsi que d'autres tâches au sein du magasin.",
		date: "Juin 2021 - Aout 2022",
		latest: false,
	},
];

const projectsData = [
	// A mettre plus tard
	//
	// {
	// 	title: "(Re)sources relationnelles",
	// 	description:
	// 		"« (Re)sources Relationnelles » est un projet réalisé dans le cadre de mon Bachelor Concepteur Développeur d’Applications. Il s’agissait de développer une plateforme sociale permettant aux utilisateurs de créer, partager et commenter des ressources.",
	// 	tags: ["React", "Typescript", "Symfony", "API Platform"],
	// 	imageUrl: RRLogo,
	// 	hrefLink: "",
	// 	hasSource: false,
	// },
	{
		title: "LegalConnect",
		description:
			"LegalConnect est une solution de téléconsultation juridique. Cette solution facilite les rendez-vous entre les professionnels et leurs clients. Elle offre un système de visioconférence, une prise de rendez-vous et une meilleure gestion.",
		tags: ["React", "Typescript", "Symfony", "API"],
		imageUrl: legalConnectLogo,
		hrefLink: "https://gharbi.slameductoul.ovh/",
		hasSource: true,
	},
	{
		title: "API AdonisJS",
		description:
			"Dans le cadre de mon BTS SIO, j'ai développé une API avec le framework AdonisJS (basé sur Express et Node.js) avec un système d'authentification par OAuth. Cet API était essentiel pour mes différents projets effectués en BTS et facilitait la récupération des données côté client.",
		tags: ["React", "Typescript", "AdonisJS", "NodeJS", "NGINX"],
		imageUrl: IconAPI,
		hrefLink: "https://apiv1.nadir-gharbi.fr/",
		hasSource: false,
		unavailable: true,
		repoSource: "https://github.com/nadirgharbi/portfolio-api",
	},
	{
		title: "Todolist",
		description:
			"Comment se passer de la Todolist quand on debute dans le developpement web ? Cette Todolist possède un système d'authentification avec lequel il est possible de s'identifier et enregistrer des tâches à faire. ",
		tags: ["React", "Typescript", "Adonis"],
		imageUrl: todoIcon,
		hrefLink: "https://mytodo.nadir-gharbi.fr/",
		hasSource: false,
		unavailable: true,
		repoSource: "https://github.com/nadirgharbi/react-todo-vite/tree/main",
	},
	{
		title: "monmedecin.org",
		description:
			"Monmedecin.org est une plateforme de téléconsultation qui permet de prendre rendez-vous avec un praticien près de chez soi ou en téléconsultation. \
      Pour ma part, je travaille sur ce projet en tant que développeur React et React Native. ",
		strongWords: "Pour les identifiants, contactez moi via le formulaire de contact en m'adressant une demande d'identifiants pour un projet.",
		tags: ["ReactNative", "React", "Symfony", "Api Platform", "Mercure"],
		imageUrl: MonmedecinMobile,
		hrefLink: "https://monmedecin.devi4pyo8kwgco9cctbuzgwvs8wtlnxha.avis2sante.net/",
		hasSource: true,
	},
	{
		title: "TicTacToe.jsx",
		description: "Un TicTacToe version web ! Une version améliorée du projet tictactoe.py avec une interface épurée et la possibilité de jouer à 2 joueurs en local.",
		tags: ["React", "ViteJS", "TailwindCSS", "AdonisJS"],
		imageUrl: tictactoeReact,
		hrefLink: "https://www.tictactoe.nadir-gharbi.fr/",
		hasSource: true,
	},
	{
		title: "CRM NGSTech",
		description: "Mon premier (gros) projet au sein de l'entreprise NGSTech. Grâce à une méthode agile et des outils performants, j'ai pu acquérir d'énormes compétences.",
		tags: ["React", "Laravel", "MySQL", "Scrum"],
		imageUrl: crmProject,
		hrefLink: "",
		hasSource: false,
	},
	{
		title: "Landing Page NGSTech",
		description: "Lors de mon alternance au sein de NGSTECH, j'ai pu réaliser une landing page épurée et responsive avec le CMS WordPress.",
		tags: ["WordPress", "HTML", "CSS", "Figma", "UI/UX"],
		imageUrl: LandingPage,
		hrefLink: "https://ngstech-conseil.com/",
		hasSource: true,
	},
	{
		title: "tictactoe.py",
		description:
			"tictactoe.py est une version du célèbre jeu TicTacToe que j'ai réalisé en tant que projet personnel. Ce projet m'a permis d'apprendre les bases de la programmation orientée objet et de maîtriser les principes SOLID.",
		tags: ["Python", "PyGame", "Morpion"],
		imageUrl: tictactoePy,
		hrefLink: "https://github.com/nadirgharbi/TicTacToe",
		hasSource: true,
	},
	{
		title: "tetris.py",
		description: "Tout comme le projet Morpyon, ce projet reprend le célèbre jeu Tetris. Il a été réalisé avec le langage Python et ses diverses librairies.",
		tags: ["Python", "PyGame", "Tetris", "Arcade", "POO"],
		imageUrl: pytris,
		hrefLink: "https://github.com/nadirgharbi/Pytris",
		hasSource: true,
	},
	{
		title: "snake.py",
		description: "J'ai réalisé ce projet lors de mon année en licence. C'est donc l'un de mes premiers projets aboutis en Python.",
		tags: ["Python", "PyGame", "Snake", "Arcade"],
		imageUrl: snakegame,
		hrefLink: "https://github.com/nadirgharbi/PySnake",
		hasSource: true,
	},
	{
		title: "Validate Move Shower",
		description: "Un de mes premiers projets qui consiste uniquement à afficher les coups légaux aux échecs lors de la sélection d'un pion.",
		tags: ["Python", "Tkinter", "Chess"],
		imageUrl: chess,
		hrefLink: "",
		hasSource: false,
	},
];

const studiesData = [
	{
		title: "Mastère MAALSI",
		description: "Admis en Mastère professionnel Manager en Architecture et Applications Logicielles des SI en alternance. \nRythme: 3 semaine en entreprise / 1 semaine en formation",
		school: "CESI",
		location: "Aix-en-Provence",
		period: "2025 - 2027",
		status: "Préparation",
	},
	{
		title: "Bachelor CDA",
		description: "Bachelor Concepteur Développeur d'Applications ",
		school: "CESI",
		location: "Aix-en-Provence",
		period: "2024 - 2025",
		status: "En cours",
	},
	{
		title: "BTS SIO option SLAM",
		description: "BTS Services Informatiques aux organisations (option Solutions Logicielles et Applications Metiers) ",
		school: "Maestris",
		location: "Toulon",
		period: "2022 - 2024",
		status: "Diplomé",
	},
	{
		title: "Licence Informatique",
		description: "Niveau L1 Informatique - Parcours Informatique",
		school: "Université de Toulon",
		location: "La Garde",
		period: "2019 - 2022",
		status: "Niveau",
	},
	{
		title: "BAC STI2D",
		description: "BAC Sciences et Technologies de l'Industrie et du Développement Durable",
		school: "Lycée Rouvière",
		location: "Toulon",
		period: "2018 - 2019",
		status: "Diplomé",
	},
];

const skillsData: string[] = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Python", "Tailwind", "Figma", "Git", "GitLab", "PHP", "MySQL", "Java", "Django"];

// Exports
export { experiencesData, projectsData, studiesData, skillsData };
