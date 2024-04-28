import { Button } from "@/components/ui/button";

export const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-32 py-40 gap-10 bg-primary text-default dark:text-default dark:bg-primary">
			<div className="-space-y-7">
				<p className="text-7xl text-secondary font-extrabold">404</p>
				<p className="text-7xl  font-extrabold">404</p>
				<p className="text-7xl text-secondary font-extrabold">404</p>
				<p className="text-7xl  font-extrabold">404</p>
				<p className="text-7xl text-secondary font-extrabold">404</p>
			</div>
			<Button onClick={() => (window.location.href = "/")}>Revenir en lieu sur</Button>
		</div>
	);
};
