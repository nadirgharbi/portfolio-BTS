import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

export const MonitoringCards: React.FC<MonitoringsProps> = ({ veilles }) => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in-scale">
				{veilles.map((veille, key) => (
					<Card className="flex flex-col justify-between max-w-md bg-default hover:bg-primary/5 dark:bg-primary dark:hover:bg-default/5 transition-all rounded-lg relative z-[900]" key={key}>
						<CardHeader className="my-3">
							<img src={veille.imageUrl} alt={veille.imageUrl} className="w-full h-52 object-cover rounded-md" />
						</CardHeader>
						<CardContent className="space-y-2">
							<p className="text-xl font-bold tracking-tight text-primary dark:text-default">{veille.titre}</p>
							<p className="font-normal text-primary/60 dark:text-default/60">{veille.description}</p>
						</CardContent>
						<CardFooter>
							{/* BUTTON */}
							<Button variant={"outline"} onClick={() => window.open(veille.lien, "_blank")} className="">
								Voir la veilles
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</>
	);
};
