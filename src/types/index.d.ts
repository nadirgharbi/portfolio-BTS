import { FunctionComponentElement, ReactPortal } from "react";
import { IconBaseProps, IconType } from "react-icons/lib";

// Props
export interface TimelineProps {
	title: string;
	location: string;
	description: string;
	icon: FunctionComponentElement<IconBaseProps>;
	date: string;
	latest?: boolean;
	tags?: string[];
}

export interface ExeperienceProps {
	experiences: Array<TimelineProps>;
}
