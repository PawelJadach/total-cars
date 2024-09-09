"use client";
import { cn } from "@/utils/cn";
import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	specialProp?: string;
}

const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button
			className={cn(
				"bg-primary px-10 py-2.5 md:text-lg hover:bg-light hover:text-primary transition-all text-light font-bold tracking-wider disabled:bg-primary/30 disabled:text-light/40 disabled:cursor-not-allowed",
				rest.className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
