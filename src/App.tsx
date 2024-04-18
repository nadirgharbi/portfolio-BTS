import { ThemeProvider } from "@/components/theme/theme-provider";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/pages/Header";
import { Sidebar } from "./components/pages/Sidebar";

export const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Header />
			<Sidebar />
			<Outlet />
		</ThemeProvider>
	);
};
