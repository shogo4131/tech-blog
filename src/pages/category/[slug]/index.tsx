import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { pagesPath } from '@/lib/$path';
import { client } from '@/lib/client';
import type { CategoryResponseData, BlogResponseData, Blog } from '@/types/api';

import { BlogCard } from '@/components/BlogCard';
import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Layout } from '@/components/Layout';
import { Pagenation } from '@/components/Pagination';
import { Seo } from '@/components/Seo';

import { pages, seoContents } from '../../../constants';
import styles from '../../index.module.css';

type Props = {
  contents: Blog[];
  category: string;
  categoryType: string;
  totalCount: number;
};

const PER_PAGE = 9;

// TODO: retrun 以下を共通化する
const Category: NextPage<Props> = ({ contents, category, categoryType, totalCount }) => {
  const url = `${seoContents.siteUrl}${pages.category.url}/${categoryType}`;

  const breadCrumbs: Crumbs[] = [
    {
      id: 1,
      href: pagesPath.$url().pathname,
      label: 'トップ',
    },
    {
      id: 2,
      label: category,
    },
  ];

  return (
    <Layout>
      <Seo
        title={`${category} | ${seoContents.blogTitle}`}
        description={seoContents.description}
        url={url}
      />
      <div>
        <article>
          <BreadCrumb items={breadCrumbs} className={styles.breadCrumb} />
          <div className={styles.blogItem}>
            {contents.map((content) => (
              <BlogCard key={content.id} content={content} />
            ))}
          </div>
        </article>
        {totalCount > PER_PAGE && (
          <Pagenation
            pageUrl={`${pages.category.url}/${categoryType}${pages.page.url}`}
            totalCount={totalCount}
          />
        )}
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await client.get<CategoryResponseData>({ endpoint: 'category' });
  const paths = categories.contents.map(({ id }) => `/category/${id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const id =
    ctx.params.slug && Array.isArray(ctx.params.slug) ? ctx.params.slug[0] : ctx.params.slug ?? '';

  const blog = await client.get<BlogResponseData>({
    endpoint: `blog`,
    queries: { filters: `category[contains]${id}`, limit: 9 },
  });

  const category = blog.contents[0].category.filter((category) => category.id === id);

  return {
    props: {
      contents: blog.contents,
      category: category[0].category,
      totalCount: blog.totalCount,
      categoryType: category[0].id,
    },
  };
};

export default Category;
