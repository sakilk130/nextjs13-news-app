export type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

export type Pagination = {
  total: number;
  limit: number;
  offset: number;
  count: number;
};

export type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};
