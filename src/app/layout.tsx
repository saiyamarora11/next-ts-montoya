import type { Metadata } from "next";
import { Six_Caps } from "next/font/google";
import "./globals.css";

const sixCaps = Six_Caps({
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={sixCaps.className}>{children}</body>
		</html>
	);
}
