import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "CodeChef VIT | Gravitas'24",
  description:
    "The one-stop destination for all the tech enthusiasts out there. CodeChef VIT presents Cookoff 9.0 and Clueminati 2.0 co-hosted by Musclemind.",

  keywords:
    "CodeChef VIT, Gravitas 2024, Cookoff 9.0, Clueminati 2.0, tech events VIT, coding competitions VIT, programming events India, hackathons VIT, competitive programming, CodeChef events, tech festival VIT, VIT student events, technology conference, coding competition Gravitas, Cookoff VIT, Clueminati VIT, coding challenge UAE, technical fest VIT, VIT tech club, university coding events, tech enthusiasts India",

  openGraph: {
    title: "CodeChef VIT | Gravitas'24",
    description:
      "Join us for Cookoff 9.0 and Clueminati 2.0 at Gravitas'24. Your one-stop destination for all things tech and coding at VIT!",
    url: "https://gravitas24-landing-theta.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://imgur.com/cdbvOBA",
        width: 1200,
        height: 630,
        alt: "CodeChef VIT - Gravitas'24 Event Banner",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Codechef-VIT | Gravitas'24</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          property="og:title"
          content={"Codechef-VIT | Gravitas'24"}
        />
        <meta
          name="og:description"
          content={
            "The one-stop destination for all the tech enthusiasts out there. Codechef VIT presents Cookoff 9.0 and Clueminati 2.0 co-hosted by musclemind."
          }
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content="https://imgur.com/cdbvOBA" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Codechef-VIT | Gravitas'24" />
        <meta
          property="og:url"
          content={""}
        />
        <meta property="og:site_name" content={"Codechef-VIT | Gravitas'24"} />
      </head>
      <body>
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
