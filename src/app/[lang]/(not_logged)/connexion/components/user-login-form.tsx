"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { i18n } from "@/i18n/translations";
import { cn } from "@/utils/lib/tailwind";
import { LoaderIcon } from "lucide-react";
import type { PageParamsI18n } from "@/types/i18n";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  lang: PageParamsI18n["params"]["lang"];
}

export function UserLoginForm({ lang, className, ...props }: Props) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              {i18n[lang]("EMAIL")}
            </Label>
            <Input
              id="email"
              placeholder={i18n[lang]("EMAIL")}
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              {i18n[lang]("PASSWORD")}
            </Label>
            <Input
              id="email"
              placeholder={i18n[lang]("PASSWORD")}
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />}
            {i18n[lang]("CONNECTION")}
          </Button>
        </div>
      </form>
    </div>
  );
}
