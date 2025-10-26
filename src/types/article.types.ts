export interface IArticle {
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  source?: {
    name?: string;
  };
}
