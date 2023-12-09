// Custom components
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { ToggleThemeButton } from "../ToggleThemeButton/ToggleThemeButton";

// shadcn/ui components
import { Button } from "../ui/button";

// Next imports
import Link from "next/link";

// Icons
import { FileText, HomeIcon, MessageSquare } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex gap-9 items-center py-10">
        <Link href="/">
          <h2 className="text-2xl font-bold">DN.</h2>
        </Link>
        <div className="flex items-center gap-6 md:hidden">
          <ToggleThemeButton />
          <MobileMenu />
        </div>
        <nav className="hidden md:block">
          <ul className="flex flex-col gap-6 w-screen items-center md:w-full md:flex-row md:min-h-0 border rounded-full px-12 py-2">
            <li>
              <Link href="/" className="cursor-default flex items-center gap-1">
                <Button
                  variant="ghost"
                  className="flex gap-2 hover:bg-cyan-600 hover:text-white"
                >
                  <HomeIcon size=".75rem" />
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="cursor-default flex items-center gap-1"
              >
                <Button
                  variant="ghost"
                  className="flex gap-2 hover:bg-fuchsia-900 hover:text-white "
                >
                  <MessageSquare size=".75rem" />
                  Posts
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href="/all-articles"
                className="cursor-default flex items-center gap-3"
              >
                <Button
                  variant="ghost"
                  className="flex gap-1 hover:bg-violet-900 hover:text-white"
                >
                  <FileText size=".75rem" />
                  Articles
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden md:block">
        <ToggleThemeButton />
      </div>
    </header>
  );
}
