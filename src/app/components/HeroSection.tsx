"use client";
import {
	AnimatedLetters,
	HeroSectionDescription,
} from "@/app/components/HeroSectionComponents";

const HeroSection = () => {
	return (
		<div className="flex h-screen flex-col items-center justify-center bg-black text-center">
			<AnimatedLetters />
			<HeroSectionDescription />
		</div>
	);
};

export default HeroSection;
