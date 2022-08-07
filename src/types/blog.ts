export type Blog = {
  contents: BlogContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type BlogContent = {
  id: string;
  body: string;
  title: string;
  tags: TagContent[];
  categorys: Category[];
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Tag = {
  contents: TagContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type TagContent = {
  id: string;
  tags: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Category = {
  category: string;
} & Omit<Tag, 'tags'>;
