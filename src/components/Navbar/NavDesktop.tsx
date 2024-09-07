import React from "react";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { navLinks } from "@/config/navbar";

export default function NavDesktop() {
	return (
		<div className="lg:block bg-dark backdrop-blur fixed top-0 left-0 right-0 hidden z-10">
			<div className="container flex justify-between items-center py-6">
				<NavLogo />
				<div className="flex gap-8 items-center">
					{navLinks.map((link, idx) => (
						<NavLink key={link.label + idx} {...link} />
					))}
				</div>
			</div>
		</div>
	);
}
