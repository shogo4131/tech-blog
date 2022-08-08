import type { Tag, Category } from './index';

export type BlogResponseData = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Blog = {
  id: string;
  body: string;
  title: string;
  tags: Tag[];
  category: Category[];
  thumbnail: Thumbnail;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

type Thumbnail = {
  url: string;
  height: number;
  width: number;
};
