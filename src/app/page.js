"use client";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import HomePage from "./layout/HomePage";
import HeaderLeft from "./layout/HeaderLeft";
import {useState, useEffect} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Lägg till useEffect för att läsa och uppdatera darkMode från localStorage vid client-side rendering
  useEffect(() => {
    // När komponenten är monterad på klienten, hämta darkMode från localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode)); // Om sparad preferens finns, använd den
    }
  }, []); // Denna effekt körs bara en gång när komponenten laddas

  useEffect(() => {
    console.log("Dark mode:", darkMode);
    // Spara darkMode till localStorage varje gång det ändras
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
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
