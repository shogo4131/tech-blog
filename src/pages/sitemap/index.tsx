import { Fragment } from 'react';

import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { pagesPath } from '@/lib/$path';
import { client } from '@/lib/client';
import { Category, CategoryResponseData } from '@/types/api';

import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';

import { seoContents } from '../../constants';

import styles from './index.module.css';

const pageTitle = 'サイトマップ';

const breadCrumbs: Crumbs[] = [
  {
    id: 1,
    href: pagesPath.$url().pathname,
    label: 'トップ',
  },
  {
    id: 2,
    label: pageTitle,
  },
];

const Sitemap: NextPage<{ contents: Category[] }> = ({ contents }) => {
  const { blogTitle, description, siteUrl } = seoContents;

  return (
    <Layout>
      <Seo
        title={`${pageTitle} | ${blogTitle}`}
        description={description}
        url={`${siteUrl}${pagesPath.sitemap.$url().pathname}`}
      />
      <div className={styles.root}>
        <BreadCrumb items={breadCrumbs} />
        <h1 className={styles.title}>{pageTitle}</h1>
        <ul className={styles.contents}>
          {contents.map(({ id, category, post }) => (
            <Fragment key={id}>
              <li className={styles.category}>
                <Link href={pagesPath.category._slug(id).$url()}>{category}</Link>
              </li>
              {post.map(({ id, title }) => (
                <li key={id} className={styles.blogTitle}>
                  <Link href={pagesPath.blog._id(id).$url()}>{title}</Link>
                </li>
              ))}
            </Fragment>
          ))}
          <li className={styles.category}>
            <Link href={pagesPath.profile.$url()}>プロフィール</Link>
          </li>
          <li className={styles.category}>
            <Link href={pagesPath.privacy.$url()}>免責事項・プライバシーポリシー</Link>
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
