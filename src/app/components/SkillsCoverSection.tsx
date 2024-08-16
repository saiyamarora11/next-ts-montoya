"use client";
import React, { useRef } from "react";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import Skill from "@/app/components/SkillsSectionComponent/Skill";

const SkillsCoveredSection = () => {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const autoScrollY = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
	const autoScroll = useSpring(autoScrollY, {
		stiffness: 300,
		damping: 30,
	});

	return (
		<div ref={container}>
			<div className="sticky top-10 mt-10 text-center text-sm">
				OUR SKILLS COVER
			</div>
			<motion.div style={{ y: autoScroll }}>
				<ul className="skills-list">
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
