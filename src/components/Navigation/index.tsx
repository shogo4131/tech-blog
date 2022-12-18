import { FC } from 'react';

import Link from 'next/link';

import { pages } from '../../constants/pages';

import styles from './index.module.css';

const navigationHeaders = [
  {
    title: 'フロントエンド',
    subtitle: 'Frontend',
    href: `${pages.category.url}/frontend`,
  },
  // {
  //   title: 'バックエンド',
  //   subtitle: 'Backend',
  //   href: `${pages.category.url}/backend`,
  // },
  {
    title: 'その他',
    subtitle: 'Others',
    href: `${pages.category.url}/others`,
  },
  {
    title: 'サイトマップ',
    subtitle: 'Sitemap',
    href: `${pages.sitemap.url}`,
  },
] as const;

export const Navigation: FC = () => {
  return (
    <nav className={styles.root}>
      <ul className={styles.lists}>
        {navigationHeaders.map(({ title, subtitle, href }) => (
          <li key={title}>
            <Link href={href}>
              <p>{title}</p>
              <p className={styles.subtitle}>{subtitle}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
