/**
 * Category API
 */

export type CategoryResponseData = {
  contents: Category[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Category = {
  id: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
