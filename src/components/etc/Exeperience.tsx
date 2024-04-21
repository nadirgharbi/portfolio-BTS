import { ExperienceTimelineProps } from "@/types";
import { Timeline } from "flowbite-react";

export const Experience: React.FC<ExperienceTimelineProps> = ({ title, location, description, date }) => {
	return (
		<>
			<Timeline>
				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content className="transition-all duration-300 hover:bg-primary/5 dark:hover:bg-default/5 py-1 px-3 rounded-lg">
						<Timeline.Time>{date}</Timeline.Time>
						<Timeline.Title>{title}</Timeline.Title>
						<Timeline.Title className="font-semibold text-base">{location}</Timeline.Title>
						<Timeline.Body>{description}</Timeline.Body>
					</Timeline.Content>
				</Timeline.Item>
			</Timeline>
		</>
	);
};
