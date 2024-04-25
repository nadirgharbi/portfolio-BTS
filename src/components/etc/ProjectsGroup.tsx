import { ProjectCard } from "./ProjectCard";

export const ProjectsGroup: React.FC<ProjectsProps> = ({ projects }) => {
	return (
		<div className={`grid grid-cols-1 lg:grid-cols-3 gap-6`}>
			{projects.map((project, key) => (
				<ProjectCard {...project} key={key} />
			))}
		</div>
	);
};
