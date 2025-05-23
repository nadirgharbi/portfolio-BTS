import React from "react";
import { Timeline } from "flowbite-react";
import { Badge } from "../ui/badge";
import { getBadgeBorderColor } from "@/lib/badgeUtils";

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
								<Badge variant={"outline"} className={`${getBadgeBorderColor(status)} rounded whitespace-nowrap`}>
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
