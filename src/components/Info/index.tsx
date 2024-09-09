import Image from "next/image";
import React from "react";

const Info = () => {
	return (
		<section className="container grid md:grid-cols-2 gap-8 md:gap-16 my-24">
			<div data-aos="flip-left">
				<Image
					width={647}
					height={778}
					src="/cars/10.png"
					alt="Wnętrze auta"
					className="md:img-shadow"
				/>
			</div>
			<div className="space-y-6">
				<div>
					<h3
						className="mb-3 flex gap-2"
						data-aos="fade-left"
						data-aos-delay="100"
					>
						<span className="inline-block min-w-5 mt-[6px] h-5 bg-primary" />{" "}
						Ponad 3 miliony kilometrów
					</h3>
					<p
						data-aos="fade-left"
						data-aos-delay="200"
						className="leading-relaxed"
					>
						Nasze auta pokonały ponad 3 miliony kilometrów,
						bezpiecznie przewożąc klientów na całym świecie. To
						doświadczenie przekłada się na perfekcyjne planowanie
						tras, optymalizację czasu przejazdu oraz maksymalny
						komfort podróży. Możesz być pewien, że z nami każda
						podróż przebiegnie bezproblemowo.
					</p>
				</div>
				<div>
					<h3
						className="mb-3 flex gap-2"
						data-aos="fade-left"
						data-aos-delay="300"
					>
						<span className="inline-block min-w-5 mt-[6px] h-5 bg-primary" />{" "}
						Zaufali nam światowi giganci
					</h3>
					<p
						data-aos="fade-left"
						data-aos-delay="400"
						className="leading-relaxed"
					>
						Z dumą obsługujemy liderów światowego biznesu,
						międzynarodowe korporacje, gwiazdy oraz znane
						osobistości. To najlepsze świadectwo naszej rzetelności
						i prestiżu. Wybierając nasze usługi, dołączasz do grona
						klientów, którzy cenią najwyższe standardy i
						profesjonalizm.
					</p>
				</div>
				<div>
					<h3
						data-aos="fade-left"
						data-aos-delay="500"
						className="mb-3 flex gap-2"
					>
						<span className="inline-block min-w-5 mt-[6px] h-5 bg-primary" />{" "}
						Stawiamy na bezpieczeństwo
					</h3>
					<p
						data-aos="fade-left"
						data-aos-delay="600"
						className="leading-relaxed"
					>
						Bezpieczeństwo jest dla nas priorytetem. Każde auto z
						naszej floty jest regularnie serwisowane, a nasi
						kierowcy są szkoleni, aby zapewniać bezpieczną i
						spokojną podróż. Dbamy o każdy szczegół, abyś mógł
						zrelaksować się i czuć się pewnie na drodze.
					</p>
				</div>
				<div>
					<h3
						data-aos="fade-left"
						data-aos-delay="700"
						className="mb-3 flex gap-2"
					>
						<span className="inline-block min-w-5 mt-[6px] h-5 bg-primary" />{" "}
						Doświadczeni polscy kierowcy
					</h3>
					<p
						data-aos="fade-left"
						data-aos-delay="800"
						className="leading-relaxed"
					>
						Nasi kierowcy to wykwalifikowani profesjonaliści z
						wieloletnim doświadczeniem w transporcie VIP. Wszyscy
						pochodzą z Polski, co gwarantuje doskonałą znajomość
						lokalnych realiów i najwyższy poziom obsługi. Z nami
						każda podróż to przyjemność.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Info;
