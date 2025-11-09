/* =================================== */
/* ============= EXPERIENCES ========= */
/* =================================== */

/** Pour une seule experiences */
interface ExperienceTimelineProps {
	title: string;
	location: string;
	description: string;
	date: string;
	latest?: boolean;
	tags?: string[];
}

/** Pour plusieurs experiences */
interface ExeperiencesProps {
	experiences: Array<ExperienceTimelineProps>;
}

/* ================================ */
/* ============= STUDIES ========== */
/* ================================ */

/** Pour une seule etude */
interface StudyTimelineProps {
	title: string;
	description: string;
	school: string;
	location: string;
	period: string;
	status: "Diplomé" | "Niveau" | "En cours";
}

/** Pour plusieurs etudes */
interface StudiesProps {
	studies: Array<studiesData>;
}

/* ================================ */
/* ============= PROJECTS ========= */
/* ================================ */

/** Pour un seul projet */
interface ProjectProps {
	title: string;
	description: string;
	strongWords?: string;
	tags: string[];
	imageUrl: string;
	hrefLink: string;
	hasSource: boolean;
	unavailable?: boolean
	repoSource?: string
	isDownloadable?: boolean
	filename?: string
}

/** Pour plusieurs projets */
interface ProjectsProps {
	projects: Array<ProjectProps>;
}

/* ================================ */
/* ========== MONITORING ========== */
/* ================================ */

// Same datas for
interface MonitoringProps {
	id: number;
	titre: string;
	description: string;
	datePublication: any;
	source: string;
	lien: string;
	imageUrl: string;
	category: string;
}

interface MonitoringsProps {
	veilles: Array<MonitoringProps>;
}

/* ============================= */
/* ========== CONTACT ========== */
/* ============================= */

/** Pour une seule coordonnee dans la page contact */
interface ContactInfoProps {
	icon: IconType;
	label?: string;
}

/** Pour plusieurs coordonnees dans la page contact */
interface ContactInfosProps {
	infos: Array<ContactInfoProps>;
}

type ContactInfosType = {
	name: string;
	email: string;
	subject: string;
	message: string;
};
