import React from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex gap-2 bg-gray-200 dark:bg-gray-800 p-1 border border-gray-300 dark:border-gray-700 rounded-full items-center">
            <button
                onClick={() => setTheme("light")}
                aria-label="Light theme"
                className={`p-1.5 rounded-full transition ${theme === "light"
                        ? "bg-white text-yellow-500 shadow-md"
                        : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
            >
                <Sun size={18} />
            </button>

            <button
                onClick={() => setTheme("system")}
                aria-label="System theme"
                className={`p-1.5 rounded-full transition ${theme === "system"
                        ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-md"
                        : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
            >
                <Monitor size={18} />
            </button>

            <button
                onClick={() => setTheme("dark")}
                aria-label="Dark theme"
                className={`p-1.5 rounded-full transition ${theme === "dark"
                        ? "bg-black text-blue-400 shadow-md"
                        : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
            >
                <Moon size={18} />
            </button>
        </div>
    );
};

export default ThemeToggle;
