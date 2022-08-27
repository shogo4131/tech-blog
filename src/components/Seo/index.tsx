import type { FC } from 'react';

import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  url?: string;
};

// TODO: その他諸々必要なものを調べて追加する
export const Seo: FC<Props> = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Reactおじさんブログ" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@react_nextjs" />
    </Head>
  );
};
