import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

export const Header = () => {
	const location = useLocation();
	return (
		<div className={`flex w-full items-center gap-8 fixed z-[999] top-5 px-8 transition-all `}>
			<NavLink to={"/"}>
				<img src={logoLight} className={`w-16 absolute scale-100 transition-all dark:scale-0 selection:bg-transparent`} />
				<img src={logoDark} className={`w-16 scale-0 transition-all dark:scale-100 selection:bg-transparent`} />
			</NavLink>
		</div>
	);
};
