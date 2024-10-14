import "@/styles/app.css";
import { GeistSans } from "geist/font/sans";

import type { PageProps } from "@/types/page";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Replay Expert Music",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children, params }: PageProps) {
  return (
    <html lang={params.lang} className={`${GeistSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
