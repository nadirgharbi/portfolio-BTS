import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

export const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, imageUrl, hrefLink, hasSource, strongWords, unavailable, repoSource }) => {
	return (
		<>
			<Card className="flex flex-col justify-between max-w-md pt-12 mb-20 bg-default hover:bg-primary/5 dark:bg-primary dark:hover:bg-default/5 transition-all rounded-lg relative z-[900]">
				<div>
					<CardHeader>
						<img src={imageUrl} alt={imageUrl} className="w-28 absolute -translate-y-32" />
						<div className={"flex overflow py-3 gap-2 overflow-auto"}>
							{tags.map((tag, key) => (
								<Badge variant={"outline"} className="rounded-md text-nowrap border border-primary/30 dark:border-default/30" key={key}>
									{tag}
								</Badge>
							))}
						</div>
					</CardHeader>
					<CardContent className="space-y-2">
						<h5 className="text-2xl font-bold tracking-tight text-primary dark:text-default">{title}</h5>
						<p className="font-normal text-primary/60 dark:text-default/60">{description}</p>
						{strongWords && <p className="font-light text-blue-400 dark:text-blue-300 ">🛈 Note: {strongWords}</p>}
						{unavailable && <p className="font-light text-amber-500 dark:text-amber-200 ">⚠ Ce projet n'est plus en ligne pour le moment. Vous pouvez néanmoins consulter le code source</p>}
					</CardContent>
				</div>
				<CardFooter className="space-x-2 w-full">
					{/* BUTTON */}
					<Button variant={"outline"} disabled={!hasSource} onClick={() => window.open(hrefLink, "_blank")}>
						{hasSource ? "Voir le projet" : "Projet Indisponible"}
					</Button>

					{repoSource && (
						<Button variant={"outline"} onClick={() => window.open(repoSource, "_blank")}>
							Voir le code source
						</Button>
					)}
				</CardFooter>
			</Card>
		</>
	);
};
