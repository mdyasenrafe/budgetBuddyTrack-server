"use client";
import { useState } from "react";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const ThemeLayout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontStyle, setFontStyle] = useState("font-sans");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeFontStyle = (newStyle: string) => {
    setFontStyle(newStyle);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${fontStyle}`}
        />
      </Head>
      <div className={`font ${fontStyle}`}>
        <header className="bg-gray-200 dark:bg-gray-800 p-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={toggleDarkMode}
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
          <div className="mt-2">
            <label className="font-semibold dark:text-white">Font Style:</label>
            <select
              className="ml-2 p-1 border rounded"
              value={fontStyle}
              onChange={(e) => changeFontStyle(e.target.value)}
            >
              <option value="font-sans">Sans-serif</option>
              <option value="font-serif">Serif</option>
              <option value="font-mono">Monospace</option>
              <option value="font-poppins">Poppins</option>
            </select>
          </div>
        </header>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default ThemeLayout;
