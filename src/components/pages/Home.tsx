import MyPic from "@/assets/me.png";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 text-primary-color dark:text-default-color bg-white dark:bg-primary-color">
      <img src={MyPic} alt="my-picture-profile" className="w-40 outline outline-4 outline-secondary-color rounded-full" />
      <div className="flex flex-col items-center text-2xl font-bold">
        <p>
          Hey, <span className="text-secondary-color font-mono tracking-tight">Je suis Nadir</span>
        </p>
        <p className="font-thin">Je suis développeur Front-End en alternance</p>
        <p className="font-thin space-x-1">
          J'adore construire des {" "}
          <Badge className="border-rose-500 bg-default-color hover:bg-default-color dark:bg-default-color/15 dark:hover:bg-default-color/15 font-mono">/sites</Badge>{" "}
          <Badge className="border-emerald-400 bg-default-color hover:bg-default-color dark:bg-default-color/15 dark:hover:bg-default-color/15 font-mono">/apps</Badge>{" "}
          <Badge className="border-fuchsia-400 bg-default-color hover:bg-default-color dark:bg-default-color/15 dark:hover:bg-default-color/15 font-mono">/jeux</Badge>{" "}
          pour être meilleur.
        </p>
      </div>
		<Button className="border bg-default-color text-primary-color rounded-md">À Propos De Moi</Button>
		<Button className="border bg-default-color/5 rounded-md">Mon CV</Button>
    </div>
  );
};
