import { getAll } from "@/api/monitorings";
// import { MonitoringCards } from "@/components/etc/MonitoringCards";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect, Suspense } from "react";
import { lazy } from "react";

const MonitoringCards = lazy(() => import("@/components/etc/MonitoringCards").then((module) => ({ default: module.MonitoringCards })));

export const Monitoring = () => {
	const [veilles, setVeilles] = useState<any>("");

	useEffect(() => {
		const fetchAll = async () => {
			try {
				const data = await getAll();
				setVeilles(data); // Met à jour la variable d'état avec les données récupérées
			} catch (error) {
				console.error("Erreur lors de la récupération des veilles :", error);
			}
		};
		fetchAll();
	}, []);

	return (
		<div className={"min-h-screen flex flex-col items-center justify-center px-6 md:px-10 lg:px-28 py-40 gap-24 text-primary dark:text-default bg-white dark:bg-primary"}>
			<p className="text-3xl md:text-4xl font-extrabold">Veilles</p>

			<Suspense
				fallback={
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all ">
						{Array.from({ length: 8 }, (_, index) => (
							<div key={index} className="space-y-3">
								<Skeleton className="h-48 w-96 rounded-xl" />
								<div className="space-y-2">
									<Skeleton className="h-4 w-80" />
									<Skeleton className="h-4 w-64" />
								</div>
							</div>
						))}
					</div>
				}>
				{veilles && <MonitoringCards veilles={veilles} />}
			</Suspense>
			{/* Barre de recherche */}
			{/* <Input value={inputValue} placeholder="Recherchez une veille" className="relative z-[900] py-6 max-w-md" onChange={(e) => setInputValue(e.target.value)} /> */}
		</div>
	);
};
