import { FC } from 'react';

import Link from 'next/link';

import { page } from '../../constants/page';

import styles from './index.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <div>
        <Link href={page.privacy.url}>
          <a className={styles.privacy}>免責事項・プライバシーポリシー</a>
        </Link>
      </div>
      <p className={styles.copyLight}>©︎ {new Date().getFullYear()} Reactおじさんブログ</p>
    </footer>
  );
};
