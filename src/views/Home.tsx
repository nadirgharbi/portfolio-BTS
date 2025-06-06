import myPic from "@/assets/me.png";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import { BsGithub, BsLinkedin, BsReddit } from "react-icons/bs";
import { Download } from "lucide-react";
import CVNadir from "@/assets/cv-nadir.pdf";
import { Tooltip } from "react-tooltip";

export const Home = () => {
	const words = ["Développeur Front", "Applications Web & Mobile", "UX/UI Designer", "Étudiant en alternance"];
	return (
		<>
			<div className="h-screen flex flex-col justify-center items-center gap-6 px-4 py-12 lg:px-32 text-center text-primary dark:text-default bg-white dark:bg-primary">
				{/* PP Image */}
				<div className="animate-fade-in-scale">
					<img src={myPic} alt="my-picture-profile" className="w-48 ring-4 ring-secondary rounded-full selection:bg-transparent" />
					<p className="absolute translate-x-28 -translate-y-10 text-5xl selection:bg-transparent">👋🏽</p>
				</div>

				{/* Introduction */}
				<div className="flex flex-col items-center text-2xl gap-3">
					<p className="text-3xl md:text-4xl">
						Hey, je suis <span className="font-black text-secondary">Nadir </span>
					</p>
					<p className="text-xl md:text-2xl font-bold">
						<Typewriter words={words} typeSpeed={40} deleteSpeed={70} delaySpeed={950} cursor loop />
					</p>

					{/* Badges */}
					<p className="flex flex-col md:flex-row md:gap-2 text-lg md:text-xl">
						J'adore construire des{" "}
						<div className="space-x-1">
							<Badge variant={"outline"} className="border-indigo-400 dark:border-indigo-400 bg-zinc-200 dark:bg-zinc-800 font-mono">
								/sites
							</Badge>
							<Badge variant={"outline"} className="border-blue-400 dark:border-blue-400 bg-zinc-200 dark:bg-zinc-800 font-mono">
								/apps
							</Badge>
							<Badge variant={"outline"} className="border-emerald-400 dark:border-emerald-400 bg-zinc-200 dark:bg-zinc-800 font-mono">
								/jeux
							</Badge>{" "}
						</div>
						pour être meilleur.
					</p>
				</div>

				{/* Buttons */}
				<div className="flex flex-col lg:flex-row items-center gap-2">
					<a download href={CVNadir} className="inline-flex items-center font-semibold gap-2 bg-secondary/90 hover:bg-secondary/90 dark:bg-secondary dark:hover:bg-secondary/90 text-default hover:text-default text-sm rounded-md whitespace-nowrap h-10 px-4 py-1">
						Télécharger mon CV
						<Download size={18} />
					</a>

					<div className="flex gap-2">
						<Tooltip id="tooltip-social" />
						<Button variant={"outline"} className="flex gap-2" size={"icon"} data-tooltip-id="tooltip-social" data-tooltip-content={"LinkedIn"} data-tooltip-place="bottom" onClick={() => window.open("https://www.linkedin.com/in/nadirgharbi8310/", "_blank")}>
							<BsLinkedin size={16} />
						</Button>
						<Button variant={"outline"} className="flex gap-2" size={"icon"} data-tooltip-id="tooltip-social" data-tooltip-content={"Github"} data-tooltip-place="bottom" onClick={() => window.open("https://github.com/nadirgharbi", "_blank")}>
							<BsGithub size={16} />
						</Button>
						<Button variant={"outline"} className="flex gap-2" size={"icon"} data-tooltip-id="tooltip-social" data-tooltip-content={"Reddit"} data-tooltip-place="bottom" onClick={() => window.open("https://www.reddit.com/user/ShipProfessional6855/", "_blank")}>
							<BsReddit size={16} />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};
