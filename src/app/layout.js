import "./globals.css";
import {
  Poppins,
  League_Spartan,
  Bebas_Neue,
  Sofia_Sans,
  Oswald,
  Inter,
} from "next/font/google";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "600", "700"],
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
        className={`${poppinsFont.variable} ${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
