import { TooltipProvider } from "@radix-ui/react-tooltip";
import type { Metadata } from "next";
import { Outfit as FontSans } from "next/font/google";
import Navbar from "../components/navbar";
import { ThemeProvider } from "../components/theme-provider";
import { DATA } from "../data/resume";
import { cn } from "../lib/util";
import "./globals.css";
import Head from "next/head";
import { AnimatedCursor } from "../components/ui/AnimatedCursor";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: "https://github.com/abhay-raj19",
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>abhay-raj19</title>
        <meta
          name="description"
          content="Portfolio of abhay, a Full Stack Developer specializing in Next.js, Node.js, and more."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, React, Node.js, JavaScript, Portfolio"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "abhay-raj19",
            url: "https://github.com/abhay-raj19",
            jobTitle: "Full Stack Developer",
            sameAs: [
              "https://github.com/abhay-raj19",
              "https://linkedin.com/in/abhay-raj19",
              "https://twitter.com/abhayraj423",
            ],
          })}
        </script>
      </Head>
      <body
        className={cn(
            "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
            fontSans.variable
        )}
      >
        
        <AnimatedCursor />
          <ThemeProvider attribute="class" defaultTheme="dark">
            <TooltipProvider delayDuration={0}>
                
                    {children}
            
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
