import {
	HeroSection,
	CardScrollSection,
	FeatureSection,
} from "@/app/components";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<HeroSection />
			<CardScrollSection />
			<FeatureSection />
		</main>
	);
}
