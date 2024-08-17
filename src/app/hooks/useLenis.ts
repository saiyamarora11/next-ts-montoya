"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import useScrollStore from "@/app/store/scrollStore";

const useLenis = () => {
	const lenis = useRef<Lenis | null>(null);
	const { inSkillsSection } = useScrollStore();

	useEffect(() => {
		lenis.current = new Lenis({
			lerp: 0.1,
			smoothWheel: true,
			syncTouch: true,
			syncTouchLerp: 0.1,
			wheelMultiplier: 0.5,
			touchMultiplier: 0.5,
		});

		const raf = (time: number) => {
			lenis.current?.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		return () => lenis.current?.destroy();
	}, []);

	useEffect(() => {
		if (lenis.current) {
			if (inSkillsSection) {
				lenis.current.options.lerp = 0.005;
			} else {
				lenis.current.options.lerp = 0.1;
			}
		}
	}, [inSkillsSection]);

	return { adjustScrollSpeed: lenis.current?.options.lerp };
};

export default useLenis;
