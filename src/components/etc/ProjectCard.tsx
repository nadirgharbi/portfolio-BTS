import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

export const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, imageUrl, hrefLink, finished }) => {
	return (
		<>
			<Card className="flex flex-col justify-between max-w-md pt-12 mb-20 dark:bg-primary rounded-lg relative z-[900]">
				<div>
					<CardHeader>
						<img src={imageUrl} alt={imageUrl} className="w-28 absolute -translate-y-32" />
						<div className={"flex overflow-scroll py-3 gap-2"}>
							{tags.map((tag, key) => (
								<Badge variant={"outline"}  className="rounded-md text-nowrap border border-primary/30 dark:border-default/30" key={key}>
									{tag}
								</Badge>
							))}
						</div>
					</CardHeader>
					<CardContent>
						<h5 className="text-2xl font-bold tracking-tight text-primary dark:text-default">{title}</h5>
						<p className="font-normal text-primary/60 dark:text-default/60">{description}</p>
					</CardContent>
				</div>
				<CardFooter>
					<Button variant={"outline"}>Voir le repertoire</Button>
				</CardFooter>
			</Card>
		</>
	);
};
