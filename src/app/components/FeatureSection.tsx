"use client";
import { motion } from "framer-motion";

const FeatureSection = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-black py-20 text-center">
			<p className="mb-8 text-lg text-white">
				CRAFTING WEBSITES WHERE THE ELEGANCE OF DESIGN INTERSECTS WITH
				THE SCIENCE OF SELLING PRODUCTS.
			</p>
			<motion.a
				href="#"
				className="rounded-full border border-white px-8 py-3 text-lg text-white transition-colors hover:bg-white hover:text-black"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}>
				See All Works
			</motion.a>
		</div>
	);
};

export default FeatureSection;
