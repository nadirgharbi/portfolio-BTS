import { ThemeProvider } from "@/components/theme/theme-provider";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/menu/Header";
import { Sidebar } from "./components/menu/Sidebar";

export const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			{/* Div gradient left */}
			<div className="w-1/2 h-1/3 absolute -top-32 left-0 bg-gradient-to-r from-secondary/25 via-secondary/75 to-secondary/25 p-10 blur-3xl opacity-40 rounded-full"></div>

			<div className="selection:bg-secondary selection:text-default">
				<Header />
				<Sidebar />
				<Outlet />
			</div>

      {/* Div gradient right */}
			<div className="w-1/2 h-1/3 absolute -top-32 right-0 bg-gradient-to-r from-secondary/25 via-secondary/75 to-secondary/25 p-10 blur-3xl opacity-40 rounded-full"></div>

		</ThemeProvider>
	);
};
