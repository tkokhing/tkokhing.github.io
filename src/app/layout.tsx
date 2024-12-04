import Alert from "@/app/_components/alert";
import Footer from "@/app/_components/footer";
import { Navbar } from "./_components/nav-bar";
import { TKOKHING_ICON_ANI_GIF_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
          sizes="180x200"
          href="/img/logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x35"
          href="/img/logo/tkokhing_icon_32x35.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x17"
          href="/img/logo/tkokhing_icon_16x17.png"
        />
        <link rel="manifest" href="/img/logo/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/logo/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/img/logo/tkokhing_icon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/img/logo/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <Alert/>
        {/* <Navbar/> */}
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
