"use client";
import {
	AnimatedLetters,
	HeroSectionDescription,
} from "@/app/components/HeroSectionComponents";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import MagneticButton from "@/app/components/MagneticButton";

const HeroSection = () => {
	return (
		<div className="hero-section-container">
			<div className="p-10">
				<AnimatedLetters />
				<HeroSectionDescription />
			</div>
			<div className="hero-footer">
				<div className="z-[100] flex cursor-pointer items-center gap-x-6">
					<button>Scroll to Explore</button>
					<MagneticButton>
						<button>
							<ChevronDownIcon className="size-5 text-white" />
						</button>
					</MagneticButton>
				</div>
				<p>Featured Projects</p>
			</div>
		</div>
	);
};

export default HeroSection;
