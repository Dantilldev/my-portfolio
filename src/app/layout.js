import "./globals.css";
import {Poppins, League_Spartan} from "next/font/google";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const leagueSpartanFont = League_Spartan({
  variable: "--font-league-spartan",
  weight: ["400"],
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
        className={`${poppinsFont.variable} ${leagueSpartanFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
