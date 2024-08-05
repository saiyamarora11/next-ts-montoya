"use client";
import { motion } from "framer-motion";

const letters = "OUR STUDIO".split("");

const AnimatedLetters = () => {
	return (
		<div className="flex justify-center">
			{letters.map((letter, index) => (
				<motion.div
					key={index}
					className="animation-letters-style"
					whileHover={{
						scaleY: 1.3,
						originY: 0.2,
						transition: { duration: 0.5 },
					}}>
					{letter}
				</motion.div>
			))}
		</div>
	);
};

export default AnimatedLetters;