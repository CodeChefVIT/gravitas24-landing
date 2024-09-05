import type { Metadata } from "next";
import "../styles/globals.css";

import Footer from "@/components/sections/footer";
 
export const metadata: Metadata = {
  title: "Codechef_VIT-Gravitas-24",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      
      <main className="relative overflow-hidden">
          {children}
      </main>
        
      </body>
    </html>
  );
}
