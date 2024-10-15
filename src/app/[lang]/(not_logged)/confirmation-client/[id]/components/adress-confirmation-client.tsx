"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function AdressConfirmationClient() {
  const order = {
    items: [
      { name: "Guitar Strings", price: 15.99, quantity: 2 },
      { name: "Metronome", price: 29.99, quantity: 1 },
    ],
    shippingAddress: "123 Music St, Harmony City, HC 12345",
  };

  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleOrderAccept = () => {
    alert("TODO");
  };

  const handleOrderDeny = () => {
    alert("TODO");
  };

  return (
    <div className="rounded-sm bg-primary p-6 text-white sm:p-12">
      <div className="mx-auto">
        <h1 className="mb-8 text-3xl font-bold">BlablablaBlaBla</h1>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Détails de votre commande
          </h2>
          <div className="space-y-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>{(item.price * item.quantity).toFixed(2)} €</span>
              </div>
            ))}
          </div>
          <Separator className="my-4 bg-white/20" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>{total.toFixed(2)} €</span>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Adresse de livraison de l'expert
          </h2>

          <div className="space-y-4">
            <div
              id="address"
              className="w-full rounded-sm border-white/20 bg-white/10 p-3 text-white"
            >
              123 Music St, Harmony City, HC 12345
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-white/20" />

        <section className="flex justify-between">
          <Button
            onClick={handleOrderDeny}
            className="border-white text-white hover:bg-white/10"
          >
            Refuser l'expédition
          </Button>
          <Button
            onClick={handleOrderAccept}
            className="bg-white text-primary hover:bg-white/90"
          >
            Accepter l'expédition
          </Button>
        </section>
      </div>
    </div>
  );
}
