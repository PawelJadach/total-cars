import About from "@/components/About";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Offer from "@/components/Offer";

export default function Home() {
	return (
		<main>
			<Hero
				header="Wynajem komfortowych limuzyn z kierowcą"
				subheader="Komfort, Luksus i Niezawodność na Każdym Kroku"
			/>
			<About />
			<Offer />
			<Info />
		</main>
	);
}
