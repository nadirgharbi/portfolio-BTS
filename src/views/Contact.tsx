import { useRef, useState } from "react";
import { ContactInfos } from "@/components/etc/ContactInfos";
import { BsEnvelope, BsPhone, BsPin, BsGithub, BsLinkedin } from "react-icons/bs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tooltip } from "react-tooltip";
import { resend } from "@/lib/resend";
import GithubAccessTokenEmail from "../../emails/GithubEmail";
import { redirect } from "react-router-dom";

type ContactInfosType = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export const Contact = () => {
	// Contact form datas
	const [contactInfos, setContactInfos] = useState<ContactInfosType>({ name: "", email: "", subject: "", message: "" });

	// Contact details
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

	const onSubmitContact = () => {
		console.log(contactInfos);
	};

	const actionForm = async (formData: FormData) => {
		const email = formData.get("email") as string;
		await resend.emails.send({
			from: "nadirgharbi100@gmail.com",
			to: email,
			subject: "Email verification",
			react: GithubAccessTokenEmail({
				username: "nadirou"
			}),
		});
		redirect("/")
	};

	return (
		<div className={"min-h-screen flex flex-col items-center justify-center px-6 lg:px-32 py-40 gap-10 text-primary dark:text-default bg-white dark:bg-primary"}>
			<p className="text-3xl md:text-4xl font-extrabold">Contactez-Moi</p>

			<div className="flex flex-col gap-8">
				<ContactInfos infos={infos} />

				<div className="w-full animate-fade-up">
					<Card className="bg-default dark:bg-primary relative z-[900]">
						<CardHeader>
							<CardTitle>Contactez-moi</CardTitle>
							<CardDescription>Envoyer moi un message pour prendre contact, je vous repondrai brievement.</CardDescription>
						</CardHeader>
						<CardContent>
							{/* Contact form */}
							<form onSubmit={onSubmitContact} action="">
								<div className="grid w-full items-center gap-4">
									{/* name */}
									<div className="flex flex-col space-y-1.5">
										<Label>Nom / Prénom</Label>
										<Input required value={contactInfos.name} placeholder="John Doe" type="text" name="name" onChange={(e) => setContactInfos((prev) => ({ ...prev, name: e.target.value }))} />
									</div>

									{/* Email */}
									<div className="flex flex-col space-y-1.5">
										<Label>E-mail</Label>
										<Input required value={contactInfos.email} placeholder="John@doe.fr" type="email" name="email" onChange={(e) => setContactInfos((prev) => ({ ...prev, email: e.target.value }))} />
									</div>

									{/* Subject */}
									<div className="flex flex-col space-y-1.5">
										<Label>Objet</Label>
										<Select onValueChange={(e) => setContactInfos((prev) => ({ ...prev, subject: e }))} name="subject">
											<SelectTrigger>
												<SelectValue placeholder="Objet du message" />
											</SelectTrigger>
											<SelectContent position="popper">
												<SelectItem value="Vous souhaitez en savoir plus sur moi">Vous souhaitez en savoir plus sur moi</SelectItem>
												<SelectItem value="iteVous souhaitez juste m'envoyer un messagem2">Vous souhaitez juste m'envoyer un message</SelectItem>
												<SelectItem value="Je fais juste un test d'envoi pour voir si tout fonctionne">Je fais juste un test d'envoi pour voir si tout fonctionne</SelectItem>
											</SelectContent>
										</Select>
									</div>

									{/* Message */}
									<div className="flex flex-col space-y-1.5">
										<Label>Message</Label>
										<Textarea required value={contactInfos.message} placeholder="Votre message ..." name="message" maxLength={512} className="max-h-40" onChange={(e) => setContactInfos((prev) => ({ ...prev, message: e.target.value }))} />
									</div>
								</div>
								<Button onSubmit={onSubmitContact}>Envoyer</Button>
							</form>
						</CardContent>
						<CardFooter className="flex justify-between"></CardFooter>
					</Card>
				</div>

				{/* Link Social */}
				<div className="w-full animate-fade-up">
					<div className="flex justify-center gap-3 w-full animate-fade-up">
						<Tooltip id="tooltip-social" />
						<Button className="flex gap-2 w-full bg-primary dark:bg-default" data-tooltip-id="tooltip-social" data-tooltip-content={"LinkedIn"} data-tooltip-place="bottom">
							<BsLinkedin size={20} className="text-default/90 dark:text-primary/90" />
						</Button>
						<Button className="flex gap-2 w-full bg-primary dark:bg-default" data-tooltip-id="tooltip-social" data-tooltip-content={"Github"} data-tooltip-place="bottom">
							<BsGithub size={20} className="text-default/90 dark:text-primary/90" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
