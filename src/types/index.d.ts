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

/** Pour un seul projet */
interface ProjectProps {
	title: string;
	description: string;
	tags: string[];
	imageUrl: string;
	hrefLink: string;
	finished?: boolean;
}

/** Pour plusieurs projets */
interface ProjectsProps {
	projects: Array<ProjectProps>;
}

/** Pour une seule carte informative dans la page contact */
interface ContactInfoProps {
	icon: IconType;
	label?: string;
}

/** Pour plusieurs cartes informatives dans la page contact */
interface ContactInfosProps {
	infos: Array<ContactInfoProps>
}
