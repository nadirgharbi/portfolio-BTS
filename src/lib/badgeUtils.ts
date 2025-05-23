function getBadgeBorderColor(status: string): string {
	switch (status) {
		case "Diplomé":
			return "border-green-500 dark:border-green-400";
		case "Niveau":
			return "border-amber-500 dark:border-amber-400";
		case "Préparation":
			return "border-sky-500 dark:border-sky-400";
		default:
			return "border-neutral-900 dark:border-white";
	}
}

export { getBadgeBorderColor };
