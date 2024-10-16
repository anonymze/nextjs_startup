import { i18n } from "@/i18n/translations";
import LinkLocale from "@/components/LinkLocale";
import { UserLoginForm } from "./components/user-login-form";
import Logo from "@/components/Logo";
import type { PageParamsI18n } from "@/types/i18n";
import type { PageProps } from "@/types/page";
import type { ResolvingMetadata, Metadata } from "next";

export async function generateMetadata(
  { params: { lang } }: PageParamsI18n,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: `${i18n[lang]("AUTHENTICATION")} - ${(await parent).title?.absolute}`,
  };
}

export default function Page({ params: { lang } }: PageProps) {
  return (
    <div className="relative grid h-dvh place-items-center lg:grid-cols-2">
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Logo />
        </div>
      </div>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <video className="absolute inset-0 w-full h-full object-cover" playsInline  autoPlay muted loop>
          <source src="/restauration.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2" style={{ textShadow: "1px 1px 18px #000"}}>
            <p className="text-lg text-white" >
              &ldquo;{i18n[lang]("WELCOME_TO_YOUR_WORLD")}&rdquo;
            </p>
            <footer className="flex items-center text-sm">
              <Logo showIcon={false} />
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full max-w-[420px] flex-col justify-center space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1>{i18n[lang]("PORTAL_CONNECTION")}</h1>
            <p className="text-sm text-muted-foreground">
              {i18n[lang]("ENTER_EMAIL_PASSWORD")}
            </p>
          </div>
          <UserLoginForm lang={lang} />

          <div className="text-center text-sm">
            Vous n&apos;avez pas de compte ?{" "}
            <LinkLocale
              className="text-center text-sm underline underline-offset-4"
              pathname="/inscription"
              lang={lang}
            >
              {i18n[lang]("REGISTER")}
            </LinkLocale>
          </div>

          <p className="px-8 text-center text-xs text-muted-foreground">
            {i18n[lang]("BY_CLICKING_CONTINUE_YOU_AGREE")}{" "}
            <LinkLocale
              className="underline underline-offset-4"
              pathname="/conditions-utilisation"
              lang={lang}
            >
              {i18n[lang]("TERMS_CONDITIONS")}
            </LinkLocale>{" "}
            {i18n[lang]("AND")}{" "}
            <LinkLocale
              className="underline underline-offset-4"
              pathname="/politique-confidentialite"
              lang={lang}
            >
              {i18n[lang]("PRIVACY_POLICY")}
            </LinkLocale>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
