"use client";

import { useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import OverlayFooter from "./OverlayFooter";
import useCursorStore from "@/app/store/cursorStore";

type CardProps = {
	imgUrl: string;
	title: string;
};

const Card = ({ imgUrl, title }: CardProps) => {
	const { setCursorType } = useCursorStore();
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
			className="card-container"
			style={{
				top: `${vertMargin}vh`,
				height: `${100 - 2 * vertMargin}vh`,
				transform: `scale(${dynamicStyles.scale})`,
				filter: `blur(${dynamicStyles.filter}px)`,
			}}
			onMouseEnter={() => setCursorType("card")}
			onMouseLeave={() => setCursorType("")}>
			<Image
				src={imgUrl}
				alt="Card Image"
				fill
				className="object-cover"
				sizes="90vw"
			/>
			<OverlayFooter title={title} />
		</div>
	);
};

export default Card;
