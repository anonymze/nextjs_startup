import type { PageParamsI18n } from "./i18n";

export type PageProps = Readonly<
  { children: React.ReactNode } & PageParamsI18n
>;
