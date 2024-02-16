export type Owner = {
  id: number;
  login: string;
  html_url: string;
};

export type Repository = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  forks_count: number;
  subscribers_count: number;
  stargazers_count: number;
  owner: Owner;
  topics: string[];
  created_at: string;
};

export type SearchParams = Record<string, string>;

export type ReposOptions = {
  q: string;
  per_page: string;
  sort: string;
  order: string;
};

export type ReposReponse = {
  items: Repository[];
};
