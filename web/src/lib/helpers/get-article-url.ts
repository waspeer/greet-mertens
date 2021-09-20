import { format } from "date-fns";
import { ArticleData } from "../types";

type Arguments = Pick<ArticleData, "publishedAt" | "slug">;

export function getArticleUrl({ publishedAt, slug }: Arguments) {
  const dateSegment = format(new Date(publishedAt), "yyyy/MM");
  return `/artikelen/${dateSegment}/${slug}/`;
}
