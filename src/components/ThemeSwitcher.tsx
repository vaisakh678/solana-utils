import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeProvider";

const ThemeSwitcher: React.FC = () => {
	const { setTheme, theme } = useTheme();
	console.log({ theme });
	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

	const mode = theme === "system" ? systemTheme : theme;

	return (
		<button
			onClick={() => {
				setTheme(mode === "dark" ? "light" : "dark");
			}}
		>
			{mode === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
		</button>
	);
};

export default ThemeSwitcher;
