"use client";

// Custom components
import { ArticleCard } from "../ArticleCard/ArticleCard";

// Get articles
import { useArticles } from "@/utils/getArticles";
import { SkeletonArticleCard } from "../SkeletonArticleCard/SkeletonArticleCard";

// Types
import { ArticleTypes } from "@/types/article.types";

export function LatestPost() {
  const { articles, isError, isLoading } = useArticles();

  if (isLoading) {
    return (
      <section className="grid grid-cols-1 gap-7">
        <SkeletonArticleCard />
        <SkeletonArticleCard />
        <SkeletonArticleCard />
      </section>
    );
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <section className="grid grid-cols-1 gap-7">
      {articles.map((article: ArticleTypes) => (
        <div key={article._id}>
          <ArticleCard
            publishedAt={article.publishedAt}
            slug={article.slug}
            title={article.title}
            description={article.description}
            author={article.author}
            author_image={article.author_image}
          />
        </div>
      ))}
    </section>
  );
}
