import Layout from "@/layouts/Layout";
import React from "react";
import type { PageProps } from "@/types/page";
import AdressConfirmationClient from "./components/adress-confirmation-client";

export default function Page({ params }: PageProps) {
  return (
    <Layout params={params}>
      <h1 className="mb-4">Confirmation adresse de livraison EXPERT</h1>
      <p className="mb-12">
        Voici les informations de livraison à laquelle votre produit va être
        expertisé. Veuillez confirmer que l'adresse d'expédition  vous
        convient afin de vous envoyer le bon de livraison.
      </p>

      <AdressConfirmationClient />
    </Layout>
  );
}
