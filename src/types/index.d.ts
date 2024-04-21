/** Pour une seule experiences */
export interface ExperienceTimelineProps {
	title: string;
	location: string;
	description: string;
	date: string;
	latest?: boolean;
	tags?: string[];
}

/** Pour plusieurs experiences */
export interface ExeperiencesProps {
	experiences: Array<ExperienceTimelineProps>;
}

/** Pour une seule etude */
export interface StudyTimelineProps {
	title: string;
	description: string;
	school: string;
	location: string;
	period: string;
	status: "Diplomé" | "Niveau" | "En cours";
}

/** Pour plusieurs etudes */
export interface StudiesProps {
	studies: Array<StudyTimelineProps>;
}
