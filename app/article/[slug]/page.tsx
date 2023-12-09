"use client";

import { Spinner } from "@/components/Spinner/Spinner";
import { useArticlesSlug } from "@/utils/getArticleSlug";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default function ArticlePage({ params }: Props) {
  const slug = params.slug;
  const { article, isError, isLoading } = useArticlesSlug(slug);

  if (isLoading) {
    return (
      <Spinner className="flex justify-center items-center min-h-screen" />
    );
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div key={article._id}>
      <p>{article.title}</p>
      <PortableText value={article.body} />
    </div>
  );
}
