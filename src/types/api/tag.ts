/**
 * Tag API
 */

export type TagResponseData = {
  contents: Tag[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Tag = {
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
