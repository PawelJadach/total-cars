import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";

export type NavLinkProps = {
	href: string;
	label: string;
	filled?: boolean;
	mobile?: boolean;
};

export default function NavLink({
	href,
	label,
	filled = false,
	mobile = false,
}: NavLinkProps) {
	return (
		<Link href={href}>
			<span
				className={cn(
					"transition-all hover:opacity-90 text-light",
					filled
						? "bg-primary px-4 py-2 rounded-lg"
						: "hover:bg-primary rounded-lg px-2 py-1",
					mobile && "text-lg",
				)}
			>
				{label}
			</span>
		</Link>
	);
}
