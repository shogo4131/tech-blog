import { FC } from 'react';

import Link from 'next/link';

import { pagesPath } from '@/lib/$path';

import styles from './index.module.css';

const navigationHeaders = [
  {
    title: 'フロントエンド',
    subtitle: 'Frontend',
    href: pagesPath.category._slug('frontend').$url(),
  },
  {
    title: 'その他',
    subtitle: 'Others',
    href: pagesPath.category._slug('others').$url(),
  },
  {
    title: 'サイトマップ',
    subtitle: 'Sitemap',
    href: pagesPath.sitemap.$url(),
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
