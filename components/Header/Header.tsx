// Custom components
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { ToggleThemeButton } from "../ToggleThemeButton/ToggleThemeButton";

// shadcn/ui components
import { Button } from "../ui/button";

// Next imports
import Link from "next/link";

// Icons
import { ComputerIcon, MessageSquare } from "lucide-react";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <header className="flex gap-9 items-center py-10">
        <Link href="/">
          <h2 className="text-2xl font-bold">DN.</h2>
        </Link>
        <div className="flex items-center gap-6 md:hidden">
          <ToggleThemeButton />
          <MobileMenu />
        </div>
        <nav className="hidden md:block">
          <ul className="flex flex-col gap-6 w-screen items-center md:w-full md:flex-row md:min-h-0 border rounded-full px-12 py-2">
            <li className="hover:opacity-70 duration-100 ease-out transition-opacity">
              <Link
                href="/all-articles"
                className="cursor-default flex items-center gap-3"
              >
                <Button variant="ghost" className="flex gap-1 cursor-default">
                  <MessageSquare size=".75rem" />
                  Articles
                </Button>
              </Link>
            </li>
            <li className="hover:opacity-70 duration-100 ease-out transition-opacity">
              <Link
                href="/integrants"
                className="cursor-default flex items-center gap-1"
              >
                <Button variant="ghost" className="flex gap-2 cursor-default">
                  <ComputerIcon size=".75rem" />
                  Developers
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hidden md:block">
        <ToggleThemeButton />
      </div>
    </div>
  );
}
