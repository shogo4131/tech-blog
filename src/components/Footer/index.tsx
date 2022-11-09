import { FC } from 'react';

import Link from 'next/link';

import { page, seoContents } from '../../constants';

import styles from './index.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <div>
        <Link href={page.privacy.url} className={styles.privacy}>
          免責事項・プライバシーポリシー
        </Link>
      </div>
      <p className={styles.copyLight}>
        ©︎ {new Date().getFullYear()} {seoContents.blogTitle}
      </p>
    </footer>
  );
};
