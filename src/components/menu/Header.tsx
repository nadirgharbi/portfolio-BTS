import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

export const Header = () => {
	const location = useLocation();

	const [isScrolled, setIsScrolled] = useState(false);
	const changeNav = `${isScrolled ? "backdrop-blur-xl bg-default/50 dark:bg-primary/50 fixed shadow dark:shadow-default/10 px-8 lg:px-40 " : "top-5 absolute px-8 "}`;

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const threshold = 500;

			if (scrollPosition > threshold) {
				setIsScrolled(true);
			} else if (scrollPosition == 0) {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`flex w-full items-center gap-8 z-[999] transition-all duration-500 top-0 py-4 ` + changeNav}>
			<NavLink to={"/"}>
				<img src={logoLight} className={`w-16 absolute scale-100 transition-all dark:scale-0 selection:bg-transparent`} />
				<img src={logoDark} className={`w-16 scale-0 transition-all dark:scale-100 selection:bg-transparent`} />
			</NavLink>
		</div>
	);
};
