import {Resend} from "resend";
import {Html, Preview, Tailwind, Body, Container, Heading, Text, Section, Hr, Head} from "@react-email/components";

export const EmailMessage = () => {
  return (
    <>
    <Html>
    <Html>
      <Head />
      <Preview>Nouveau message du Portfolio NextJs</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
              Nouveau message via le formulaire de contact.
              </Heading>
              <Text>subject</Text>
              <Text>message</Text>
              <Hr />
              <Text>Le destinataire est : senderEmail</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
    </Html>
    </>
  )
}