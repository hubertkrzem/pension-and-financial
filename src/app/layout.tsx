import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

/*
Note
-----------
Bree Regular requires a license to use commercially.
Can use it for preview of the site but will either need to be downgraded or license before publishing.
-----------
*/
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Pension & Financial",
  description: "Independent pension and financial planning advice from John Clare & Associates Ltd, regulated by the Central Bank of Ireland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className} flex min-h-screen flex-col`}>

        <Navbar /> 
        {children}
        <Footer />

      </body>
    </html>
  );
}
