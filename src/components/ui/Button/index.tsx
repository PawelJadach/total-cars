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
				"uppercase bg-primary rounded-lg px-10 py-3 md:text-lg hover:bg-primary/90 transition-all font-bold tracking-wider disabled:bg-primary/30 disabled:text-light/40 disabled:cursor-not-allowed",
				rest.className,
			)}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
