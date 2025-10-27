// const BASE_URL = import.meta.env.VITE_BASE_URL;

// export const fetchNewsApi = async (query: string, apiKey: string) => {
//   const url = `${BASE_URL}?q=${encodeURIComponent(
//     query
//   )}&sortBy=publishedAt&pageSize=12&apiKey=${apiKey}`;

//   const response = await fetch(url);
//   const data = await response.json();

//   if (data.status !== "ok") {
//     throw new Error(data.message || "Failed to fetch news");
//   }

//   return data.articles;
// };

export const fetchNewsApi = async (query: string) => {
  const url = `/.netlify/functions/news?query=${encodeURIComponent(query)}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok || data.status === "error") {
    throw new Error(data.message || "Failed to fetch news");
  }

  return data.articles || [];
};
