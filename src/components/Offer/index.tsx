import React from "react";
import { CalendarIcon, PersonIcon, PlaneIcon, SuitcaseIcon } from "../ui/Icons";

const Offer = () => {
	return (
		<section className="bg-dark py-24" id="offer">
			<div className="container grid md:grid-cols-4 gap-16 md:gap-8 text-light text-center">
				<div className="flex flex-col justify-start items-center gap-6">
					<div data-aos="fade-down">
						<PlaneIcon />
					</div>
					<h3
						data-aos="zoom-in"
						data-aos-delay="400"
						className="leading-tight tracking-wider"
					>
						Transfery Lotniskowe
					</h3>
					<p
						data-aos="zoom-in"
						data-aos-delay="400"
						className="leading-relaxed text-sm"
					>
						Oferujemy luksusowy transport z i na lotnisko,
						zapewniając komfort i wygodę na początku lub końcu
						Twojej podróży.
					</p>
				</div>
				<div className="flex flex-col justify-start items-center gap-6">
					<div data-aos="fade-down" data-aos-delay="100">
						<PersonIcon />
					</div>
					<h3
						data-aos="zoom-in"
						data-aos-delay="500"
						className="leading-tight tracking-wider"
					>
						Przewozy Biznesowe
					</h3>
					<p
						data-aos="zoom-in"
						data-aos-delay="500"
						className="leading-relaxed text-sm"
					>
						Zapewniamy niezawodne przewozy na spotkania biznesowe,
						konferencje i inne wydarzenia, tak abyś zawsze był na
						czas i w pełni skoncentrowany na swoich celach.
					</p>
				</div>
				<div className="flex flex-col justify-start items-center gap-6">
					<div data-aos="fade-down" data-aos-delay="200">
						<SuitcaseIcon />
					</div>
					<h3
						data-aos="zoom-in"
						data-aos-delay="600"
						className="leading-tight tracking-wider"
					>
						Prywatne Wyjazdy
					</h3>
					<p
						data-aos="zoom-in"
						data-aos-delay="600"
						className="leading-relaxed text-sm"
					>
						Niezależnie od tego, czy planujesz romantyczny wyjazd,
						wycieczkę z rodziną czy wieczór na mieście, nasz
						transport VIP sprawi, że Twoja podróż będzie bezstresowa
						i wyjątkowa.
					</p>
				</div>
				<div className="flex flex-col justify-start items-center gap-6">
					<div data-aos="fade-down" data-aos-delay="300">
						<CalendarIcon />
					</div>
					<h3
						data-aos="zoom-in"
						data-aos-delay="700"
						className="leading-tight tracking-wider"
					>
						Wydarzenia Specjalne
					</h3>
					<p
						data-aos="zoom-in"
						data-aos-delay="700"
						className="leading-relaxed text-sm"
					>
						Organizujesz ważne wydarzenie? Zapewnimy luksusowy
						transport dla Ciebie i Twoich gości, gwarantując
						elegancję i styl na każdą okazję.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Offer;
