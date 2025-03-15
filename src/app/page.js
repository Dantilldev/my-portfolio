"use client";
import Navbar from "@/components/Navbar";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import HomePage from "./layout/HomePage";
import HeaderLeft from "./layout/HeaderLeft";
import {useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark", !darkMode);
  }

  return (
    <div
      className={`flex flex-col md:flex-row min-h-screen w-full subpixel-antialiased ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HomePage />
      <ScrollToTopButton />
    </div>
  );
}
