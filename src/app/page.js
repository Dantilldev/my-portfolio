"use client";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import HomePage from "./layout/HomePage";
import HeaderLeft from "./layout/HeaderLeft";
import {useState, useEffect} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log("Dark mode:", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full subpixel-antialiase">
      <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HomePage />
      <ScrollToTopButton />
    </div>
  );
}
