"use client";
import {
	AnimatedLetters,
	HeroSectionDescription,
} from "@/app/components/HeroSectionComponents";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
	return (
		<div className="hero-section-container">
			<div className="p-10">
				<AnimatedLetters />
				<HeroSectionDescription />
			</div>
			<div className="hero-footer">
				<div className="flex items-center gap-x-6">
					<button>Scroll to Explore</button>
					<button>
						<ChevronDownIcon className="size-5 text-white" />
					</button>
				</div>
				<p>Featured Projects</p>
			</div>
		</div>
	);
};

export default HeroSection;
