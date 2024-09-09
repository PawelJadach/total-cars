import { NavLinkProps } from "@/components/Navbar/NavLink";

export const navLinks: NavLinkProps[] = [
	{
		href: "/#about",
		label: "O nas",
	},
	{
		href: "/#offer",
		label: "Oferta",
	},
	{
		href: "/fleet",
		label: "Flota",
	},
	{
		href: "#contact",
		label: "Kontakt",
		filled: true,
	},
];
