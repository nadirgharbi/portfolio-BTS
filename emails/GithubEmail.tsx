import { Body, Button, Container, Head, Html, Img, Link, Preview, Section, Tailwind, Text } from "@react-email/components";
import * as React from "react";
import logoLight from "@/assets/logo-light.png";
import abc from "../src/assets/cisco-cyberattack.jpg"

interface GithubAccessTokenEmailProps {
	username?: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const GithubAccessTokenEmail = ({ username }: GithubAccessTokenEmailProps) => (
	<Html>
		<Head />
		<Preview>A fine-grained personal access token has been added to your account</Preview>
		<Tailwind>
			<Body className="bg-white text-gray-800 font-sans ">
				<Container className="max-w-3xl mx-auto px-4 py-12 ">

					<Text className="text-2xl font-bold mt-4 text-center">
						<strong>@{username}</strong>, a personal access was created on your account.
					</Text>

					<Section className="border border-gray-300 rounded-lg p-6 mt-6 text-center">
						<Text className="mb-4">
							Hey <strong>{username}</strong>!
						</Text>
						<Text className="mb-4">
							A fine-grained personal access token (<Link className="text-blue-500">resend</Link>) was recently added to your account.
						</Text>

						<Button href="http://localhost:5173/" className="bg-violet-500 text-white py-3 px-4 rounded-lg w-full">View your token</Button>
					</Section>
					<Text className="text-center mt-8">
						<Link className="text-blue-500">Your security audit log</Link> ・ <Link className="text-blue-500">Contact support</Link>
					</Text>

					<Text className="text-gray-600 text-sm text-center mt-12">GitHub, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107</Text>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);

GithubAccessTokenEmail.PreviewProps = {
	username: "alanturing",
} as GithubAccessTokenEmailProps;

export default GithubAccessTokenEmail;
