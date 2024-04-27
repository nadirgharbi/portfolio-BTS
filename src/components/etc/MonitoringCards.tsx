import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "flowbite-react";
import { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const MonitoringCards: React.FC<MonitoringsProps> = ({ veilles }) => {
	// States for sort by
	const [sortBy, setSortBy] = useState<string>("Trier par");

	// States for pagination
	const [itemsPerPage, setItemsPerPage] = useState<number>(8);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const onPageChange = (page: number) => setCurrentPage(page); // Change current page

	// Displaying in current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const visibleVeilles = veilles.slice(startIndex, endIndex);

	// Sort By conditions
	if (sortBy === "ABC") {
		veilles.sort((veille, nextVeille) => veille.titre.localeCompare(nextVeille.titre));
	} else if (sortBy === "CAT") {
		veilles.sort((veille, nextVeille) => veille.category.localeCompare(nextVeille.category));
	}

	return (
		<>
			<div className="flex gap-3">
				<div>
					<Select onValueChange={(e) => setSortBy(e)}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder={sortBy} />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value={"ABC"}>Ordre alphabetique</SelectItem>
							<SelectItem value={"CAT"}>Categories</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div>
					{/* Select number of items per page */}
					<Select onValueChange={(e) => setItemsPerPage(Number(e))} defaultValue="8">
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder={itemsPerPage} />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value={"4"}>4</SelectItem>
							<SelectItem defaultChecked value={"8"}>
								8
							</SelectItem>
							<SelectItem value={"16"}>16</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			{/* Monitorings Content */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in-scale">
				{visibleVeilles.map((veille, key) => (
					<Card className="flex flex-col justify-between max-w-md mb-3 bg-default hover:bg-primary/5 dark:bg-primary dark:hover:bg-default/5 transition-all rounded-lg relative z-[900]" key={key}>
						<CardHeader className="my-3">
							<img src={veille.imageUrl} alt={veille.imageUrl} className="w-full h-52 object-cover rounded-md" />
						</CardHeader>
						<Badge color={"purple"} className="absolute rounded-lg dark:border-default left-3 -top-3">
							<span className="font-semibold">{veille.category}</span>
						</Badge>
						<CardContent className="space-y-2">
							<p className="text-xl font-bold tracking-tight">{veille.titre}</p>
							<p className="font-normal text-primary/60 dark:text-default/60 line-clamp-2">{veille.description}</p>
							<p className=" text-primary/40 dark:text-default/40 italic">Source : {veille.source}</p>
						</CardContent>
						<CardFooter>
							{/* BUTTON */}
							<Button variant={"outline"} onClick={() => window.open(veille.lien, "_blank")} className="">
								Lire l'article
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>

			{/* Pagination */}
			<Pagination className="relative bottom-0 -my-12" currentPage={currentPage} totalPages={Math.ceil(veilles.length / itemsPerPage)} onPageChange={onPageChange} showIcons />
		</>
	);
};
