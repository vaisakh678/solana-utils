import { useTheme } from "next-themes";
import React from "react";
import { MoonStar, Sun } from "lucide-react";

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
			{mode === "dark" ? <Sun /> : <MoonStar />}
		</button>
	);
};

export default ThemeSwitcher;
