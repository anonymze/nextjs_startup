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
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

export const middleware = (req: NextRequest) => {
  // pathname looks like this "/xxx"
  const { pathname, origin } = req.nextUrl;

  // we verify the url contains a language we handle
  const pathnameHasLocale = languages.some((lang) => {
    return (
      pathname.startsWith(`/${lang}/`) ||
      (pathname.startsWith(`/${lang}`) && pathname.length === 3)
    );
  });

  // if not we redirect but with the locale in the pathname
  if (!pathnameHasLocale) {
    const preferedLocale = getPreferedLocale(req.headers, languages);
    req.nextUrl.pathname = `/${preferedLocale}${pathname}`;
    return NextResponse.redirect(req.nextUrl);
  }
};
/**
 * @description - get the prefered locale from the headers
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

  return negotiator.language(localesAccepted) ?? defaultLocale;
}
