export const queryKeys = {
  articles: {
    all: ["articles"] as const,
    list: (filters?: Record<string, unknown>) =>
      [...queryKeys.articles.all, "list", filters] as const,
    detail: (slug: string) => [...queryKeys.articles.all, "detail", slug] as const,
  },
  categories: {
    all: ["categories"] as const,
  },
} as const;
