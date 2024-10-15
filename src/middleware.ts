import { languages } from "./i18n/translations";
import Negotiator from "negotiator";
import { I18n } from "./types/i18n";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico|restauration.*|api).*)",
  ],
};

export const middleware = (req: NextRequest) => {
  const preferedLocale = getPreferedLocale(req.headers, languages);

  const { pathnameWithoutLocale, pathnameHasLocale, pathnameWithLocale } =
    getInfosPathname(req.nextUrl.pathname, preferedLocale);

  if (!pathnameHasLocale) {
    req.nextUrl.pathname = pathnameWithLocale;
    return NextResponse.redirect(req.nextUrl);
  }
};

/**
 * @returns the prefered locale from the headers
 */
export function getPreferedLocale(
  headers: Headers,
  localesAccepted: string[],
  defaultLocale: I18n = I18n.DEFAULT,
) {
  const negotiator = new Negotiator({
    headers: {
      "accept-language": headers.get("accept-language") ?? "",
    },
  });

  // TODO handle languages
  return "fr";
  return negotiator.language(localesAccepted) ?? defaultLocale;
}

/**
 * @returns informations about the pathname
 */
function getInfosPathname(
  pathname: NextRequest["nextUrl"]["pathname"],
  preferedLocale: string,
) {
  let pathnameWithoutLocale = pathname;

  // we verify the url contains a language we handle
  const pathnameHasLocale = languages.some((lang) => {
    if (
      pathname.startsWith(`/${lang}/`) ||
      (pathname.startsWith(`/${lang}`) && pathname.length === lang.length + 1)
    ) {
      // if we found a langage we update the variable pathnameWithoutLocale
      pathnameWithoutLocale = pathname.slice(lang.length + 1);
      return true;
    }

    return false;
  });

  return {
    locale: preferedLocale,
    pathnameHasLocale,
    pathnameWithoutLocale,
    pathnameWithLocale: !pathnameHasLocale
      ? `/${preferedLocale}${pathname}`
      : pathname,
  };
}
