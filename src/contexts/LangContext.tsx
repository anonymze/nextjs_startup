import { I18n } from "@/types/i18n";
import { createContext } from "react";

export const LangContext = createContext<I18n>(I18n.DEFAULT);