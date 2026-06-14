import "@/styles/globals.css";
import { Inter } from "next/font/google";
import cn from "classnames";
import type { Metadata, Viewport } from "next";

import AlertBar from "@/app/_components/main_frame/alert-bar";
import { LanguageProvider } from "@/app/_components/language_handler/language-provider";
import { ToggleFrameProvider } from "@/app/_components/preference/toggle-frame-provider";
import Navigationbar from "@/app/_components/main_frame/navi-bar";
import { NavigationProvider } from "@/app/_components/main_frame/navigation-context";
import { FontSizeProvider } from "@/app/_components/main_frame/font-size-ctrl";
import SubpageHeader from "@/app/_components/main_frame/subpage-header";
import Footer from "@/app/_components/main_frame/footer";
import { T_ANI_GIF_URL } from "@/lib/share/constants";
import { ThemeSwitcherScript } from "@/app/_components/main_frame/theme-switcher";

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
      <body className={cn(inter.className, "antialiased")}>
        {/* Background System */}
        <div className="fixed inset-0 -z-10 overflow-hidden">

          {/* Base Gradient */}
          <div
            className={cn(
              "absolute inset-0",
              "bg-slate-50",
              "dark:bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))]",
              "dark:from-teal-950 dark:via-zinc-950 dark:to-black"
            )}
          />
          {/* Glow Top Right */}
          {/* <div className="absolute right-[-10rem] top-[-10rem] h-[35rem] w-[35rem] rounded-full bg-lime-400/20 blur-[140px]" /> */}

          {/* Glow Bottom Left */}
          <div className="absolute bottom-[-10rem] left-[-10rem] h-[35rem] w-[35rem] rounded-full bg-yellow-300/20 blur-[160px]" />

          {/* Ambient Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-green-900/10" />

          {/* Noise */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-soft-light">
            <svg className="h-full w-full">
              <filter id="noise">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.65"
                  numOctaves="3"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
          </div>

          {/* Plexus Layer */}
          <div className="plexus-bg absolute inset-0 opacity-40 dark:opacity-70" />

          {/* Subtle Noise Texture */}
          <div className="noise-bg absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" />
        </div>

        {/* 2. The Scrolling Content Layer */}
        <div className="relative z-10 text-sky-700 dark:text-slate-300">
          <ThemeSwitcherScript />
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

        </div>
      </body>
    </html>
  );
}
