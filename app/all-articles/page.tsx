"use client";

import { useState } from "react";

// Custom components
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { ArticleHeader } from "@/components/ArticleHeader/ArticleHeader";
import { Spinner } from "@/components/Spinner/Spinner";

// Get posts
import { useArticles } from "@/utils/getArticles";

export default function AllArticlesPage() {
  const { articles, isError, isLoading } = useArticles();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return (
      <Spinner className="flex justify-center items-center min-h-screen" />
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
            <ArticleCard title={article.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
