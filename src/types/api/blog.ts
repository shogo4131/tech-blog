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
  description: string;
};

export type BlogDetailResponseData = Pick<BlogResponseData, 'contents' | 'totalCount'>;

export type Toc = {
  id: number;
  text: string;
  tag: string;
};

type Thumbnail = {
  url: string;
  height: number;
  width: number;
};
