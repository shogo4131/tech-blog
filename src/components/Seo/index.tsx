import type { FC } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { page, seoContents } from '../../constants';

type Props = {
  title: string;
  description: string;
  url: string;
};

// TODO: その他諸々必要なものを調べて追加する
// TODO: image追加
export const Seo: FC<Props> = ({ title, description, url }) => {
  const { pathname } = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={seoContents.blogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={pathname.includes(page.blog.url) ? 'article' : 'website'} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@react_nextjs" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
    </Head>
  );
};
