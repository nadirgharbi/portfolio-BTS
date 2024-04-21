import { ProjectsGroup } from "@/components/etc/ProjectsGroup";
import { projectsData } from "@/lib/data";

export const Projects = () => {
	return (
		<div className="flex flex-col items-center justify-center h-full px-24 lg:px-32 py-40 text-primary dark:text-default bg-white dark:bg-primary">
			<p className="text-4xl font-bold">Projects</p>
			<div className="py-20">
				<ProjectsGroup projects={projectsData} />
			</div>
		</div>
	);
};
