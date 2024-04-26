import { ProjectsGroup } from "@/components/etc/ProjectsGroup";
import { projectsData } from "@/lib/data";
import emptyIcon from "@/assets/empty-box.png";
import notFound from "@/assets/find.png";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export const Projects = () => {
	const [inputValue, setInputValue] = useState("");

	// Affiche tous les projets qui correspondent a la recherche
	const projectsResult = projectsData.filter((project) => {
		return project.title.toLowerCase().includes(inputValue.toLowerCase());
	});

	return (
		<div className={"min-h-screen flex flex-col items-center justify-center px-6 lg:px-32 py-40 gap-24 text-primary dark:text-default bg-white dark:bg-primary"}>
			<p className="text-3xl md:text-4xl font-extrabold">Projets réalisés</p>

			{/* Barre de recherche */}
			<Input value={inputValue} placeholder="Entrez le nom d'un projet" className="relative z-[900] py-6 max-w-md" onChange={(e) => setInputValue(e.target.value)} />

			{/* Affichage des projets entrer par l'utilisateur */}
			{projectsResult.length > 0 ? (
				<ProjectsGroup projects={projectsResult} />
			) : (
				<div className="space-y-2">
					<img src={notFound} alt={notFound} className="w-40 mx-auto animate-not-found" />
					<p className="text-lg text-start">Aucun résultat trouvés...</p>
				</div>
			)}
		</div>
	);
};
