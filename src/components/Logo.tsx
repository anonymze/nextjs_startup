import { MusicIcon } from "lucide-react";
import React from "react";

type Props = {
  showIcon?: boolean;
};

function Logo({ showIcon = true }: Props) {
  return (
    <div className="flex items-center">
      {showIcon && <MusicIcon className="mr-2" />}
      Relay Expert Music
    </div>
  );
}

export default Logo;
