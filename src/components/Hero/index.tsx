import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

type HeroProps = {
	header: string;
	subheader: string;
};

const Hero = ({ header, subheader }: HeroProps) => {
	return (
		<header
			className="w-screen min-h-screen bg-black overflow-hidden relative flex items-center justify-center"
			id="hero"
		>
			<Image
				fill
				src="/hero.jpeg"
				alt="Flota total cars"
				className="opacity-20"
				objectFit="cover"
				layout="fill"
			/>
			<div className="flex items-center justify-center h-full flex-col max-w-3xl w-full text-center z-10 gap-7 container">
				<h1
					className="text-light  leading-tight tracking-wide"
					data-aos="zoom-in"
				>
					{header}
				</h1>
				<p
					className="text-light"
					data-aos="zoom-in"
					data-aos-delay="200"
				>
					{subheader}
				</p>
				<Button data-aos="zoom-in" data-aos-delay="400">
					<Link href="#contact">Zarezerwuj już dziś</Link>
				</Button>
			</div>
		</header>
	);
};

export default Hero;
