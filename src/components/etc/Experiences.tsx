import { Experience } from "./Exeperience";

export const Experiences: React.FC<ExeperiencesProps> = ({ experiences }) => {
	return (
		<>
			{experiences.map((experience, key) => (
				<Experience {...experience} key={key} />
			))}
		</>
	);
};
