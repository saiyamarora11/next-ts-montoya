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
		<div ref={container} className="max-h-full overflow-y-auto">
			<div className="skills-cover-text">OUR SKILLS COVER</div>
			<motion.div>
				<ul className="skills-list">
					{[
						"WEB DESIGN",
						"MOBILE APP DEVELOPMENT",
						"UI/UX DESIGN",
						"SEO OPTIMIZATION",
						"SOCIAL MEDIA MANAGEMENT",
						"DATA ANALYTICS",
						"CONTENT CREATION",
					].map((skill, index, array) => (
						<Skill
							key={index}
							isFirst={index === 0}
							isLast={index === array.length - 1}>
							{skill}
						</Skill>
					))}
				</ul>
			</motion.div>
		</div>
	);
};

export default SkillsCoveredSection;
