"use client";

import { useState } from "react";

// Custom components
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { ArticleHeader } from "@/components/ArticleHeader/ArticleHeader";

// Get posts
import { SkeletonArticleCard } from "@/components/SkeletonArticleCard/SkeletonArticleCard";
import { useArticles } from "@/utils/getArticles";

export default function AllArticlesPage() {
  const { articles, isError, isLoading } = useArticles();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        <ArticleHeader onSearch={setSearchTerm} />
        <section className="grid grid-cols-1 gap-7">
          <SkeletonArticleCard />
          <SkeletonArticleCard />
          <SkeletonArticleCard />
        </section>
      </div>
    );
  }

  if (isError) {
    return <p>Error loading data</p>;
  }
  const filteredPosts = articles.filter((article: any) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ArticleHeader onSearch={setSearchTerm} />
      <div className="grid grid-cols-1 gap-7 py-4">
        {filteredPosts.map((article: any, index: number) => (
          <div key={index}>
            <ArticleCard
              title={article.title}
              publishedAt={article.publishedAt}
              author={article.author}
              author_image={article.author_image}
              slug={article.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
