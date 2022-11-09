import { FC } from 'react';

import Link from 'next/link';

import { page } from '../../constants/page';

import styles from './index.module.css';

const navigationHeaders = [
  {
    title: 'フロントエンド',
    subtitle: 'Frontend',
    href: `${page.category.url}/frontend`,
  },
  // {
  //   title: 'バックエンド',
  //   subtitle: 'Backend',
  //   href: `${page.category.url}/backend`,
  // },
  {
    title: 'その他',
    subtitle: 'Others',
    href: `${page.category.url}/others`,
  },
  {
    title: 'サイトマップ',
    subtitle: 'Sitemap',
    href: `${page.sitemap.url}`,
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
