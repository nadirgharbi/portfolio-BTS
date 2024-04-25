import { ProjectsGroup } from "@/components/etc/ProjectsGroup";
import { projectsData } from "@/lib/data";

export const Projects = () => {
	return (
		<div className={"max-h-full flex flex-col items-center justify-center px-6 lg:px-32 py-40 gap-28 text-primary dark:text-default bg-white dark:bg-primary"}>
			<p className="text-3xl md:text-4xl font-extrabold">Projets</p>
			<ProjectsGroup projects={projectsData} />
		</div>
	);
};
