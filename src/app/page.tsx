import {
	HeroSection,
	CardScrollSection,
	FeatureSection,
	SkillsCoverSection,
	StudioBanner,
} from "@/app/components";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<HeroSection />
			<CardScrollSection />
			<FeatureSection />
			<SkillsCoverSection />
			<StudioBanner />
		</main>
	);
}
