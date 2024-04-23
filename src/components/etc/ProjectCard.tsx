import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { NavLink } from "react-router-dom";

export const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, imageUrl, hrefLink, finished }) => {
	return (
		<>
			<NavLink to={hrefLink} target="_blank">
				<Card className="">
					<CardHeader className="p-0">
						<img src={imageUrl} alt={imageUrl} className="w-full h-[300px] object-cover rounded" />
					</CardHeader>
					<CardContent className="flex flex-col gap-3 py-6">
						<CardTitle>{title}</CardTitle>
						<CardDescription className="min-h-[100px]">{description}</CardDescription>
					</CardContent>
					<CardFooter>
						<div className="flex gap-2 py-2">
							{tags.map((tag: string, key: number) => (
								<Badge variant={"outline"} className="rounded-lg text-sm py-2 border-primary dark:border-default border-opacity-20 dark:border-opacity-20" key={key}>{tag}</Badge>
							))}
						</div>
					</CardFooter>
				</Card>
			</NavLink>
		</>
	);
};
