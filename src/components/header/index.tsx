import { FC } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { page } from '../../constants/page';

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

export const Header: FC = () => {
  const { asPath } = useRouter();

  return (
    <header className={styles.root}>
      {page.top.url === asPath ? (
        <h1>
          <Link href={page.top.url}>
            <a title="Reactおじさんブログ">Reactおじさんブログ</a>
          </Link>
        </h1>
      ) : (
        <div>
          <Link href={page.top.url}>
            <a title="Reactおじさんブログ">Reactおじさんブログ</a>
          </Link>
        </div>
      )}
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
