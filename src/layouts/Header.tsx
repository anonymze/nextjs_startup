import LinkLocale from "@/components/LinkLocale";
import Logo from "@/components/Logo";
import { LangContext } from "@/contexts/LangContext";
import { UserRoundIcon } from "lucide-react";
import { useContext } from "react";

interface Props {
  hideAccount?: boolean;
}

export default function Header({ hideAccount = false }: Props) {
  const lang = useContext(LangContext);
  return (
    <header className="flex h-20 w-full items-center justify-between bg-foreground px-6">
      <div className="h-fit text-background">
        <LinkLocale pathname="/" lang={lang}>
          <Logo />
        </LinkLocale>
      </div>

      <div className="text-background">
        <LinkLocale
          pathname="/compte"
          lang={lang}
          className="flex items-center gap-2 align-middle"
        >
          Mon compte
          <UserRoundIcon />
        </LinkLocale>
      </div>
    </header>
  );
}
