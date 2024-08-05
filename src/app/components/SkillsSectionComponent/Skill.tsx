"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Skill = ({ children }: { children: ReactNode }) => {
	const element = useRef(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ["start end", "start start"],
	});

	const opacity = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0.4, 0.4, 1],
	);
	const color = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		["#FFFFFF20", "#FFFFFF20", "#FFFFFF"],
	);

	return (
		<motion.li
			ref={element}
			style={{ opacity, color }}
			transition={{ duration: 0.5 }}
			className="text-9xl font-medium">
			{children}
		</motion.li>
	);
};

export default Skill;
