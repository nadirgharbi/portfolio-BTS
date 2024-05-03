import { useState } from "react";
import { ContactInfos } from "@/components/etc/ContactInfos";
import { BsEnvelope, BsPhone, BsPin, BsGithub, BsLinkedin, BsReddit } from "react-icons/bs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tooltip } from "react-tooltip";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  // Disabled button when send mail
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact form datas
  const [contactInfos, setContactInfos] = useState<ContactInfosType>({ name: "", email: "", subject: "", message: "" });

  // Catpcha Value
  const [catpchaVal, setCaptchaVal] = useState<string | null>(null);

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

  const checkForm = () => {
    return Boolean(contactInfos.name) && Boolean(contactInfos.email) && Boolean(contactInfos.subject) && Boolean(contactInfos.message);
  };

  // Submit the form
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (catpchaVal) {
      setIsSubmitting(true);

      // Identification au compte EmailJS
      const serviceID = "service_svvxweo";
      const templateID = "template_x0rt2fk";
      const publicKey = "MjIfD4GxiBI5JkGqA";

      // Parametre pour indiquer les informations du formulaire
      const templateParams = {
        from_name: contactInfos.name,
        from_email: contactInfos.email,
        to_name: "Nadirou",
        subject: contactInfos.subject,
        message: contactInfos.message,
      };

      // Requete qui effectue l'envoie du mail
      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log("Email envoyé !", response);
          setContactInfos({ name: "", email: "", subject: "", message: "" });
          toast.success("Votre message a été envoyé avec succès !");
        })
        .catch((error) => {
          toast.error("Erreur lors de l'envoi du mail. Source de l'erreur :" + error);
          console.error("Erreur lors de l'envoi du mail", error);
        })
        .finally(() => {
          setIsSubmitting(false); // Remettre le bouton à l'état initial
          setCaptchaVal(null); // Réinitialiser la valeur du captcha
        });
    } else {
      toast.error("Veuillez valider le captcha avant d'envoyer le message !");
    }
  };

  return (
    <>
      {/* Toast params */}
      <Toaster position="top-center" richColors closeButton className="fixed" />

      {/* Content */}
      <div className={"min-h-screen flex flex-col items-center justify-center px-6 lg:px-32 py-40 gap-10 text-primary dark:text-default bg-white dark:bg-primary"}>
        <p className="text-3xl md:text-4xl font-extrabold">Contactez-Moi</p>

        <div className="flex flex-col gap-8">
          <ContactInfos infos={infos} />

          <div className="w-full animate-fade-up">
            <Card className="bg-default dark:bg-primary relative z-[900]">
              <CardHeader>
                <CardTitle>Contactez-moi</CardTitle>
                <CardDescription>Envoyez-moi un message pour prendre contact, je vous repondrai rapidement.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Contact form */}
                <form onSubmit={handleSubmit}>
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
                          <SelectItem value="Demande de renseignements">Demande de renseignements sur vos services</SelectItem>
                          <SelectItem value="Proposition d'embauche ou d'un contrat">Proposition d'embauche / de contrat </SelectItem>
                          <SelectItem value="Proposition de collaboration sur un projet">Proposition de collaboration sur un projet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-1.5">
                      <Label>Message</Label>
                      <Textarea required value={contactInfos.message} placeholder="Votre message ..." name="message" maxLength={512} className="max-h-40" onChange={(e) => setContactInfos((prev) => ({ ...prev, message: e.target.value }))} />
                    </div>
                  </div>
                  <div className="space-y-3 mt-5">
                    {/* Check if form is not empty and load the Google reCAPTCHA */}
                    {checkForm() && <ReCAPTCHA sitekey="6Ld5Y8kpAAAAAPhrYkHuH_863G4kvtrxWhlVN4EO" onChange={(value) => setCaptchaVal(value)} />}

                    {/* Button Submit */}
                    <Button className="disabled:bg-default/80" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Envoi en cours" : "Envoyer"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Link Social */}
          <div className="w-full animate-fade-up">
            <div className="flex justify-center gap-3 w-full animate-fade-up">
              <Tooltip id="tooltip-social" />
              <Button className="flex gap-2 w-full bg-primary dark:bg-default" data-tooltip-id="tooltip-social" data-tooltip-content={"LinkedIn"} data-tooltip-place="bottom" onClick={() => window.open("https://www.linkedin.com/in/nadirgharbi8310/", "_blank")}>
                <BsLinkedin size={20} className="text-default/90 dark:text-primary/90" />
              </Button>
              <Button className="flex gap-2 w-full bg-primary dark:bg-default" data-tooltip-id="tooltip-social" data-tooltip-content={"Github"} data-tooltip-place="bottom" onClick={() => window.open("https://github.com/nadirgharbi", "_blank")}>
                <BsGithub size={20} className="text-default/90 dark:text-primary/90" />
              </Button>
              <Button className="flex gap-2 w-full bg-primary dark:bg-default" data-tooltip-id="tooltip-social" data-tooltip-content={"Reddit"} data-tooltip-place="bottom" onClick={() => window.open("https://www.reddit.com/user/ShipProfessional6855/", "_blank")}>
                <BsReddit size={20} className="text-default/90 dark:text-primary/90" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
