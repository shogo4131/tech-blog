import { Fragment } from 'react';

import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Layout } from '@/components/Layout';
import { client } from '@/lib/client';
import { Category, CategoryResponseData } from '@/types/api';

import styles from './index.module.css';

const breadCrumbs: Crumbs[] = [
  {
    id: 1,
    href: '/',
    label: 'トップ',
  },
  {
    id: 2,
    label: 'サイトマップ',
  },
];

const Sitemap: NextPage<{ contents: Category[] }> = ({ contents }) => {
  return (
    <Layout>
      <div className={styles.root}>
        <BreadCrumb items={breadCrumbs} />
        <h1 className={styles.title}>サイトマップ</h1>
        <ul className={styles.contents}>
          {contents.map(({ id, category, post }) => (
            <Fragment key={id}>
              <li className={styles.category}>
                <Link href={`/category/${id}`}>
                  <a>{category}</a>
                </Link>
              </li>
              {post.map(({ id, title }) => (
                <li key={id} className={styles.blogTitle}>
                  <Link href={`/blog/${id}`}>
                    <a>{title}</a>
                  </Link>
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