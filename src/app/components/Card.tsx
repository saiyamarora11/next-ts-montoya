"use client";

import { useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Card = ({ imgUrl }: { imgUrl: string }) => {
	const vertMargin = 10;
	const container = useRef<HTMLDivElement | null>(null);
	const [maxScrollY, setMaxScrollY] = useState<number>(Infinity);
	const { scrollY } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const isInView = useInView(container, {
		margin: `0px 0px -${100 - vertMargin}% 0px`,
		once: true,
	});
	const [dynamicStyles, setDynamicStyles] = useState({
		scale: 1,
		filter: 0,
	});

	useEffect(() => {
		if (isInView) {
			setMaxScrollY(scrollY.get());
		}
	}, [isInView, scrollY]);

	useEffect(() => {
		const handleScroll = () => {
			let animationValue = 1;
			if (scrollY.get() > maxScrollY) {
				animationValue = Math.max(
					0,
					1 - (scrollY.get() - maxScrollY) / 10000,
				);
			}

			setDynamicStyles({
				scale: animationValue,
				filter: (1 - animationValue) * 100,
			});
		};

		const unsubscribe = scrollY.on("change", handleScroll);
		return () => {
			unsubscribe();
		};
	}, [scrollY, maxScrollY]);

	return (
		<div
			ref={container}
			className="sticky h-[80vh] w-[90vw] overflow-hidden rounded-xl bg-neutral-200"
			style={{
				top: `${vertMargin}vh`,
				height: `${100 - 2 * vertMargin}vh`,
				transform: `scale(${dynamicStyles.scale})`,
				filter: `blur(${dynamicStyles.filter}px)`,
			}}>
			<Image
				src={imgUrl}
				alt="Card Image"
				fill
				className="object-cover"
				sizes="90vw"
			/>
		</div>
	);
};

export default Card;
