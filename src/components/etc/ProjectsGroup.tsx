import { ProjectCard } from "./ProjectCard";
import ProjectComingSoon from "./ProjectComingSoon";

export const ProjectsGroup: React.FC<ProjectsProps> = ({ projects }) => {
	return (
		<div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-5 animate-fade-in-scale`}>
			{projects.map((project, key) => (
				<ProjectCard {...project} key={key} />
			))}
			<ProjectComingSoon />
		</div>
	);
};
