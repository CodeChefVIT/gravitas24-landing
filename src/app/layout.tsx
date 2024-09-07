import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Codechef-VIT | Gravitas'24",
  description:
    "The one-stop destination for all the tech enthusiasts out there. Codechef VIT presents Cookoff 9.0 and Clueminati 2.0 co-hosted by musclemind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content="https://imgur.com/cdbvOBA" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Codechef-VIT | Gravitas'24" />
        <meta property="og:url" content={""} />
        <meta property="og:site_name" content={"Codechef-VIT | Gravitas'24"} />
      <body>
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
