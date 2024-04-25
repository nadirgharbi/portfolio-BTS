import { Card } from "flowbite-react";
import { Badge } from "../ui/badge";
import { NavLink } from "react-router-dom";

export const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, imageUrl, hrefLink, finished }) => {
  return (
    <>
      <Card className="max-w-xs md:max-w-md pt-16 mb-20">
        <img src={imageUrl} alt={imageUrl} className="w-32 absolute -translate-y-40 lg:-translate-y-52 xl:-translate-y-44" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </Card>
    </>
  );
};
