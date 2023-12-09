// Next components
import Link from "next/link";

// Shadcn/ui components
import { Button } from "@/components/ui/button";

// Icons
import { ArrowLeftIcon } from "lucide-react";

export function BackButton() {
  return (
    <Link href="/">
      <Button
        variant="ghost"
        className="flex items-center gap-3 hover:bg-pink-900 hover:text-black"
      >
        <ArrowLeftIcon />
        <p className="hidden md:block">Back</p>
      </Button>
    </Link>
  );
}
