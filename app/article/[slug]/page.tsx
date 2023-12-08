import { useArticlesSlug } from "@/utils/getArticleSlug";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function ArticlePage({ params }: Props) {
  const slug = params.slug;
  const article = await useArticlesSlug(slug);

  console.log(article);

  return (
    <div key={article._id}>
      <p>{article.title}</p>
      <PortableText value={article.body} />
    </div>
  );
}
