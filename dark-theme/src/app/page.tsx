"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ThemeLayout from "./components/layout/ThemeLayout";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontStyle, setFontStyle] = useState("font-sans");
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeFontStyle = (newStyle: string) => {
    setFontStyle(newStyle);
  };
  return (
    <main>
      <ThemeLayout>
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8  shadow-xl">
          <div className="mb-6">
            <h1 className="text-4xl dark:text-white font-bold tracking-tight">
              Welcome to My Theme App
            </h1>
            <p className="mt-4 dark:text-slate-400">
              This is a Next.js app with a customizable theme and font style.
            </p>
          </div>
        </div>
      </ThemeLayout>
    </main>
  );
}
