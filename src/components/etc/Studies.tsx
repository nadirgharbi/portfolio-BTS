import React from "react";
import { Timeline } from "flowbite-react";
import { Study } from "./Study";

export const Studies: React.FC<StudiesProps> = ({ studies }) => {
  return (
    <>
      <Timeline>
        {studies.map((study, key) => (
          <Study {...study} key={key}/>
        ))}
      </Timeline>
    </>
  );
};
