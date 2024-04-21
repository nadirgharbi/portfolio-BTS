import React from "react";
import { StudyTimelineProps } from "@/types";
import { Timeline } from "flowbite-react";
import { Badge } from "../ui/badge";

export const Study: React.FC<StudyTimelineProps> = ({ title, description, school, location, period, status }) => {
	return (
		<>
			<Timeline className="">
				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content className="flex justify-between transition-all duration-400 hover:bg-primary/5 dark:hover:bg-default/5 py-1 px-3 rounded-lg">
						<div>
							<Timeline.Time>{period}</Timeline.Time>
							<Timeline.Title>{title}</Timeline.Title>
							<Timeline.Title className="font-semibold text-base">
								{school} - {location}
							</Timeline.Title>
							<Timeline.Body>{description}</Timeline.Body>
						</div>
						<div>
							<Timeline.Body>
								<Badge variant={"outline"} className={`${status === "Diplomé" ? "border-green-500 dark:border-green-400" : status === "Niveau" ? "border-amber-500 dark:border-amber-400" : "border-blue-500 dark:border-blue-400"} rounded whitespace-nowrap`}>
									{status}
								</Badge>
							</Timeline.Body>
						</div>
					</Timeline.Content>
				</Timeline.Item>
			</Timeline>
		</>
	);
};
