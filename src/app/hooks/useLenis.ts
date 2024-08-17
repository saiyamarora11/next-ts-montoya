import { useCallback, useEffect, useRef } from "react";
import Lenis from "lenis";
import useScrollStore from "@/app/store/scrollStore";

const useLenis = () => {
	const lenis = useRef<Lenis | null>(null);
	const { inSkillsSection } = useScrollStore();

	const initializeLenis = useCallback(
		(lerp: number) => {
			lenis.current = new Lenis({
				lerp,
				smoothWheel: true,
				syncTouch: true,
				syncTouchLerp: 0.1,
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
			initializeLenis(inSkillsSection ? 0.005 : 0.1);
		}
	}, [inSkillsSection]);

	return { adjustScrollSpeed: lenis.current?.options.lerp };
};

export default useLenis;
