import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import clsx from "clsx";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Floating from "@/components/layout/Floating";

export const metadata: Metadata = {
	title: '',
	description: 'b',
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={clsx("min-h-screen bg-background font-sans antialiased")}
			>
				{/* { children } */}
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Header />
						<main className="container mx-auto max-w-[1280px] flex-grow">
							{children}
						</main>
						<Floating />
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
