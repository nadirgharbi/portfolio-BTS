import crmProject from "@/assets/crm.png";
import tictactoePy from "@/assets/tic-tac-toe-py.png";
import pytris from "@/assets/tetris.png";
import snakegame from "@/assets/snake.png";
import tictactoeReact from "@/assets/tic-tac-toe.png";
// import chess from "@/assets/chess.png";
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
      "Au sein d'AVIS2SANTE, j'ai participé au développement de MonMedecin.org, une plateforme de téléconsultation en utilisant le framework React Native pour Web et mobile. J'ai été amené à réaliser des modules de téléconsultation vidéo, un système de prise de rendez-vous intelligent, ainsi qu'une messagerie sécurisée conforme aux normes RGPD et aux exigences des serveurs HDS (Hébergement de Données de Santé).",
    date: "Décembre 2023 - Octobre 2025",
    latest: false,
  },
  {
    title: "Développeur front end",
    location: "NGSTECH - Marseille",
    description:
      "Pendant ma première année de BTS SIO, j'ai travaillé au sein de l'entreprise NGSTECH, organisme de formation et de services dans le domaine numérique. J'ai effectuer une refonte de la landing page, présentant les différents services proposés par l'entreprise puis j'ai rejoint une équipe de développeurs full-stack pour le développement de l'application CRM NGSTech avec les technologies Laravel et React",
    date: "Décembre 2022 - Décembre 2023",
    latest: false,
  },
  {
    title: "Stagiaire développeur Full Stack",
    location: "ECHOES - La Crau",
    description:
      "Stage d'immersion au sein d'ECHOES, entreprise spécialisée dans la gestion et le stockage de données de parcs automobiles. Cette expérience m'a permis de découvrir les architectures API REST, le fonctionnement des requêtes HTTP, les pratiques DevOps ainsi que les outils de déploiement continu (CI/CD).",
    date: "Novembre 2022",
    latest: false,
  },
];

const projectsData = [
  {
    title: "LegalConnect",
    description:
      "LegalConnect est une solution de téléconsultation juridique. Cette solution facilite les rendez-vous entre les professionnels et leurs clients. Elle offre un système de visioconférence, une prise de rendez-vous et une meilleure gestion.",
    tags: ["React", "Typescript", "Symfony", "API"],
    imageUrl: legalConnectLogo,
    hrefLink: "https://gharbi.slameductoul.ovh/",
    hasSource: true,
    type: "Site / Web App"
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
    type: "Site / Web App"
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
    type: "Site / Web App"
  },
  {
    title: "monmedecin.org",
    description:
      "Monmedecin.org est une plateforme de téléconsultation qui permet de prendre rendez-vous avec un praticien près de chez soi ou en téléconsultation. \
      Pour ma part, je travaille sur ce projet en tant que développeur React et React Native. ",
    strongWords:
      "Pour les identifiants, contactez moi via le formulaire de contact en m'adressant une demande d'identifiants pour un projet.",
    tags: ["ReactNative", "React", "Symfony", "Api Platform", "Mercure"],
    imageUrl: MonmedecinMobile,
    hrefLink: "https://monmedecin.devi4pyo8kwgco9cctbuzgwvs8wtlnxha.avis2sante.net/",
    hasSource: true,
    type: "Site / Web App"
  },
  {
    title: "TicTacToe.jsx",
    description:
      "Un TicTacToe version web ! Une version améliorée du projet tictactoe.py avec une interface épurée et la possibilité de jouer à 2 joueurs en local.",
    tags: ["React", "ViteJS", "TailwindCSS", "AdonisJS"],
    imageUrl: tictactoeReact,
    hrefLink: "https://www.tictactoe.nadir-gharbi.fr/",
    hasSource: true,
    type: "Site / Web App"
  },
  {
    title: "CRM NGSTech",
    description:
      "Mon premier (gros) projet au sein de l'entreprise NGSTech. Grâce à une méthode agile et des outils performants, j'ai pu acquérir d'énormes compétences.",
    tags: ["React", "Laravel", "MySQL", "Scrum"],
    imageUrl: crmProject,
    hrefLink: "",
    hasSource: false,
    type: "Site / Web App"
  },
  {
    title: "Landing Page NGSTech",
    description:
      "Lors de mon alternance au sein de NGSTECH, j'ai pu réaliser une landing page épurée et responsive avec le CMS WordPress.",
    tags: ["WordPress", "HTML", "CSS", "Figma", "UI/UX"],
    imageUrl: LandingPage,
    hrefLink: "https://ngstech-conseil.com/",
    hasSource: true,
    type: "Site / Web App"
  },
  {
    title: "tictactoe.py",
    description:
      "tictactoe.py est une version du célèbre jeu TicTacToe que j'ai réalisé en tant que projet personnel. Ce projet m'a permis d'apprendre les bases de la programmation orientée objet et de maîtriser les principes SOLID.",
    tags: ["Python", "PyGame", "Morpion"],
    imageUrl: tictactoePy,
    repoSource: "https://github.com/nadirgharbi/TicTacToe",
    hrefLink: "/downloads/TicTacToe.exe",
    hasSource: true,
    isDownloadable: true,
    filename: "TicTacToe.exe",
    type: "Jeux"
  },
  {
    title: "PyTris",
    description:
      "Tout comme le projet Morpyon, ce projet reprend le célèbre jeu Tetris. Il a été réalisé avec le langage Python et ses diverses librairies.",
    tags: ["Python", "Pygame", "Tetris", "Arcade", "POO"],
    imageUrl: pytris,
    repoSource: "https://github.com/nadirgharbi/Pytris",
    hrefLink : "/downloads/PyTris.exe",
    hasSource: true,
    isDownloadable: true,
    filename: "PyTris.exe",
    type: "Jeux"
  },
  {
    title: "PySnake",
    description:
      "J'ai réalisé ce projet lors de mon année en licence. C'est donc l'un de mes premiers projets aboutis en Python.",
    tags: ["Python", "Pygame", "Snake", "Arcade"],
    imageUrl: snakegame,
    repoSource: "https://github.com/nadirgharbi/PySnake",
    hrefLink : "/downloads/PySnake.exe",
    hasSource: true,
    isDownloadable: true,
    filename: "PySnake.exe",
    type: "Jeux"
  }
];

const studiesData = [
  {
    title: "Mastère MAALSI",
    description:
      "Mastère professionnel Manager en Architecture et Applications Logicielles des SI en alternance.",
    school: "CESI",
    location: "Aix-en-Provence",
    period: "2025 - 2027",
    status: "En cours",
  },
  {
    title: "Bachelor CDA",
    description: "Bachelor Concepteur Développeur d'Applications ",
    school: "CESI",
    location: "Aix-en-Provence",
    period: "2024 - 2025",
    status: "Diplomé",
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

// Exports
export { experiencesData, projectsData, studiesData };
