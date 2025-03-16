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
      className={`flex flex-col lg:flex-row min-h-screen w-full subpixel-antialiased ${
        darkMode ? "bg-[#2E2A27] text-[#c1c1c1]" : "bg-[#ede8df] text-black"
      }`}
    >
      <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HomePage />
      <ScrollToTopButton />
    </div>
  );
}
