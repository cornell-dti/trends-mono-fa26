import { createContext, useContext } from "react";

export type Theme = "light" | "dark";

export const ThemeContext = createContext<Theme>("light");

// Lecture 4, slides 28–29: Theme extension — wrap context in a custom hook.
export const useTheme = () => useContext(ThemeContext);
