import {
	Header,
	MagicCursor,
	HeroSection,
	CardScrollSection,
	FeatureSection,
	SkillsCoverSection,
	StudioBanner,
	FooterComponent,
} from "@/app/components";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<MagicCursor />
			<Header />
			<HeroSection />
			<CardScrollSection />
			<FeatureSection />
			<SkillsCoverSection />
			<StudioBanner />
			<FooterComponent />
		</main>
	);
}
