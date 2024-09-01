import type { Metadata } from "next";
import { Inter, Roboto_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const inter = Fira_Code({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
