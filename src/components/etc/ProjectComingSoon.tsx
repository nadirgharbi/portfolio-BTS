import { Card } from "flowbite-react";
import { CardHeader, CardContent } from "../ui/card";
import { Loader } from "lucide-react";

const ProjectComingSoon = () => {
	return (
		<>
			<Card className="shadow-none !border-primary/15 dark:!border-default/15 border-dashed border-2 flex flex-col items-center max-w-md pt-12 mb-20 bg-default hover:bg-primary/5 dark:bg-primary dark:hover:bg-default/5 transition-all rounded-lg relative z-[900]">
				<div>
					<CardHeader>
						<h1 className="text-xl font-semibold text-center">D'autres projets sont en cours...</h1>
					</CardHeader>
					<CardContent className="flex justify-center">
						<Loader className="text-center animate-spin w-8 h-auto text-secondary"/>
					</CardContent>
				</div>
			</Card>
		</>
	);
};

export default ProjectComingSoon;
