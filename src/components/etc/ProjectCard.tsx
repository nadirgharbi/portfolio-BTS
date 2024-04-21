import { ProjectProps } from "@/types";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { NavLink } from "react-router-dom";

export const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, imageUrl, hrefLink, finished }) => {
	return (
		<>
			<NavLink to={hrefLink} target="_blank">
				<Card className="py-6">
					<CardContent>
						<CardTitle>{title}</CardTitle>
						<CardDescription>{description}</CardDescription>
					</CardContent>

					<CardContent className="">
						<img src={imageUrl} alt={imageUrl} className="w-[300px] h-[300px] object-cover rounded" />
					</CardContent>

					<CardContent>
						<div className="flex gap-2 py-2">
							{tags.map((tag, key) => (
								<Badge key={key}>{tag}</Badge>
							))}
						</div>
					</CardContent>
				</Card>
			</NavLink>
		</>
	);
};
