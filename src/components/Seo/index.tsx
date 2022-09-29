import type { FC } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { page, seoContents } from '../../constants';

type Props = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

// TODO: ブログのogImageを作成してもらう
export const Seo: FC<Props> = ({ title, description, url, image }) => {
  const { pathname } = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={seoContents.blogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={pathname.includes(page.blog.url) ? 'article' : 'website'} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@react_nextjs" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>
  );
};
