import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Ironweb-Research ~ Future is Secure',
  description: 'Our Startup aims to integrate blockchain technology to secure networking systems.',
  openGraph: {
    title: 'Ironweb-Research ~ Future is Secure',
    description: 'Our Startup aims to integrate blockchain technology to secure networking systems.',
    images: [HOME_OG_IMAGE_URL],
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
          href="/assets/logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x35"
          href="/assets/logo/ironweb_icon_32x35.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x17"
          href="/assets/logo/ironweb_icon_16x17.png"
        />
        <link rel="manifest" href="/assets/logo/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/logo/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/assets/logo/ironweb_icon_32x35.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/assets/logo/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
