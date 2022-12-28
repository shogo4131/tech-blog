import { FC } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { clsx } from 'clsx';

import { pages } from '../../constants/pages';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import styles from './index.module.css';

const headerLinks = [
  {
    title: 'react',
    url: 'https://beta-reactjs-org-git-effects-fbopensource.vercel.app/',
    imagePath: '/images/react.svg',
    alt: 'react',
  },
] as const;

export const Header: FC = () => {
  const { asPath } = useRouter();
  const { sm } = useMediaQuery();

  const headerTitle = (
    <Link href={pages.top.url} title="Reactおじさんブログ">
      Reactおじさんブログ
    </Link>
  );

  return (
    <header className={clsx(styles.root, { [styles.sm]: sm })}>
      {pages.top.url === asPath ? <h1>{headerTitle}</h1> : <div>{headerTitle}</div>}
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
