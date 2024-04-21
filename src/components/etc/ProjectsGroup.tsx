import { ProjectsProps } from "@/types";
import { ProjectCard } from "./ProjectCard";

export const ProjectsGroup: React.FC<ProjectsProps> = ({ projects }) => {
	return (
		<div className="grid grid-cols-4 gap-6">
			{projects.map((project, key) => (
				<ProjectCard {...project} key={key} />
			))}
		</div>
	);
};
