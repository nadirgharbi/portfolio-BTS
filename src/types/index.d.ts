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
	studies: studiesData;
}

/** Pour un seul projet */
 interface ProjectProps {
	title: string;
	description: string;
	tags: string[];
	imageUrl: string;
	hrefLink: string;
	finished: boolean;
}

/** Pour plusieurs projets */
 interface ProjectsProps {
	projects: Array<ProjectProps>;
}
