import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        alt="Logo"
        width="40"
        height="40"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="Logo"
        width="40"
        height="40"
        className="hidden dark:block"
      />
      <p className={cn("semi-bold", font.className)}>Jotion</p>
    </div>
  );
};
