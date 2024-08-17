"use client";
import React, { useEffect, useRef } from "react";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import Skill from "@/app/components/SkillsSectionComponent/Skill";
import Lenis from "lenis";

const SkillsCoveredSection = () => {
	const container = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.05,
			smoothWheel: true,
			syncTouch: true,
			syncTouchLerp: 0.1,
			wheelMultiplier: 0.5,
			touchMultiplier: 0.5,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => lenis.destroy();
	}, []);
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
			<div className="!sticky top-20 z-[100] mb-20 mt-10 text-center text-sm font-bold">
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
