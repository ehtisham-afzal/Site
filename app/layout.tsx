import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./ui/Styles/globals.css";
import { cn } from "./lib/utils";
import { ThemeProvider } from "./ui/ThemeProvider";
import Nav from "./ui/NavBar/Nav";
import Footer from "./ui/Footer";
import { siteConfig } from "../config/site";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "ehtisham",
    "afzal",
    "portfolio",
    "webdev",
    "developer",
    "programmer",
    "software engineer",
    "software developer",
    "web developer",
  ],
  authors: [
    {
      name: "ehtisham afzal",
      url: "https://ehtisham.dev",
    },
  ],
  creator: "ehtisham afzal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ehtisham_dev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen [backgroundRepeat:no-repeat] [backgroundPosition:top] bg-background bg-[url(/BackgroundGradient.svg)] font-sans text-pretty w-full antialiased p-0 px-4 m-0 flex  justify-center items-center text-foreground",
          fontSans.variable
        )}
      >
      <Analytics/>
        <div className="w-full max-w-[1024px] self-center flex flex-col">
          <ThemeProvider attribute="class" defaultTheme="system">
            <Nav />
            {children}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
