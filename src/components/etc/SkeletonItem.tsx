import { Skeleton } from "../ui/skeleton";

export const SkeletonItem = () => {
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all ">
			{Array.from({ length: 8 }, (_, index) => (
				<div key={index} className="space-y-3">
					<Skeleton className="h-64 w-[27rem] rounded-xl" />
					<div className="space-y-2">
						<Skeleton className="h-5 w-96" />
						<Skeleton className="h-5 w-80" />
					</div>
				</div>
			))}
		</div>
	);
};
