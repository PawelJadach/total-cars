import type { Metadata } from "next";
import "./globals.css";
import { config } from "@/config/config";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";
import { cn } from "@/utils/cn";
import { AOSInit } from "@/lib/AOSInit";

const font = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = config.metadata.root;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang={config.locale}
			className="scroll-smooth scroll-pt-32  overflow-y-auto overflow-x-hidden"
		>
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="google" content="notranslate" />
			</head>
			<body
				className={cn(
					font.className,
					"min-h-screen max-w-[100vw] overflow-hidden",
				)}
			>
				<AOSInit />
				<Navbar />
				<div>{children}</div>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
