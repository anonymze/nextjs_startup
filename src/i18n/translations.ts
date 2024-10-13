import { ObjectKeysTyped, sprintf } from "@/utils/helper";
import langs from "./langs";
import type { I18n } from "@/types/i18n";

export const i18n: Record<
  I18n,
  (str: keyof (typeof langs)[I18n], ...args: string[]) => string
> = {
  en: (str, ...args) => sprintf(langs.en[str], ...args),
  fr: (str, ...args) => sprintf(langs.fr[str], ...args),
};

export const languages = ObjectKeysTyped(i18n);
