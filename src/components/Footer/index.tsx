import React from "react";
import { PhoneIcon, PlaceIcon } from "../ui/Icons";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-dark text-light" id="contact">
			<div className="container  gap-16 md:flex items-center py-12 md:py-24">
				<div className="space-y-5 md:space-y-10 mb-12 md:mb-0 max-w-xl">
					<h2 data-aos="fade-right" data-aos-delay="100">
						Kontakt
					</h2>
					<p
						data-aos="fade-right"
						data-aos-delay="200"
						className="leading-relaxed"
					>
						Skontaktuj się z nami, aby zarezerwować luksusowy
						transport lub uzyskać więcej informacji na temat naszych
						usług. Jesteśmy dostępni 24/7, gotowi dostosować się do
						Twoich potrzeb. Oferujemy obsługę w języku polskim i
						angielskim, zapewniając szybkie i profesjonalne
						wsparcie.
					</p>
					<div className="space-y-4">
						<p
							data-aos="fade-right"
							data-aos-delay="300"
							className="flex items-center gap-4"
						>
							<PhoneIcon />
							<a href="tel:+48696058169">
								+48 696 058 169 - Grzegorz
							</a>
						</p>
						<p
							data-aos="fade-right"
							data-aos-delay="400"
							className="flex items-center gap-4"
						>
							<PlaceIcon /> 51-124 Wrocław, ul. Henryka Michała
							Kamieńskiego 122/2
						</p>
					</div>
				</div>
				<div data-aos="flip-right">
					<Image
						src="/cars/8.png"
						alt="Czarny mercedes"
						width={670}
						height={508}
						className="md:img-shadow"
					/>
				</div>
			</div>
			<div className="container flex flex-col md:flex-row gap-6 items-center justify-between py-6">
				<span className="text-light text-sm">
					Made by <a href="https://www.pixel-blaze.com">PixelBlaze</a>
				</span>

				<p className="text-sm text-light text-center">
					© 2024 Prawa autorskie. Wszelkie prawa zastrzeżone.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
