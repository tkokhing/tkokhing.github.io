

import Alert from "@/app/_components/main_frame/alert";
import Navigationbar from "@/app/_components/main_frame/navi_bar"
import { NavigationProvider } from "./_components/main_frame/NavigationContext";
import Footer from "@/app/_components/main_frame/footer";
import { TKOKHING_ICON_ANI_GIF_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "@/app/_components/main_frame/theme-switcher";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'tkokhing',
  description: 'This is my blog.',
  openGraph: {
    title: 'tkokhing',
    description: 'This is my blog',
    images: [TKOKHING_ICON_ANI_GIF_URL],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/logo/favicon_32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/logo/favicon_16x16.png"
        />
        <link rel="manifest" href="/img/logo/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/logo/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="icon" href="/img/logo/favicon.ico" type="image/x-icon"/>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/img/logo/browserconfig.xml"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "bg-slate-50	text-sky-700 dark:bg-slate-900 dark:text-slate-300")}
      >
        <Alert />
        <NavigationProvider>
          <Navigationbar />
          <ThemeSwitcher />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
