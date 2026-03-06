import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "system"
    );

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove both classes to start fresh
        root.classList.remove("light", "dark");

        let activeTheme = theme;

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            activeTheme = systemTheme;
        }

        if (activeTheme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.add("light");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    // Listen for system theme changes if set to 'system'
    useEffect(() => {
        if (theme !== "system") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => {
            const root = window.document.documentElement;
            root.classList.remove("light", "dark");
            if (e.matches) {
                root.classList.add("dark");
            } else {
                root.classList.add("light");
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
