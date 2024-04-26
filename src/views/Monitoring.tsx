import { getAll } from "@/api/monitorings";
import { MonitoringCards } from "@/components/etc/MonitoringCards";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect, Suspense } from "react";
import { lazy } from "react";

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
		<div className={"min-h-screen flex flex-col items-center justify-center px-6 lg:px-32 py-40 gap-24 text-primary dark:text-default bg-white dark:bg-primary"}>
			<p className="text-3xl md:text-4xl font-extrabold">Veilles</p>

			{veilles && (
				<>
					<Suspense fallback={<Skeleton />}>
						<MonitoringCards veilles={veilles} />
					</Suspense>
				</>
			)}
			{/* Barre de recherche */}
			{/* <Input value={inputValue} placeholder="Recherchez une veille" className="relative z-[900] py-6 max-w-md" onChange={(e) => setInputValue(e.target.value)} /> */}
		</div>
	);
};
