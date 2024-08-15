import { create } from "zustand";

type CursorState = {
	isCursorHidden: boolean;
	setIsCursorHidden: (hidden: boolean) => void;
};

const useCursorStore = create<CursorState>((set) => ({
	isCursorHidden: false,
	setIsCursorHidden: (hidden) => set({ isCursorHidden: hidden }),
}));

export default useCursorStore;
