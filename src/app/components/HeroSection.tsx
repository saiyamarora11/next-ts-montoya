"use client";
import {
	AnimatedLetters,
	HeroSectionDescription,
} from "@/app/components/HeroSectionComponents";

const HeroSection = () => {
	return (
		<div className="hero-section-container">
			<div className="p-10">
				<AnimatedLetters />
				<HeroSectionDescription />
			</div>
			<div className="hero-footer">
				<div>
					<button>Scroll to Explore</button>
					<button></button>
				</div>
				<p>Featured Projects</p>
			</div>
		</div>
	);
};

export default HeroSection;
