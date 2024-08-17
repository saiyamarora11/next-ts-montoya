// Inside useLenis.ts
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const useLenis = () => {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.1,
			smoothWheel: true,
			syncTouch: true,
			syncTouchLerp: 0.1,
			wheelMultiplier: 0.5,
			touchMultiplier: 0.5,
		});

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		return () => lenis.destroy();
	}, []);
};

export default useLenis;
