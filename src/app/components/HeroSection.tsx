"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.2,
			},
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const letters = "MONTOYA".split("");

	// Custom cursor state
	const cursorRef = useRef<HTMLDivElement | null>(null);
	const [cursorVariant, setCursorVariant] = useState("default");

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (cursorRef.current) {
				cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<section className="relative flex min-h-screen items-center justify-center bg-black text-6xl font-bold text-white">
			<motion.div
				className="flex h-full flex-col items-center justify-center text-center"
				variants={containerVariants}
				animate="visible">
				<div className="relative inline-block">
					{letters.map((letter, idx) => (
						<motion.span
							key={idx}
							className="inline-block"
							variants={textVariants}
							whileHover={{ scale: 1.5, color: "#F00" }}
							onMouseEnter={() => setCursorVariant("hover")}
							onMouseLeave={() => setCursorVariant("default")}>
							{letter}
						</motion.span>
					))}
				</div>
				<motion.p
					className="mx-auto mt-4 max-w-xl px-4 text-lg font-light text-gray-400"
					variants={textVariants}>
					WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING
					DESIGN, AND DEVELOPMENT. OUR WORK IS ALWAYS AT THE
					INTERSECTION OF DESIGN AND TECHNOLOGY.
				</motion.p>
			</motion.div>

			{/* Custom cursor */}
			<motion.div
				ref={cursorRef}
				className="pointer-events-none fixed z-50 h-8 w-8 rounded-full border border-white"
				variants={{
					default: { scale: 1 },
					hover: {
						scale: 2,
						backgroundColor: "rgba(255,255,255,0.5)",
					},
				}}
				animate={cursorVariant}
				initial={false}
			/>
		</section>
	);
};

export default HeroSection;
