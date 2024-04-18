import { ThemeProvider } from "@/components/settings/theme-provider";
import { ModeToggle } from "./components/ModeToggle";

export function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="h-screen flex flex-col gap-5 justify-center items-center bg-white dark:bg-slate-900 dark:text-white">
				<ModeToggle />
				<p className="text-5xl font-bold">Hello</p>
			</div>
		</ThemeProvider>
	);
}

export default App;
