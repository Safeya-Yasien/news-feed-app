import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) onSearch(term);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mb-4 gap-2 w-full max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Search for news..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}
