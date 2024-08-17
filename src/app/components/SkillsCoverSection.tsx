import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Skill from "@/app/components/SkillsSectionComponent/Skill";
import useScrollStore from "@/app/store/scrollStore";

const SkillsCoveredSection = () => {
	const container = useRef<HTMLDivElement>(null);
	const { setScrollStatus } = useScrollStore();
	const isInView = useInView(container, { amount: 0.5 });

	useEffect(() => {
		setScrollStatus(isInView);
	}, [isInView, setScrollStatus]);

	return (
		<div
			ref={container}
			className="skills-section max-h-full overflow-y-auto">
			<div className="!sticky top-20 z-[100] mb-20 mt-10 text-center text-sm font-bold">
				OUR SKILLS COVER
			</div>
			<motion.div>
				<ul className="skills-list border-2 border-white">
					{[
						"WEB DESIGN",
						"MOBILE APP DEVELOPMENT",
						"UI/UX DESIGN",
						"SEO OPTIMIZATION",
						"SOCIAL MEDIA MANAGEMENT",
						"DATA ANALYTICS",
						"CONTENT CREATION",
					].map((skill, index) => (
						<Skill key={index}>{skill}</Skill>
					))}
				</ul>
			</motion.div>
		</div>
	);
};

export default SkillsCoveredSection;
