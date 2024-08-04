import Card from "@/app/components/Card";
import HeroSection from "@/app/components/HeroSection";

const imagesList = [
	"01hero.jpg",
	"02hero.jpg",
	"03hero.jpg",
	"04hero.jpg",
	"05hero.jpg",
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<HeroSection />
			<section className="relative flex flex-col gap-[10vh] py-[10vh]">
				{imagesList.map((img, idx) => (
					<Card key={idx} imgUrl={`/${img}`} />
				))}
			</section>
		</main>
	);
}
