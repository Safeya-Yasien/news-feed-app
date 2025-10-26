import SearchBar from "./components/SearchBar";
import NewsCard from "./components/NewsCard";
import { useNews } from "./hooks/useNews";

export default function App() {
  const { articles, loading, error, fetchNews, setQuery } =
    useNews("technology");

  const handleSearch = (term: string) => {
    setQuery(term);
    fetchNews(term);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-gray-800 px-6 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text drop-shadow-sm">
        News Explorer
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p className="text-center mt-8 text-lg font-medium text-indigo-600">
          Loading...
        </p>
      )}
      {error && <p className="text-center text-red-500 mt-8">{error}</p>}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {!loading &&
          !error &&
          articles.map((article, i) => <NewsCard key={i} article={article} />)}
      </div>
    </div>
  );
}
