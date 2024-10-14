import { i18n } from "@/i18n/translations";
import type { ResolvingMetadata, Metadata } from "next";
import type { PageParamsI18n } from "@/types/i18n";
import Layout from "@/layouts/Layout";
import { PageProps } from "@/types/page";

export async function generateMetadata(
  { params: { lang } }: PageParamsI18n,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: `${i18n[lang]("HOME_PAGE")} - ${(await parent).title?.absolute}`,
  };
}

export default function Page({ params }: PageParamsI18n) {
  return (
    <>
      <h1>Dashboard</h1>
      <p>Ici vous retrouverez un récapitualif de vos prestations en attente.</p>
    </>
  );
}
