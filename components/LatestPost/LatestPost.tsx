"use client";

// Custom components
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { Spinner } from "../Spinner/Spinner";

// Get articles
import { useArticles } from "@/utils/getArticles";

export function LatestPost() {
  const { articles, isError, isLoading } = useArticles();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <section className="grid grid-cols-1 gap-7">
      {articles.map((article: any) => (
        <div key={article._id}>
          <ArticleCard
            publishedAt={article.publishedAt}
            slug={article.slug}
            title={article.title}
            // description={article.description}
            author={article.author}
            author_image={article.author_image}
          />
        </div>
      ))}
    </section>
  );
}
