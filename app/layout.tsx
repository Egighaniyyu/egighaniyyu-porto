import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import EgiAIChatbot from "./components/EgiAIChatbot";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Egi Ghaniyyu — AI-Powered Product & UI/UX Designer",
  description:
    "Egi Ghaniyyu — Product Designer & UI/UX Designer crafting AI-powered digital products that connect strategy, usability, and visual clarity.",
  icons: {
    icon: "/images/egi-photo-circle.png",
    shortcut: "/images/egi-photo-circle.png",
    apple: "/images/egi-photo-circle.png",
  },
};

const REVEAL_READY_SCRIPT =
  "document.documentElement.classList.add('reveal-ready');";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_READY_SCRIPT }} />
        {children}
        <EgiAIChatbot />
      </body>
    </html>
  );
}
