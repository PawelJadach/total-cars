import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavLogo() {
	return (
		<Link href="/#hero">
			<Image
				src="/logo.png"
				width={148}
				height={44}
				alt="Total Cars Logo"
			/>
		</Link>
	);
}
