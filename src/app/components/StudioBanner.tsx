"use client";
import {
	AnimatedLetters,
	StudioSectionDescription,
} from "@/app/components/StudioSection";

const StudioBanner = () => {
	return (
		<div className="studio-section">
			<StudioSectionDescription />
			<AnimatedLetters />
		</div>
	);
};

export default StudioBanner;
