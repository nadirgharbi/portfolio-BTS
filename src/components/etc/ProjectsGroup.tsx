import { Spinner } from "flowbite-react";
import { ProjectCard } from "./ProjectCard";

export const ProjectsGroup: React.FC<ProjectsProps> = ({ projects }) => {
	return (
		<div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-5 animate-fade-up`}>
			{projects.map((project, key) => (
				<ProjectCard {...project} key={key} />
			))}
		</div>
	);
};
