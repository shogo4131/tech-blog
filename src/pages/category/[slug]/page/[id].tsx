import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { clsx } from 'clsx';

import { client } from '@/lib/client';
import type { BlogResponseData, Blog } from '@/types/api';
import { range } from '@/utils/range';

import { BlogCard } from '@/components/BlogCard';
import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Layout } from '@/components/Layout';
import { Pagenation } from '@/components/Pagination';
import { Seo } from '@/components/Seo';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { pages, seoContents } from '../../../../constants';
import styles from '../../../index.module.css';

type Props = {
  contents: Blog[];
  category: string;
  categoryType: string;
  totalCount: number;
};

const PER_PAGE = 9;

// TODO: og urlの修正 and リファクタ
const CategoryPage: NextPage<Props> = ({ contents, category, categoryType, totalCount }) => {
  const { lg, sm } = useMediaQuery();
  const url = `${seoContents.siteUrl}${pages.category.url}/${categoryType}`;

  const breadCrumbs: Crumbs[] = [
    {
      id: 1,
      href: pages.top.url,
      label: pages.top.title,
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
          <div className={clsx(styles.blogItem, { [styles.lg]: lg, [styles.sm]: sm })}>
            {contents.map(({ id, title, tags, thumbnail, createdAt }) => (
              <BlogCard
                key={id}
                id={id}
                title={title}
                tags={tags}
                thumbnail={thumbnail}
                createdAt={createdAt}
              />
            ))}
          </div>
        </article>
        {totalCount >= PER_PAGE && (
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
  const blogs = await client.get<BlogResponseData>({ endpoint: 'blog' });

  const paths = range(1, Math.ceil(blogs.totalCount / 9)).map(
    (page) => `/category/${blogs.contents[0].category[0].id}/page/${page}`
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const slug =
    ctx.params.slug && Array.isArray(ctx.params.slug) ? ctx.params.slug[0] : ctx.params.slug ?? '';
  const id = ctx.params.id && Array.isArray(ctx.params.id) ? ctx.params.id[0] : ctx.params.id ?? '';
  const offset = (Number(id) - 1) * 9;

  const data = await client.get<BlogResponseData>({
    endpoint: `blog`,
    queries: { offset, limit: 9, filters: `category[contains]${slug}` },
  });

  return {
    props: {
      contents: data.contents,
      category: data.contents[0].category[0].category,
      totalCount: data.totalCount,
      categoryType: data.contents[0].category[0].id,
    },
  };
};

export default CategoryPage;
