import { ChangeEvent } from "react";

// Next imports
import Link from "next/link";

// Shadcn/ui imports
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// Icons
import { ArrowLeftIcon, Search } from "lucide-react";

export function ArticleHeader({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <header className="py-10 flex justify-between items-center">
      <div>
        <Link href="/">
          <Button
            variant="ghost"
            className="flex items-center gap-3 hover:bg-pink-900 hover:text-black"
          >
            <ArrowLeftIcon />
            <p className="hidden md:block">Back</p>
          </Button>
        </Link>
      </div>
      <div></div>
      <div className="flex items-center gap-4">
        <Search className="hidden md:block" />
        <Input
          placeholder="Search"
          type="search"
          className="w-56 outline-none"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
}
