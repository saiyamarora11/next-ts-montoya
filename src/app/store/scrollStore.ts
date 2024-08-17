import { create } from "zustand";

type ScrollState = {
	inSkillsSection: boolean;
	setScrollStatus: (state: boolean) => void;
};

const useScrollStore = create<ScrollState>((set) => ({
	inSkillsSection: false,
	setScrollStatus: (status: boolean) =>
		set({ inSkillsSection: status }),
}));

export default useScrollStore;
