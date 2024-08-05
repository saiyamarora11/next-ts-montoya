import CardScrollSection from "@/app/components/CardScrollSection";
import AnimationText from "@/app/components/HeroSection";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<AnimationText />
			<CardScrollSection />
		</main>
	);
}
