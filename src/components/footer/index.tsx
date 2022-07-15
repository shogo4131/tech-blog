import { FC } from 'react';

import Link from 'next/link';

import styles from './index.module.css';

export const Footer: FC = () => {
  const date = new Date();

  // TODO: プライバシーポリシーページリンク追加
  return (
    <footer className={styles.root}>
      <Link href="/">
        <a className={styles.privacy}>プライバシーポリシー</a>
      </Link>
      <p className={styles.copyLight}>©︎ {date.getFullYear()} Reactおじさんブログ</p>
    </footer>
  );
};
