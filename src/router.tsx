import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./views/Home";
// import { About } from "./views/About";
// import { Skills } from "./views/Skills";
// import { Projects } from "./views/Projects";
// import { Monitoring } from "./views/Monitoring";
// import { Contact } from "./views/Contact";
import { NotFound } from "./views/NotFound";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			// {
			// 	path: "/about",
			// 	element: <About />,
			// },
			// {
			// 	path: "/skills",
			// 	element: <Skills />,
			// },
			// {
			// 	path: "/projects",
			// 	element: <Projects />,
			// },
			// {
			// 	path: "/monitoring",
			// 	element: <Monitoring />,
			// },
			// {
			// 	path: "/contact",
			// 	element: <Contact />,
			// },
		],
	},
]);
