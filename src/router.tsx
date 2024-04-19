import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Skills } from "./components/pages/Skills";
import { Projects } from "./components/pages/Projects";
import { Monitoring } from "./components/pages/Monitoring";
import { Contact } from "./components/pages/Contact";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/skills",
				element: <Skills />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
			{
				path: "/monitoring",
				element: <Monitoring />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);
