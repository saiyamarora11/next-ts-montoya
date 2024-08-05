"use client";
import { motion } from "framer-motion";

const FeatureSection = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-black text-center">
			<p className="max-w-xl px-4 text-white opacity-40">
				CRAFTING WEBSITES WHERE THE ELEGANCE OF DESIGN INTERSECTS WITH
				THE SCIENCE OF SELLING PRODUCTS.
			</p>
			<motion.a
				className="text-md mt-10 rounded-full border border-white px-8 py-3 hover:bg-white hover:text-black"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}>
				See All Works
			</motion.a>
		</div>
	);
};

export default FeatureSection;
