"use client";
import { motion } from "framer-motion";
import styles from "./AnimatedText.module.css";

const letters = "MONTOYA".split("");

const animations = [
	{ x: 0, y: -20 }, // Move up
	{ x: 20, y: 0 }, // Move right
	{ x: 0, y: 20 }, // Move down
	{ x: -20, y: 0 }, // Move left
	{ x: 20, y: -20 }, // Move up-right
	{ x: -20, y: -20 }, // Move up-left
	{ x: 20, y: 20 }, // Move down-right
	{ x: -20, y: 20 }, // Move down-left
];

const AnimatedText = () => {
	return (
		<div className={styles.container}>
			{letters.map((letter, index) => (
				<motion.span
					key={index}
					className={styles.letter}
					whileHover={{
						...animations[index % animations.length],
						transition: { duration: 0.3 },
					}}>
					{letter}
				</motion.span>
			))}
		</div>
	);
};

export default AnimatedText;
