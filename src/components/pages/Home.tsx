import MyPic from "@/assets/me.png";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
	const words = ["développeur", "designer", "étudiant"];
	return (
		<>
			<div className="h-screen flex flex-col justify-center items-center gap-5 p-32 text-primary dark:text-default bg-white dark:bg-primary">
				{/* PP Image */}
				<div>
					<img src={MyPic} alt="my-picture-profile" className="w-48 outline outline-4 outline-secondary rounded-full" />
					<p className="absolute translate-x-28 -translate-y-10 text-5xl selection:bg-transparent">👋🏽</p>
				</div>

				{/* Introduction */}
				<div className="flex flex-col items-center text-2xl leading-10">
					<p className="text-4xl">
						Hey, je suis <span className=" font-black text-secondary">Nadir</span>
					</p>
					<p>
						Je suis{" "}
						<span className="font-bold">
							<Typewriter words={words} typeSpeed={50} deleteSpeed={100} cursor loop />
						</span>
					</p>
					<p className="space-x-1">
						J'adore construire des {""}
						<Badge variant={"outline"} className="border-indigo-400 dark:border-indigo-400 bg-zinc-200 dark:bg-zinc-800 font-mono">
							/sites
						</Badge>
						<Badge variant={"outline"} className="border-blue-400 dark:border-blue-400 bg-zinc-200 dark:bg-zinc-800 font-mono">
							/apps
						</Badge>
						<Badge variant={"outline"} className="border-emerald-400 dark:border-emerald-400 bg-zinc-200 dark:bg-zinc-800 font-mono">
							/jeux
						</Badge>{" "}
						pour être meilleur.
					</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant={"outline"} className="bg-secondary/90 hover:bg-secondary/90 dark:bg-secondary dark:hover:bg-secondary/90 text-default hover:text-default border-secondary">
						À Propos De Moi
					</Button>
					<Button variant={"outline"}>Mon CV</Button>
				</div>
			</div>
		</>
	);
};
