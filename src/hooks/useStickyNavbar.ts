"use client";
import { useEffect, useState } from "react";

export const useStickyNavbar = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		if (window.scrollY > 100) {
			setIsSticky(true);
		}
		const handleScroll = () => {
			if (window.scrollY > 100 && !isSticky) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return isSticky;
};
