import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "mathfauch.com",
    template: "%s | mathfauch.com",
  },
  description: "",
  icons: {
    shortcut: "/favicon.svg",
  },
};
const inter = LocalFont({
  src: "../public/fonts/JetBrainsMonoNerdFont-Bold.ttf",
  variable: "--font-inter",
});

const JBMNFont = LocalFont({
  src: "../public/fonts/JetBrainsMonoNerdFont-SemiBold.ttf",
  variable: "--font-jbmnfont",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, JBMNFont.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
