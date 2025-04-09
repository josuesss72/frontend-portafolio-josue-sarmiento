import { create } from "zustand";

type Language = "en" | "es";

interface LanguageStore {
	language: Language;
	setLanguage: (lang: Language) => void;
	toggleLanguage: () => void;
}

export const useLanguage = create<LanguageStore>((set) => ({
	language: "en",
	setLanguage: (lang) => set({ language: lang }),
	toggleLanguage: () =>
		set((state) => ({ language: state.language === "en" ? "es" : "en" })),
}));
