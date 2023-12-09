import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";

// Icon
import { LogOut } from "lucide-react";

// Next imports
import Link from "next/link";

// Types
import { ArticleCardTypes } from "./Article.types";

export function ArticleCard({
  author,
  author_image,
  description,
  title,
  publishedAt,
  slug,
}: ArticleCardTypes) {
  const originalDate = new Date(publishedAt);
  const formattedDate = originalDate.toLocaleDateString();

  return (
    <Link href={`/article/${slug?.current}`} className="cursor-default">
      <Card className="p-6 pt-8 flex flex-col gap-5 group hover:-translate-y-2 hover:border-purple-600 border-[.0625rem] transition-[border, translate] duration-100">
        <CardHeader className="flex flex-row justify-between items-center relative">
          <p className="text-xs">{formattedDate}</p>
          <LogOut className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <CardTitle className="group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-fuchsia-700 group-hover:to-violet-400 group-hover:inline-block group-hover:text-transparent group-hover:bg-clip-text">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>

        <CardFooter className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={author_image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-xs">{author}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>Frontend</Badge>
            <Badge>Coding</Badge>
            <Badge>Web Development</Badge>
            <Badge>Programming</Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
