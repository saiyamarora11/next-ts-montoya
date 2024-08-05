import {
	HeroSection,
	CardScrollSection,
	FeatureSection,
	SkillsCoverSection,
} from "@/app/components";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<HeroSection />
			<CardScrollSection />
			<FeatureSection />
			<SkillsCoverSection />
		</main>
	);
}
