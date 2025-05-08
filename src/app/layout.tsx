import "@/styles/globals.css";
import { Inter } from "next/font/google";
import cn from "classnames";
import type { Metadata } from "next";
import type { Viewport } from 'next'

import AlertBar from "@/app/_components/main_frame/alert-bar";
import Navigationbar from "@/app/_components/main_frame/navi_bar";
import { NavigationProvider } from "./_components/main_frame/NavigationContext";
import SubpageHeader from "@/app/_components/main_frame/subpage-header";
import Footer from "@/app/_components/main_frame/footer";
import { ThemeSwitcher } from "@/app/_components/main_frame/theme-switcher";
import { T_ANI_GIF_URL } from "@/lib/constants";

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
    <html lang="en">
      <body
        className={cn(inter.className, "bg-slate-50 text-sky-700 dark:bg-slate-900 dark:text-slate-300")}
      >
        <AlertBar />
        <NavigationProvider>
          <Navigationbar />
          <ThemeSwitcher />
          <SubpageHeader />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
