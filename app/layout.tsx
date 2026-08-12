import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pure Fitness Gym | Gulshan-e-Iqbal, Karachi",
  description:
    "Pure Fitness Gym in Gulshan-e-Iqbal, Karachi — weightlifting, CrossFit, cardio, Zumba, personal training and more. Open 7am–1am, 7 days a week.",
  keywords: [
    "Pure Fitness Gym",
    "Gym in Gulshan-e-Iqbal",
    "Gym in Karachi",
    "Weightlifting Karachi",
    "CrossFit Karachi",
    "Zumba classes Karachi",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${workSans.variable} font-body bg-ink text-bone antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
