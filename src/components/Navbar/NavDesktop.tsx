"use client";
import React from "react";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { navLinks } from "@/config/navbar";
import { useStickyNavbar } from "@/hooks/useStickyNavbar";
import { cn } from "@/utils/cn";

export default function NavDesktop() {
	const isSticky = useStickyNavbar();

	return (
		<div
			className={cn(
				"lg:block fixed top-0 left-0 right-0 hidden z-20 transition-all",
				isSticky && "bg-dark",
			)}
		>
			<div
				className={cn(
					"container flex justify-between items-center py-6 transition-all",
					isSticky && "py-4",
				)}
			>
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
