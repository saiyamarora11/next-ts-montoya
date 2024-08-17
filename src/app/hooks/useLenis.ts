import { useCallback, useEffect, useRef } from "react";
import Lenis from "lenis";
import useScrollStore from "@/app/store/scrollStore";

const useLenis = () => {
	const lenis = useRef<Lenis | null>(null);
	const { inSkillsSection } = useScrollStore();

	const initializeLenis = useCallback(
		(lerp: number) => {
			const isMobile = () => window.innerWidth <= 768;
			const wheelMultiplier = isMobile() ? 0.2 : 0.5;
			const touchMultiplier = isMobile() ? 0.2 : 0.5;

			lenis.current = new Lenis({
				lerp,
				smoothWheel: true,
				syncTouch: true,
				syncTouchLerp: 0.1,
				wheelMultiplier,
				touchMultiplier,
			});

			const raf = (time: number) => {
				lenis.current?.raf(time);
				requestAnimationFrame(raf);
			};

			requestAnimationFrame(raf);
		},
		[lenis],
	);

	useEffect(() => {
		initializeLenis(0.1);

		return () => lenis.current?.destroy();
	}, [initializeLenis]);

	useEffect(() => {
		if (lenis.current) {
			console.log(
				`Setting scroll speed to ${inSkillsSection ? "slow" : "normal"}`,
			);
			lenis.current.destroy();
			initializeLenis(
				inSkillsSection
					? window.innerWidth <= 768
						? 0.02
						: 0.005
					: 0.1,
			);
		}
	}, [inSkillsSection, initializeLenis]);

	return { adjustScrollSpeed: lenis.current?.options.lerp };
};

export default useLenis;
