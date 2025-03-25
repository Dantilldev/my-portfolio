"use client";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import HomePage from "./layout/HomePage";
import HeaderLeft from "./layout/HeaderLeft";
import {useState, useEffect} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Hämta sparat tema från localStorage vid första renderingen
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  // Uppdatera localStorage och dokumentets klass när darkMode ändras
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full subpixel-antialiase">
      <HeaderLeft
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <HomePage />
      <ScrollToTopButton />
    </div>
  );
}

// "use client";
// import ScrollToTopButton from "@/components/ScrollToTopButton";
// import HomePage from "./layout/HomePage";
// import HeaderLeft from "./layout/HeaderLeft";
// import {useState, useEffect} from "react";

// export default function Home() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     console.log("Dark mode:", darkMode);

//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   function toggleDarkMode() {
//     setDarkMode((prev) => !prev);
//   }

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen w-full subpixel-antialiase">
//       <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//       <HomePage />
//       <ScrollToTopButton />
//     </div>
//   );
// }
