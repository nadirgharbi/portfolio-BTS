import myPic from "@/assets/me.png";
import { BsCake2, BsFire, BsPatchCheck, BsPersonCheck } from "react-icons/bs";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Experience } from "@/components/etc/Exeperience";

export const About = () => {
	return (
		<div className="h-full px-24 lg:px-32 py-40 text-primary dark:text-default bg-white dark:bg-primary">
			{/* presentation section */}
			<div className="flex items-center justify-center gap-20 relative z-[999]">
				{/* Left part */}
				<div className="flex flex-col gap-12 max-w-6xl">
					<div className="space-y-6">
						<p className="text-4xl font-extrabold">À Propos de moi</p>
						<p className="text-lg leading-relaxed">
							Je suis{" "}
							<Badge variant={"outline"} className="rounded-lg text-base font-mono">
								Nadir
							</Badge>{" "}
							, étudiant en <span className="font-semibold">BTS SIO</span> option Solution Logicielles et Applications Métiers à l’école <span className="font-semibold">Maestris</span> à Toulon. Je suis actuellement au sein de l'entreprise{" "}
							<Badge variant={"outline"} className="rounded-lg text-base">
								<a className="font-mono hover:text-secondary" href="/">
									AVIS2SANTE
								</a>
							</Badge>{" "}
							située à <span className="font-semibold">SIX-FOURS-LES-PLAGES</span>.
						</p>
						<p className="text-lg leading-relaxed">
							<span className="font-semibold">Passionné</span> par le monde de l'informatique depuis mon plus jeune âge, mon parcours académique m'a permis d'acquérir des <span className="font-semibold">compétences approfondies</span> dans le développement de{" "}
							<span className="font-semibold">solutions web</span> et <span className="font-semibold">d'applications mobile</span>.
						</p>
					</div>

					<Separator className="-my-5" />

					{/* Icon + numbers */}
					<div className="flex gap-40">
						<div className="flex  items-center gap-5 ">
							<BsCake2 size={60} />
							<div className="leading-5">
								<p className="text-4xl font-extrabold">23</p>
								<p className="font-light">ans</p>
							</div>
						</div>
						<div className="flex items-center gap-5 ">
							<BsPatchCheck size={60} />
							<div className="leading-5">
								<p className="text-4xl font-extrabold">+ 10</p>
								<p className="font-light">projets réalisés</p>
							</div>
						</div>
						<div className="flex items-center gap-5 ">
							<BsPersonCheck size={60} />
							<div className="leading-5">
								<p className="text-4xl font-extrabold">2</p>
								<p className="font-light">années d’expérience</p>
							</div>
						</div>
					</div>
				</div>

				{/* Right part */}
				<div>
					<img src={myPic} alt="my-picture-profile" className="w-64 outline outline-2 outline-secondary rounded-full selection:bg-transparent" />
				</div>
			</div>

			{/* experiences et parcours scolaire section */}
			<div className="flex flex-col items-center lg:flex-row lg:items-start justify-center gap-20 py-32 px-96 relative z-[999]">
				{/* Left part */}
				<div className="flex flex-col gap-12">
					<div>
						<p className="text-xl font-bold py-6">Experience</p>
						<Experience />
					</div>
				</div>

				{/* Right part */}
				<div>
					<div>
						<p className="text-xl font-bold py-6">Parcours Scolaire</p>
						<Experience />
					</div>
				</div>
			</div>

			{/* <div className="flex items-center justify-center gap-20 py-32">
				<div>
					<p className="text-2xl font-bold">Parcours Scolaire</p>
				</div>
				<div>
					<p className="text-2xl font-bold">Experience</p>
				</div>
			</div> */}
		</div>
	);
};
