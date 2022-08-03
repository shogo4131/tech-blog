import { FC } from 'react';

import Link from 'next/link';

import styles from './index.module.css';

const headerLinks = [
  {
    title: 'github',
    url: 'https://github.com/shogo4131',
    imagePath: '/images/github.svg',
    alt: 'github',
  },
  {
    title: 'react',
    url: 'https://beta-reactjs-org-git-effects-fbopensource.vercel.app/',
    imagePath: '/images/react.svg',
    alt: 'react',
  },
] as const;

// TODO:  top画面と他にいった時にh1, divタグを入れ替える
// sitemap icon追加
export const Header: FC = () => {
  return (
    <header className={styles.root}>
      <h1>
        <Link href="/">
          <a title="Reactおじさんブログ">Reactおじさんブログ</a>
        </Link>
      </h1>
      <ul className={styles.headerBanner}>
        {headerLinks.map(({ title, url, imagePath, alt }) => (
          <li key={title}>
            <a href={url} className={styles.image}>
              <img src={imagePath} alt={alt} height={24} width={24} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
