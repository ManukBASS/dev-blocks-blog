import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";

export async function useArticlesSlug(slug: string) {
  const data = await client.fetch(
    groq`*[_type=="article" && slug.current== $slug ][0]{
        ...,
        "mainImage":mainImage.asset->url,
        author->,
        categories[]->
    }`,
    { slug }
  );

  return data;
}
