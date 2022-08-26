import { FC } from 'react';

import Link from 'next/link';

import { page } from '../../constants/page';

import styles from './index.module.css';

// TODO: リンクをidから戻す
const navigationHeaders = [
  {
    title: 'フロントエンド',
    subtitle: 'Frontend',
    href: `${page.category.url}/g2q9m1g39`,
  },
  {
    title: 'バックエンド',
    subtitle: 'Backend',
    href: `${page.category.url}/monnb9cn3`,
  },
  {
    title: 'その他',
    subtitle: 'Others',
    href: `${page.category.url}/toh-fmhx_u`,
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
              <a>
                <p>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
