import { FC } from 'react';

import Link from 'next/link';

import { pages, seoContents } from '../../constants';

import styles from './index.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.linkArea}>
        <Link href={pages.privacy.url}>免責事項・プライバシーポリシー</Link>
        <div className={styles.divider} />
        <a href="https://forms.gle/Dvt3wWcXDzENR97CA" target="_blank" rel="noopener noreferrer">
          お問合せ
        </a>
      </div>
      <p className={styles.copyLight}>
        ©︎ {new Date().getFullYear()} {seoContents.blogTitle}
      </p>
    </footer>
  );
};
