import "@/styles/globals.css";
import { Inter } from "next/font/google";
import cn from "classnames";
import type { Metadata } from "next";
import type { Viewport } from 'next'

import AlertBar from "@/app/_components/main_frame/alert-bar";
import { LanguageProvider } from "@/app/_components/language_handler/language-provider";
import { ToggleFrameProvider } from "@/app/_components/preference/toggle-frame-provider";
import Navigationbar from "@/app/_components/main_frame/navi-bar";
import { NavigationProvider } from "@/app/_components/main_frame/navigation-context";
import { FontSizeProvider } from "@/app/_components/main_frame/font-size-ctrl";
import SubpageHeader from "@/app/_components/main_frame/subpage-header";
import Footer from "@/app/_components/main_frame/footer";
import { T_ANI_GIF_URL } from "@/lib/share/constants";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: 'black',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://tkokhing.github.io/'),
  title: 'tkokhing',
  description: 'This is my blog.',
  openGraph: {
    title: 'tkokhing',
    description: 'This is my blog',
    images: [T_ANI_GIF_URL],
  },
  icons: {
    icon: [
      { url: "/img/logo/favicon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/logo/favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/logo/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/img/logo/apple-touch-icon.png",
    shortcut: "/img/logo/favicon.ico",
  },
  manifest: "/img/logo/site.webmanifest",
  other: {
    "msapplication-TileColor": "black",
    "msapplication-config": "/img/logo/browserconfig.xml",
    "mask-icon": "/img/logo/safari-pinned-tab.svg",
    "alternate": "/feed.xml",
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(inter.className, "bg-slate-50 text-sky-700 dark:bg-slate-900 dark:text-slate-300")}
      >
        <LanguageProvider>
        <ToggleFrameProvider>  
        <NavigationProvider>
        <FontSizeProvider >
        <AlertBar />
        <Navigationbar />
        <SubpageHeader />
        <div className="min-h-screen">{children}</div>
        <Footer />
        </FontSizeProvider>
        </NavigationProvider>
        </ToggleFrameProvider>
        </LanguageProvider>

      </body>
    </html>
  );
}
