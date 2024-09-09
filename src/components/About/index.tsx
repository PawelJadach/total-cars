import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<section className="container my-24" id="about">
			<div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-24">
				<div data-aos="flip-left">
					<Image
						src="/cars/1.png"
						alt="Car in mountain"
						width={600}
						height={500}
						className="md:img-shadow"
					/>
				</div>
				<div className="space-y-6">
					<h2
						className="leading-tight"
						data-aos="fade-left"
						data-aos-delay="100"
					>
						Nowoczesne podejście do rynku transportowego
					</h2>
					<p data-aos="fade-left" data-aos-delay="200">
						Witamy w naszej firmie transportowej, specjalizującej
						się w przewozach VIP luksusowymi i komfortowymi autami.
						Oferujemy niezawodny, elegancki i dyskretny transport na
						najwyższym poziomie, dostosowany do potrzeb najbardziej
						wymagających klientów.
						<br />
						<br />
						Zapewniamy wygodę, bezpieczeństwo oraz pełen
						profesjonalizm.
					</p>
				</div>
			</div>
			<div className="grid md:grid-cols-2 gap-8 md:gap-16">
				<div className="space-y-6">
					<h2
						data-aos="fade-right"
						data-aos-delay="100"
						className="leading-tight"
					>
						Bezpieczeństwo i komfort
					</h2>
					<p data-aos="fade-right" data-aos-delay="200">
						Jesteśmy firmą z wieloletnim doświadczeniem w
						transporcie osób klasy premium. Naszym priorytetem jest
						dostarczenie usług, które przekraczają oczekiwania nawet
						najbardziej wymagających klientów. Współpracujemy z
						klientami biznesowymi, gwiazdami show-biznesu,
						politykami oraz osobami prywatnymi, które cenią sobie
						komfort, dyskrecję i punktualność.
					</p>
				</div>
				<div data-aos="flip-right">
					<Image
						src="/cars/2.png"
						alt="Car in mountain"
						width={600}
						height={500}
						className="md:img-shadow"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
