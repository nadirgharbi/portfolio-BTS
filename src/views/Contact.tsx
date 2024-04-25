import { ContactInfos } from "@/components/etc/ContactInfos";
import { BsEnvelope, BsPhone, BsPin, BsGithub, BsLinkedin } from "react-icons/bs";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Tooltip } from "react-tooltip";

export const Contact = () => {
	const infos = [
		{
			icon: <BsEnvelope size={40} />,
			label: "nadirgharbi10@gmail.com",
		},
		{
			icon: <BsPhone size={40} />,
			label: "06 95 87 33 47",
		},
		{
			icon: <BsPin size={40} />,
			label: "41 Rue Jean Labrosse, Toulon",
		},
	];

	return (
		<div className={"max-h-full flex flex-col items-center justify-center px-6 lg:px-32 py-40 gap-10 text-primary dark:text-default bg-white dark:bg-primary"}>
			<p className="text-3xl md:text-4xl font-extrabold">Contactez-Moi</p>

			{/* Information */}
			<div className="w-full lg:w-4/5 animate-fade-up">
				<ContactInfos infos={infos} />
			</div>

			<div className="w-full lg:w-4/5 animate-fade-up">
				<Card className="bg-default dark:bg-primary relative z-[900]">
					<CardHeader>
						<CardTitle>Contactez-moi</CardTitle>
						<CardDescription>Envoyer moi un message pour prendre contact, je vous repondrai brievement.</CardDescription>
					</CardHeader>
					<CardContent>
						<form>
							<div className="grid w-full items-center gap-4">
								<div className="flex flex-col space-y-1.5">
									<Label>Nom / Prénom</Label>
									<Input id="name" placeholder="John Doe" />
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label>E-mail</Label>
									<Input id="name" placeholder="John@doe.fr" />
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label>Objet</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="Objet du message" />
										</SelectTrigger>
										<SelectContent position="popper">
											<SelectItem value="item1">Vous souhaitez en savoir plus sur moi</SelectItem>
											<SelectItem value="item2">Vous souhaitez juste m'envoyer un message</SelectItem>
											<SelectItem value="item3">Je fais juste un test d'envoi pour voir si tout fonctionne</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label>Message</Label>
									<Textarea placeholder="Votre message ..." maxLength={512} className="max-h-40" />
								</div>
							</div>
						</form>
					</CardContent>
					<CardFooter className="flex justify-between">
						<Button>Envoyer</Button>
					</CardFooter>
				</Card>
			</div>

			<div className="flex justify-center md:justify-start gap-2 w-full lg:w-4/5 animate-fade-up">
				<Tooltip id="tooltip-social" />
				<Button variant={"outline"} className="flex gap-2" size={"icon"} data-tooltip-id="tooltip-social" data-tooltip-content={"LinkedIn"} data-tooltip-place="bottom">
					<BsLinkedin size={16} />
				</Button>
				<Button variant={"outline"} className="flex gap-2" size={"icon"} data-tooltip-id="tooltip-social" data-tooltip-content={"Github"} data-tooltip-place="bottom">
					<BsGithub size={16} />
				</Button>
			</div>
		</div>
	);
};
