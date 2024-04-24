import React from "react";
import { Study } from "./Study";

export const Studies: React.FC<StudiesProps> = ({ studies }) => {
	return (
		<>
			{studies.map((study, key) => (
				<Study {...study} key={key} />
			))}
		</>
	);
};
