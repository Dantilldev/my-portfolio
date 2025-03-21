import "./globals.css";
import {Poppins, Bebas_Neue} from "next/font/google";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const bebasFont = Bebas_Neue({
  variable: "--bebas-neue",
  weight: ["400"], // Bebas Neue only has one weight
  subsets: ["latin"],
});

export const metadata = {
  title: "Daniel portfolio",
  description:
    "I am a web developer based in Stockholm, passionate about bringing ideas to life, with an eye for details",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} ${bebasFont.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
