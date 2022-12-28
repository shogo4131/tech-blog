import { Fragment } from 'react';

import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { client } from '@/lib/client';
import { Category, CategoryResponseData } from '@/types/api';

import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';

import { pages, seoContents } from '../../constants';

import styles from './index.module.css';

const breadCrumbs: Crumbs[] = [
  {
    id: 1,
    href: pages.top.url,
    label: pages.top.title,
  },
  {
    id: 2,
    label: pages.sitemap.title,
  },
];

const Sitemap: NextPage<{ contents: Category[] }> = ({ contents }) => {
  const { blogTitle, description, siteUrl } = seoContents;

  return (
    <Layout>
      <Seo
        title={`${pages.sitemap.title} | ${blogTitle}`}
        description={description}
        url={`${siteUrl}${pages.sitemap.url}`}
      />
      <div className={styles.root}>
        <BreadCrumb items={breadCrumbs} />
        <h1 className={styles.title}>{pages.sitemap.title}</h1>
        <ul className={styles.contents}>
          {contents.map(({ id, category, post }) => (
            <Fragment key={id}>
              <li className={styles.category}>
                <Link href={`${pages.category.url}/${id}`}>{category}</Link>
              </li>
              {post.map(({ id, title }) => (
                <li key={id} className={styles.blogTitle}>
                  <Link href={`${pages.blog.url}/${id}`}>{title}</Link>
                </li>
              ))}
            </Fragment>
          ))}
          <li className={styles.category}>
            <Link href={pages.profile.url}>プロフィール</Link>
          </li>
          <li className={styles.category}>
            <Link href={pages.privacy.url}>免責事項・プライバシーポリシー</Link>
          </li>
          <li className={styles.category}>
            <a href="https://forms.gle/Dvt3wWcXDzENR97CA" target="_blank" rel="noopener noreferrer">
              お問合せ
            </a>
          </li>
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
