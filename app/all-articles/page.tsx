"use client";

import { useState } from "react";

// Custom components
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { SearchInput } from "@/components/SearchInput/SearchInput";

// Get posts
import { SkeletonArticleCard } from "@/components/SkeletonArticleCard/SkeletonArticleCard";
import { useArticles } from "@/utils/getArticles";

// Types
import { ArticleTypes } from "@/types/article.types";

export default function AllArticlesPage() {
  const { articles, isError, isLoading } = useArticles();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        <SearchInput onSearch={setSearchTerm} />
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
      <div className="flex items-center gap-4">
        <SearchInput onSearch={setSearchTerm} />
      </div>
      <div className="grid grid-cols-1 gap-7 py-4">
        {filteredPosts.map((article: ArticleTypes) => (
          <div key={article._id}>
            <ArticleCard
              title={article.title}
              publishedAt={article.publishedAt}
              description={article.description}
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
