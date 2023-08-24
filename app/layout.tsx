import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
  },
  applicationName: "gonastorga.com",
  authors: { name: siteConfig.username },
  creator: siteConfig.username,
  publisher: siteConfig.username,
  generator: "Next.js",
  keywords: [
    "gonastorga",
    "gonzaloastorga",
    "gonzaloastorgasanchez",
    "gastorga",
    "Gonzalo Astorga",
    "Gonzalo Astorga Sánchez",
    "Gonwi",
    "gon",
    "gonzo",
    "gonastorga.com",
  ],
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  icons: {
    icon: "/avatar.jpg",
  },
  appleWebApp: {
    title: "gonastorga.com",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  title: {
    default: "Gonzalo Astorga",
    template: "%s | Gonzalo Astorga",
  },
  description:
    "Data engineer that went down the frontend rabbit hole.",
  openGraph: {
    url: siteConfig.url,
    title: "Gonzalo Astorga",
    description:
      "Data engineer that went down the frontend rabbit hole.",
    images: [
      {
        url: "https://og.sznm.dev/api/generate?heading=gonastorga&text=https://gonastorga.com", // to be replaced with own generator
        alt: "gonastorga.com og-image",
      },
    ],
    siteName: "gonastorga",
  },
  twitter: {
    creator: "@gonastorga",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} `}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navigation />
            <div className="flex flex-col min-h-screen justify-between space-y-4 container">
              {children}
              <Footer />
              <Toaster />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
