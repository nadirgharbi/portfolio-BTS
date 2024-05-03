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

// Arrays
const experiencesData = [
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
    description: "Pendant une periode d'une semaine, j'ai effectué un stage dans l'entreprise ECHOES, une entreprise specialisée dans le stockage de données de parcs automobiles.",
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

const projectsData = [
  {
    title: "LegalConnect",
    description: "LegalConnect est une solution de téléconsultation juridique. Cette solution facilite les rendez-vous entre les professionnels et leurs clients. Elle offre un système de visioconférence, une prise de rendez-vous et une meilleure gestion.",
    tags: ["React", "Typescript", "Symfony", "API"],
    imageUrl: legalConnectLogo,
    hrefLink: "https://gharbi.slameductoul.ovh/",
    hasSource: true,
  },
  {
    title: "API AdonisJS",
    description: "J'ai développé une API avec le framework AdonisJS afin de pouvoir communiquer avec le serveur et ainsi intéragir avec ma bases de données. Cela me permet d'utiliser mon API pour plusieurs projets différents.",
    tags: ["React", "Typescript", "AdonisJS", "NodeJS", "NGINX"],
    imageUrl: IconAPI,
    hrefLink: "https://apiv1.nadir-gharbi.fr/",
    hasSource: true,
  },
  {
    title: "Todolist",
    description: "Comment ne pas se passer de la Todolist quand on debute dans le developpement web. Cette Todolist possède un système d'authentification avec lequelle il est possible de s'identifier et d'enregistrer des taches. ",
    tags: ["React", "Typescript", "Adonis"],
    imageUrl: todoIcon,
    hrefLink: "https://mytodo.nadir-gharbi.fr/",
    hasSource: true,
  },
  {
    title: "monmedecin.org",
    description: "Monmedecin.org est une plateforme de téléconsultation qui permet de prendre rendez-vous avec un praticien près de chez soi ou en téléconsultation. Pour ma part, je travaille sur ce projet en tant que développeur React et React Native.",
    tags: ["ReactNative", "React", "Symfony", "Scrum", "GitLab"],
    imageUrl: MonmedecinMobile,
    hrefLink: "https://landing.monmedecin.org/",
    hasSource: true,
  },
  {
    title: "TicTacToe.jsx",
    description: "Un TicTacToe version web ! Une version améliorée du projet tictactoe.py avec une interface épurée et avec la possibilité de se jouer à 2 joueurs.",
    tags: ["React", "ViteJS", "TailwindCSS", "AdonisJS"],
    imageUrl: tictactoeReact,
    hrefLink: "https://www.tictactoe.nadir-gharbi.fr/",
    hasSource: true,
  },
  {
    title: "CRM NGSTech",
    description: "Mon premier projet au sein de l'entreprise NGSTech. Grâce à une méthode agile et des outils performants, j'ai pu acquérir d'énormes compétences.",
    tags: ["React", "Laravel", "MySQL", "Scrum"],
    imageUrl: crmProject,
    hrefLink: "",
    hasSource: false,
  },
  {
    title: "tictactoe.py",
    description: "tictactoe.py est une version du célèbre jeu du TicTacToe que j'ai réalisée en tant que projet personnel.",
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
    title: "BTS SIO",
    description: "BTS Services Informatiques aux organisations (option Solutions Logicielles et Applications Metiers) ",
    school: "Maestris",
    location: "Toulon",
    period: "2022 - Actuellement",
    status: "En cours",
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
  {
    title: "Brevet des collèges",
    description: "Brevet des collèges",
    school: "Collège Django Reinhardt",
    location: "Toulon",
    period: "2018 - 2019",
    status: "Diplomé",
  },
];

const skillsData: string[] = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Python", "Tailwind", "Figma", "Git", "GitLab", "PHP", "MySQL", "Java", "Django"];

// Exports
export { experiencesData, projectsData, studiesData, skillsData };
