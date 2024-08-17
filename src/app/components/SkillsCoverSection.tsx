"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Skill from "@/app/components/SkillsSectionComponent/Skill";
// import Lenis from "lenis";

const SkillsCoveredSection = () => {
	const container = useRef<HTMLDivElement>(null);

	return (
		<div ref={container} className="max-h-full overflow-y-auto">
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
