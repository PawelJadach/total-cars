import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";

export type NavLinkProps = {
	href: string;
	label: string;
	filled?: boolean;
};

export default function NavLink({ href, label, filled = false }: NavLinkProps) {
	return (
		<Link href={href}>
			<span
				className={cn(
					"transition-all hover:text-primary text-light text-lg",
					filled
						? "bg-primary hover:bg-light px-4 py-2"
						: "px-2 py-1",
				)}
			>
				{label}
			</span>
		</Link>
	);
}
