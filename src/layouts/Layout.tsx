"use client"

import { LangContext } from "@/contexts/LangContext";
import Header from "./Header";
import type { PageProps } from "@/types/page";

export default function Layout({children, params, hideAccount = false}: PageProps & { hideAccount?: boolean}) {
  return (
    <LangContext.Provider value={params.lang}>
      <Header hideAccount={hideAccount} />
      <main className="p-8 md:p-12">{children}</main>
    </LangContext.Provider>
  );
}
