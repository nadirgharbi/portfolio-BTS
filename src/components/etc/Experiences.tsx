import { Timeline } from "flowbite-react";
import { Experience } from "./Exeperience";

export const Experiences: React.FC<ExeperiencesProps> = ({ experiences }) => {
  return (
    <Timeline>
      {" "}
      {experiences.map((experience, key) => (
        <Experience {...experience} key={key} />
      ))}
    </Timeline>
  );
};
