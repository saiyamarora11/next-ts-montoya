"use client";
import { motion } from "framer-motion";
import styles from "./AnimatedText.module.css";

const letters = "MONTOYA".split("");

const HeroSection = () => {
	return (
		<div className={styles.container}>
			{letters.map((letter, index) => (
				<motion.span
					key={index}
					className={styles.letter}
					whileHover={{
						scaleY: 1,
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
