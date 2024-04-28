import { Timeline } from "flowbite-react";
import { Badge } from "../ui/badge";

export const Experience: React.FC<ExperienceTimelineProps> = ({ title, location, description, date, latest }) => {
	return (
		<>
			<Timeline>
				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content className="transition-all duration-300 hover:bg-primary/5 dark:hover:bg-default/5 py-1 px-3 rounded-lg">
						<div className="flex flex-col md:flex-row gap-3 text-start my-2">
							{latest && (
								<Badge color={"purple"} className="rounded border-none md:absolute self-start right-3 top-3 animate-pulse font-bold">
									En cours
								</Badge>
							)}
							<Timeline.Time>{date}</Timeline.Time>
						</div>
						<Timeline.Title>{title}</Timeline.Title>
						<Timeline.Title className="font-semibold text-base">{location}</Timeline.Title>
						<Timeline.Body>{description}</Timeline.Body>
					</Timeline.Content>
				</Timeline.Item>
			</Timeline>
		</>
	);
};
