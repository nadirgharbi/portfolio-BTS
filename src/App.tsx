import { ThemeProvider } from "@/components/theme/theme-provider";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/menu/Header";
import { Sidebar } from "./components/menu/Sidebar";

export const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			{/* Div gradient left */}
			<div className="w-1/2 h-1/3 absolute z-0 -top-32 left-0 bg-gradient-to-r from-secondary/80 via-secondary/30 to-violet-400/75  dark:from-secondary/75 dark:via-secondary/25 dark:to-violet-400/70 p-10 blur-3xl opacity-50 dark:opacity-40 rounded-full"></div>

			<div className="selection:bg-secondary selection:text-default">
				<Header />
				<Sidebar />
				<Outlet />
			</div>

			{/* Div gradient right */}
			<div className="w-1/2 h-1/3 absolute z-0 -top-32 right-0 bg-gradient-to-r from-secondary/80 via-secondary/35 to-violet-400/75 dark:from-violet-400/70 dark:via-secondary/25 dark:to-secondary/75 p-10 blur-3xl opacity-50 dark:opacity-40 rounded-full"></div>
		</ThemeProvider>
	);
};
