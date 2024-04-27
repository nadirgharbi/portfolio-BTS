import { Resend } from "resend";

export const resend = new Resend("re_AcGZZvjg_JyTApmDmjH7bAWt9LvJkSohJ");

resend.apiKeys.create({ name: 'Production' });

(async function () {
	const { data, error } = await resend.emails.send({
		from: "Acme <onboarding@resend.dev>",
		to: ["delivered@resend.dev"],
		subject: "Hello World",
		html: "<strong>It works!</strong>",
	});

	if (error) {
		return console.error({ error });
	}

	console.log({ data });
})();
