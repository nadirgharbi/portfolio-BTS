import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Tooltip } from "react-tooltip";

export const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, imageUrl, hrefLink, hasSource, finished }) => {
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
					</CardContent>
				</div>
				<CardFooter>
					<Tooltip id="tooltip-unvailable" />
					{/* BUTTON */}
					<div data-tooltip-content={!hasSource ? "Vous ne pouvez pas consulter ce projet" : null} data-tooltip-id="tooltip-unvailable" className={!hasSource ? "hover:cursor-not-allowed" : ""}>
						<Button variant={"outline"} disabled={!hasSource} onClick={() => window.open(hrefLink, "_blank")} className="">
							{hasSource ? "Voir le projet" : "Projet Indisponible"}
						</Button>
					</div>
				</CardFooter>
			</Card>
		</>
	);
};
