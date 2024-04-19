import MyPic from "@/assets/me.png";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Typewriter } from "react-simple-typewriter";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Download } from "lucide-react";
import CVNadir from "../../assets/cv-nadir.pdf";

export const Home = () => {
	const words = ["Développeur Front", "UX/UI Designer", "Étudiant en alternance"];
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
						Hey, je suis <span className="font-black text-secondary">Nadir</span>
					</p>
					<p className="font-bold">
						<Typewriter words={words} typeSpeed={40} deleteSpeed={80} cursor loop />
					</p>
					<p className="space-x-1">
						J'adore construire des{" "}
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

				{/* Buttons */}
				<div className="flex items-center gap-2">
					<a download href={CVNadir} className="inline-flex items-center font-semibold gap-2 bg-secondary/90 hover:bg-secondary/90 dark:bg-secondary dark:hover:bg-secondary/90 text-default hover:text-default text-sm rounded-md whitespace-nowrap h-10 px-4 py-1">
						Télécharger mon CV
						<Download size={18} />
					</a>
					<Button variant={"outline"} className="flex gap-2">
						Épreuve E4
					</Button>
					<Button variant={"outline"} className="flex gap-2" size={"icon"}>
						<BsLinkedin />
					</Button>
					<Button variant={"outline"} className="flex gap-2" size={"icon"}>
						<BsGithub />
					</Button>
				</div>
			</div>
		</>
	);
};
