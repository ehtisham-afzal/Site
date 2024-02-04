import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./ui/Styles/globals.css";
import { cn } from "./lib/utils";
import { ThemeProvider } from "./ui/ThemeProvider";
import Nav from "./ui/NavBar/Nav";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Ehtisham Afzal Jr Web Dev",
    default: "Ehtisham Afzal Jr Web Dev",
  },
  description: "Ehtisham Afzal Personal portfolio Site",
  metadataBase: new URL("https://ehtisham.dev"),
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
