import CardScrollSection from "@/app/components/CardScrollSection";
import AnimationText from "@/app/components/HeroSection";

const images = [
	"01hero.jpg",
	"02hero.jpg",
	"03hero.jpg",
	"04hero.jpg",
	"05hero.jpg",
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<AnimationText />
			<CardScrollSection />
		</main>
	);
}
