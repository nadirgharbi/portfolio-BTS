import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import MetN from "@/assets/metn.jpg";

export const Home = () => {
	const [phase, setPhase] = useState<"loading" | "question">("loading");
	const [exploding, setExploding] = useState(false);

	// Messages façon console
	const messages = ["Tentative de réconciliation en cours ⏳...", "Chargement des souvenirs communs 🫶🏼...", "Connexion au coeur de Myriam ❤️..."];

	const [loadingText, setLoadingText] = useState<string>(messages[0]);

	// Textes cachés sous le bouton "Non pas du tout"
	const hiddenMessages = ["C'est pas ce bouton...", "Je vais te balayer", "Ton cœur dit Ouiii", "Clique sur l'autre aychik", "Je te conseille pas"];
	const [hiddenIndex, setHiddenIndex] = useState(0);
	const [hoverInterval, setHoverInterval] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			if (i < messages.length) {
				setLoadingText(messages[i]);
				i++;
			} else {
				clearInterval(interval);
				setTimeout(() => setPhase("question"), 1000);
			}
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const startHoverLoop = () => {
		if (!hoverInterval) {
			const interval = setInterval(() => {
				setHiddenIndex((prev) => (prev + 1) % hiddenMessages.length);
			}, 500);
			setHoverInterval(interval);
		}
	};

	const stopHoverLoop = () => {
		if (hoverInterval) {
			clearInterval(hoverInterval);
			setHoverInterval(null);
		}
	};

	// ❤️ Explosion au clic sur Oui
	const handleYesClick = () => {
		setExploding(true);
		setTimeout(() => {
			window.location.href = "tel:+33695873347";
		}, 800); // durée de l'animation
	};

	// Génère un certain nombre de coeurs aléatoires autour du bouton
	const hearts = Array.from({ length: 15 }).map((_, i) => ({
		x: Math.random() * 120 - 60,
		y: Math.random() * -150 - 50,
		rotate: Math.random() * 360,
		scale: Math.random() * 0.7 + 0.3,
		delay: Math.random() * 0.3,
		id: i,
	}));

	return (
		<div className="h-screen flex flex-col justify-center items-center gap-6 px-4 py-12 lg:px-32 text-center text-primary/80 dark:text-default bg-white dark:bg-primary transition-all tracking-tight">
			{phase === "loading" && (
				<div className="flex flex-col items-center gap-4">
					<img src={MetN} alt="MetN" className="h-36 w-36 object-cover rounded-full outline outline-4 outline-pink-500  " />
					<motion.div key={loadingText} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-semibold">
						{loadingText}
					</motion.div>

					<LoaderCircle className="animate-spin text-pink-500 delay-75" size={32} />
				</div>
			)}

			{phase === "question" && (
				<div className="flex flex-col items-center gap-6 relative">
					<p className="text-3xl font-semibold">Reparler à <span className="text-pink-500">Dadou</span>  ?</p>
					<div className="flex gap-3 font-semibold relative">
						<motion.button className="px-6 py-2 bg-pink-500 text-white rounded-xl shadow relative z-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleYesClick}>
							Ouiiiii !
						</motion.button>

						{exploding &&
							hearts.map((heart) => (
								<motion.div
									key={heart.id}
									initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
									animate={{
										x: heart.x,
										y: heart.y,
										rotate: heart.rotate,
										scale: heart.scale,
										opacity: 0,
									}}
									transition={{ duration: 1.5, delay: heart.delay }}
									className="absolute text-3xl text-red-500"
									style={{ pointerEvents: "none" }}>
									❤️
								</motion.div>
							))}

						<div className="relative flex flex-col items-center">
							<motion.button
								className="relative z-50 px-6 py-2 bg-gray-300 text-black rounded-xl shadow"
								whileHover={{ translateY: 100 }}
								whileTap={{ translateY: 100 }}
								onHoverStart={startHoverLoop}
								onHoverEnd={stopHoverLoop}>
								Non pas du tout.
							</motion.button>

							<motion.p key={hiddenIndex} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="absolute top-2 text-sm text-gray-500 select-none">
								{hiddenMessages[hiddenIndex]}
							</motion.p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
