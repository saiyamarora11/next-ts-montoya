"use client";

import { useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Card = ({ imgUrl }: { imgUrl: string }) => {
	const vertMargin = 10;
	const container = useRef(null);
	const { scrollY } = useScroll({
		target: container,
	});
	const [maxScrollY, setMaxScrollY] = useState(Infinity);
	const [dynamicStyles, setDynamicStyles] = useState({
		scale: 1,
		filter: 0,
	});
	const isInView = useInView(container, {
		margin: `0px 0px -${100 - vertMargin}% 0px`,
		once: true,
	});
	scrollY.on("change", (scrollY) => {
		let animationValue = 1;
		if (scrollY > maxScrollY) {
			animationValue = Math.max(
				0,
				1 - (scrollY - maxScrollY) / 10000,
			);
		}

		setDynamicStyles({
			scale: animationValue,
			filter: (1 - animationValue) * 100,
		});
	});
	useEffect(() => {
		if (isInView) {
			setMaxScrollY(scrollY.get());
		}
	}, [isInView]);

	return (
		<div
			ref={container}
			className="sticky h-[80vh] w-[90vw] rounded-xl bg-neutral-200"
			style={{
				top: `${vertMargin}vh`,
				height: `${100 - 2 * vertMargin}vh`,
				scale: dynamicStyles.scale,
				filter: `blur(${dynamicStyles.filter}px)`,
			}}>
			<Image
				src={imgUrl}
				alt={imgUrl}
				fill
				className="object-cover"
				sizes="90vw"
			/>
		</div>
	);
};

export default Card;
