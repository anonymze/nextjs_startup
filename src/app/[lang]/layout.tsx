import "@/styles/app.css";
import { GeistSans } from "geist/font/sans";

import type { PageParamsI18n } from "@/types/i18n";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Replay Expert Music",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{ children: React.ReactNode } & PageParamsI18n>) {
  return (
    <html lang={lang} className={`${GeistSans.variable} dark`}>
      <body>{children}</body>
    </html>
  );
}
