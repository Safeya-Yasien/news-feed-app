import type { IArticle } from "../types/article.types";

export default function NewsCard({ article }: { article: IArticle }) {
  const { title, description, url, urlToImage, source } = article;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {urlToImage ? (
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-gray-400 text-sm">
          No Image
        </div>
      )}

      <div className="p-5 flex flex-col h-60">
        <h2 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900">
          {title}
        </h2>

        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {description || "No description available."}
        </p>

        {source?.name && (
          <p className="text-xs text-gray-500 mb-2 italic">
            Source: {source.name}
          </p>
        )}

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-indigo-600 font-medium hover:underline"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}
