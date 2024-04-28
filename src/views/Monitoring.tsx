import { getAll } from "@/api/monitorings";
import { SkeletonItem } from "@/components/etc/SkeletonItem";
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
		<div className={"min-h-screen flex flex-col items-center px-6 md:px-10 lg:px-28 py-40 gap-24 text-primary dark:text-default bg-white dark:bg-primary"}>
			<p className="text-3xl md:text-4xl font-extrabold">Veilles</p>
			<Suspense fallback={<SkeletonItem />}>{veilles && <MonitoringCards veilles={veilles} />}</Suspense>
		</div>
	);
};
