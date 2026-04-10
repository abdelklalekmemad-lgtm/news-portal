export const ROUTES = {
  home: "/",
  category: (slug: string) => `/category/${slug}`,
  article: (slug: string) => `/article/${slug}`,
  search: "/search",
} as const;
