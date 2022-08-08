import { FC } from 'react';

import Link from 'next/link';

import styles from './index.module.css';

// TODO: リンクをidから戻す
const navigationHeaders = [
  {
    title: 'フロントエンド',
    subtitle: 'Front end',
    href: '/category/g2q9m1g39',
  },
  {
    title: 'バックエンド',
    subtitle: 'Back end',
    href: '/category/monnb9cn3',
  },
  {
    title: 'その他',
    subtitle: 'Others',
    href: '/category/toh-fmhx_u',
  },
  {
    title: 'サイトマップ',
    subtitle: 'Site map',
    href: '/sitemap',
  },
  {
    title: 'お問合せ',
    subtitle: 'Contract',
    href: '/contract',
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
