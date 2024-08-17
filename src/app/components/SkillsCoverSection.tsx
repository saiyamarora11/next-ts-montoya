"use client";
import React, { useEffect, useRef, useState } from "react";
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
	const lenisRef = useRef<Lenis | null>(null);
	const [inView, setInView] = useState(false);

	const raf = (lenis: Lenis) => (time: number) => {
		lenis.raf(time);
		requestAnimationFrame(raf(lenis));
	};

	useEffect(() => {
		const observedContainer = container.current;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log("SkillsCoveredSection entered the viewport.");
						setInView(true);
						if (!lenisRef.current) {
							lenisRef.current = new Lenis({
								lerp: 0.1,
								smoothWheel: true,
								syncTouch: true,
								syncTouchLerp: 0.1,
								wheelMultiplier: 0.5,
								touchMultiplier: 0.5,
							});
							requestAnimationFrame(raf(lenisRef.current));
						}
					} else {
						console.log("SkillsCoveredSection left the viewport.");
						setInView(false);
					}
				});
			},
			{ threshold: 0.1 },
		);

		if (observedContainer) {
			observer.observe(observedContainer);
		}

		return () => {
			if (observedContainer) {
				observer.unobserve(observedContainer);
			}
			if (lenisRef.current) {
				lenisRef.current.destroy();
				lenisRef.current = null;
			}
		};
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

	useEffect(() => {
		if (lenisRef.current) {
			if (inView) {
				lenisRef.current.options.wheelMultiplier = 0.3;
				lenisRef.current.options.touchMultiplier = 0.3;
			} else {
				lenisRef.current.options.wheelMultiplier = 0.5;
				lenisRef.current.options.touchMultiplier = 0.5;
			}
		}
	}, [inView]);

	return (
		<div ref={container} className="max-h-full overflow-y-auto">
			<div className="skills-cover-text">OUR SKILLS COVER</div>
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
