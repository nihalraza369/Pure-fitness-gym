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
  title: "Fitness Demon | Mustafabad, Lahore",
  description:
    "Fitness Demon in Mustafabad, Lahore — weightlifting, CrossFit, cardio, Zumba, personal training and more. Open 24 hours Mon-Tue, 6am-12am Wed-Sat.",
  keywords: [
    "Fitness Demon",
    "Gym in Mustafabad",
    "Gym in Lahore",
    "Weightlifting Lahore",
    "CrossFit Lahore",
    "Zumba classes Lahore",
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
