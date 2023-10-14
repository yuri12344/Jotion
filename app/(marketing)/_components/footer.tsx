import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full bg-background p-6 bg-back z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="flex w-full justify-between md:justify-end text-muted-foreground gap-x-2">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
