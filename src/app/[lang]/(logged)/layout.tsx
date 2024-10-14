import Layout from "@/layouts/Layout";
import type { PageProps } from "@/types/page";
import { type Metadata } from "next";

export default function LoggedLayout({ children, params }: PageProps) {
  return <Layout  params={params}>{children}</Layout>;
}
