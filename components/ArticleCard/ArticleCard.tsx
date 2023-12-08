// Shadcn/ui components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Next imports
import Link from "next/link";

// Types
import { Badge } from "../ui/badge";
import { PostCardTypes } from "./Article.types";

export function ArticleCard({
  author,
  author_image,
  description,
  title,
  publishedAt,
  slug,
}: PostCardTypes) {
  const originalDate = new Date(publishedAt);
  const formattedDate = originalDate.toLocaleDateString();

  return (
    <Link href={`/article/${slug?.current}`} className="cursor-default">
      <Card
        className="p-6 pt-8 flex flex-col gap-5 hover:opacity-70 hover:scale-105 
        border-purple-600 border-[.0625rem] transition-[scale, opacity] duration-100"
      >
        <CardHeader className="flex flex-row items-center">
          <p className="text-xs">{formattedDate}</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <CardTitle>{title}</CardTitle>
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
