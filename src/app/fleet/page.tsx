import FleetComponent from "@/components//Fleet";
import Hero from "@/components/Hero";

export default function Fleet() {
	return (
		<main>
			<Hero
				header="Nasza Flota – Luksus, Komfort i Styl w Każdej Podróży"
				subheader="Oferujemy starannie wyselekcjonowaną flotę luksusowych pojazdów, które spełnią oczekiwania najbardziej wymagających klientów. Elegancja, nowoczesność i pełne wyposażenie to gwarancja podróży na najwyższym poziomie."
			/>
			<FleetComponent />
		</main>
	);
}
