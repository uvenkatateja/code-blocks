import localFont from "next/font/local";
import { Geist_Mono, Instrument_Sans } from "next/font/google";

const fontSans = localFont({
  variable: "--font-sans",
  src: "./InterVariable.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const fontHeadings = Instrument_Sans({
  variable: "--font-headings",
  subsets: ["latin"],
});

const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export { fontSans, fontHeadings, fontMono };
