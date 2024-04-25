import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label }) => {
	return (
		<>
			<Card className="bg-default dark:bg-primary relative z-[900]">
				<CardHeader className="flex gap-2 items-center justify-center">{icon}</CardHeader>
				<CardContent className="text-center text-sm font-bold">
					<p>{label}</p>
				</CardContent>
			</Card>
		</>
	);
};
