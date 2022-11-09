import { Fragment } from 'react';

import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { client } from '@/lib/client';
import { Category, CategoryResponseData } from '@/types/api';

import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';

import { page, seoContents } from '../../constants';

import styles from './index.module.css';

const breadCrumbs: Crumbs[] = [
  {
    id: 1,
    href: page.top.url,
    label: page.top.title,
  },
  {
    id: 2,
    label: page.sitemap.title,
  },
];

const Sitemap: NextPage<{ contents: Category[] }> = ({ contents }) => {
  const { blogTitle, description, siteUrl } = seoContents;

  return (
    <Layout>
      <Seo
        title={`${page.sitemap.title} | ${blogTitle}`}
        description={description}
        url={`${siteUrl}${page.sitemap.url}`}
      />
      <div className={styles.root}>
        <BreadCrumb items={breadCrumbs} />
        <h1 className={styles.title}>{page.sitemap.title}</h1>
        <ul className={styles.contents}>
          {contents.map(({ id, category, post }) => (
            <Fragment key={id}>
              <li className={styles.category}>
                <Link href={`${page.category.url}/${id}`}>{category}</Link>
              </li>
              {post.map(({ id, title }) => (
                <li key={id} className={styles.blogTitle}>
                  <Link href={`${page.blog.url}/${id}`}>{title}</Link>
                </li>
              ))}
            </Fragment>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categoies = await client.get<CategoryResponseData>({ endpoint: 'category' });

  categoies.contents.map((category) => {
    category.post.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  });

  return {
    props: {
      contents: categoies.contents.reverse(),
    },
  };
};

export default Sitemap;
