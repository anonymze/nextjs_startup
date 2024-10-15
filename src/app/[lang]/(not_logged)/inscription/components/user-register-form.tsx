"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import LinkLocale from "@/components/LinkLocale";
import React, { useContext } from "react";
import { LangContext } from "@/contexts/LangContext";
import { Separator } from "@/components/ui/separator";
import { LoaderIcon } from "lucide-react";

const formSchema = z.object({
  // PERSO
  firstname: z.string().min(2, {
    message: "Le prénom doit au moins faire 2 caracètres",
  }),
  lastname: z.string().min(2, {
    message: "Le nom doit au moins faire 2 caractères",
  }),
  email: z.string().email({
    message: "L'email doit être valide",
  }),
  password: z.string().min(6, {
    message: "Le mot de passe doit au moins faire 6 caractères",
  }),
  confirmPassword: z.string().min(2, {
    message: "Le mot de passe doit au moins faire 8 caractères",
  }),
  // JOB
  types: z.string(),
  categories: z.string(),
  subCategories: z.string(),
  // BANK ACCOUNT
  iban: z
    .string()
    .trim()
    .min(26, { message: "L'IBAN doit faire au moins 26 caractères" })
    .max(34, { message: "L'IBAN doit faire au maximum 34 caractères" }),
  bic: z
    .string()
    .trim()
    .min(8, { message: "Le BIC doit faire au minimum 8 caractères" })
    .max(11, { message: "Le BIC doit faire au maximum 11 caractères" }),
});

export default function UserRegisterForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const lang = useContext(LangContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   // PERSONAL
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    //   // JOB
    //   types: "",
    //   categories: "",
    //   subCategories: "",
    //   // BANK ACCOUNT
    //   iban: "",
    //   bic: "",
    // },
    defaultValues: {
      // PERSONAL
      firstname: "Yann",
      lastname: "Metier",
      email: "metier.yann@gmail.com",
      password: "123456",
      confirmPassword: "123456",
      // JOB
      types: "",
      categories: "",
      subCategories: "",
      // BANK ACCOUNT
      iban: "FR761780700010353197837220",
      bic: "CNEPFR22",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsLoading(true);

    if (values.password !== values.confirmPassword) {
      form.setError("confirmPassword", {
        message: "Les mots de passe ne sont pas identiques",
      });
      setIsLoading(false);
      return;
    }
  };

  return (
    <>
      <div className="flex w-full items-center justify-center bg-white">
        <div className="w-full max-w-2xl space-y-8 px-4 sm:px-6">
          <p className="text-sm text-primary">* Champs obligatoires</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex items-center gap-5 pb-3 font-semibold uppercase">
                <Separator className="hidden max-w-12 flex-1 sm:flex" />
                <h2 className="whitespace-nowrap text-xl">
                  Informations personnelles{" "}
                </h2>
                <Separator className="hidden flex-1 sm:flex" />
              </div>
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="w-full space-y-2">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Prénom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="w-full space-y-2">
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom * </FormLabel>
                        <FormControl>
                          <Input placeholder="Nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe *</FormLabel>
                      <FormControl>
                        <Input placeholder="Mot de passe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmation du mot de passe *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Confirmation du mot de passe"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center gap-5 pb-3 pt-6 font-semibold uppercase">
                <Separator className="hidden max-w-12 flex-1 sm:flex" />
                <h2 className="whitespace-nowrap text-xl">Coeur métier </h2>
                <Separator className="hidden flex-1 sm:flex" />
              </div>

              <p className="text-md text-muted-foreground">
                Choisissez les instruments sur lesquelles vous pouvez apporter
                votre expertise.
              </p>

              <fieldset>
                <legend className="mb-3 text-sm">
                  - Type d&apos;instruments *
                </legend>

                <div className="flex items-center gap-3">
                  <FormField
                    control={form.control}
                    name="types"
                    render={({ field }) => (
                      <FormItem className="flex w-fit items-center gap-2 rounded-full border p-3">
                        <FormLabel>Musiques</FormLabel>
                        <FormControl>
                          <Input
                            className="sr-only"
                            type="checkbox"
                            placeholder="Confirmation du mot de passe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="types"
                    render={({ field }) => (
                      <FormItem className="flex w-fit items-center gap-2 rounded-full border p-3">
                        <FormLabel>Musiques</FormLabel>
                        <FormControl>
                          <Input
                            className="sr-only"
                            type="checkbox"
                            placeholder="Confirmation du mot de passe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-3 text-sm">
                  - Catégories des instruments *
                </legend>

                <div className="flex items-center gap-3">
                  <FormField
                    control={form.control}
                    name="types"
                    render={({ field }) => (
                      <FormItem className="flex w-fit items-center gap-2 rounded-full border p-3 cursor-pointer">
                        <FormLabel className="cursor-pointer">Musiques</FormLabel>
                        <FormControl>
                          <Input
                            className="sr-only"
                            type="checkbox"
                            placeholder="Confirmation du mot de passe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="types"
                    render={({ field }) => (
                      <FormItem className="flex w-fit items-center gap-2 rounded-full border p-3">
                        <FormLabel>Musiques</FormLabel>
                        <FormControl>
                          <Input
                            className="sr-only"
                            type="checkbox"
                            placeholder="Confirmation du mot de passe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-3 text-sm">
                  - Sous catégories des instruments *
                </legend>

                <div className="flex items-center gap-3">
                  <FormField
                    control={form.control}
                    name="types"
                    render={({ field }) => (
                      <FormItem className="flex w-fit items-center gap-2 rounded-full border p-3">
                        <FormLabel>Musiques</FormLabel>
                        <FormControl>
                          <Input
                            className="sr-only"
                            type="checkbox"
                            placeholder="Confirmation du mot de passe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="types"
                    render={({ field }) => (
                      <FormItem className="flex w-fit items-center gap-2 rounded-full border p-3">
                        <FormLabel>Musiques</FormLabel>
                        <FormControl>
                          <Input
                            className="sr-only"
                            type="checkbox"
                            placeholder="Confirmation du mot de passe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </fieldset>

              <p className="text-base text-muted-foreground">Renseignez vos disponiblités.</p>

              <div className="flex items-center gap-5 pb-3 pt-6 font-semibold uppercase">
                <Separator className="hidden max-w-12 flex-1 sm:flex" />
                <h2 className="whitespace-nowrap text-xl">Informations bancaires </h2>
                <Separator className="hidden flex-1 sm:flex" />
              </div>

              <p className="text-base text-muted-foreground">
                Ces informations serviront aux paiements de vos prestations.
              </p>

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="iban"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>IBAN *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="International Bank Account Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="bic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>BIC *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Bank Identification Code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button className="w-full" disabled={isLoading}>
                {isLoading && (
                  <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Inscription
              </Button>
            </form>
          </Form>
          <div className="text-center text-sm">
            Vous avez déjà un compte ?{" "}
            <LinkLocale className="underline" pathname="/connexion" lang={lang}>
              Se connecter
            </LinkLocale>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            En continuant vous acceptez les{" "}
            <LinkLocale
              className="underline"
              pathname="/conditions-utilisation"
              lang={lang}
            >
              Conditions d&apos;utilisation
            </LinkLocale>{" "}
            et{" "}
            <LinkLocale
              className="underline"
              pathname="/politique-confidentialite"
              lang={lang}
            >
              Politique de confidendialité
            </LinkLocale>
            .
          </div>
        </div>
      </div>
    </>
  );
}