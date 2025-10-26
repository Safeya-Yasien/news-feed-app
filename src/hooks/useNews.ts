import { useState, useEffect } from "react";
import type { IArticle } from "../types/article.types";
import { fetchNewsApi } from "../services/newsService";

export function useNews(defaultQuery: string) {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [query, setQuery] = useState(defaultQuery);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNews = async (searchTerm: string) => {
    try {
      setLoading(true);
      setError("");
      const articlesData = await fetchNewsApi(
        searchTerm,
        import.meta.env.VITE_NEWS_API_KEY
      );
      setArticles(articlesData);
    } catch (err: any) {
      setError(err.message || "Error fetching news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(defaultQuery);
  }, []);

  return { articles, query, loading, error, fetchNews, setQuery };
}
