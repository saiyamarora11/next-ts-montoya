"use client";
import { motion } from "framer-motion";

const letters = "MONTOYA".split("");

const HeroSection = () => {
	return (
		<div className="flex h-screen items-center justify-center bg-black font-sixCaps">
			{letters.map((letter, index) => (
				<motion.span
					key={index}
					className="mx-1 text-[18rem] text-white"
					whileHover={{
						scaleY: 1.5,
						originY: 0.5,
						transition: { duration: 0.3 },
					}}>
					{letter}
				</motion.span>
			))}
		</div>
	);
};

export default HeroSection;
