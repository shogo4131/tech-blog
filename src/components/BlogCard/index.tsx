import { FC } from 'react';

import Link from 'next/link';

import { Chip } from '@/components/Chip';
import type { Blog } from '@/types/api';
import { formatDate } from '@/utils/dateformat';

import styles from './index.module.css';

type Props = Pick<Blog, 'title' | 'thumbnail' | 'tags' | 'createdAt'>;

// TODO: ブログ詳細ページへリンク追加
export const BlogCard: FC<Props> = ({ title, thumbnail, tags, createdAt }) => {
  return (
    <div className={styles.root}>
      <div>
        <img
          src={thumbnail.url}
          height={600}
          width={1200}
          alt="thumbnail"
          className={styles.thumbnail}
        />
      </div>
      <div className={styles.title}>
        <h3>
          <Link href="/">
            <a>{title}</a>
          </Link>
        </h3>
      </div>
      <div className={styles.content}>
        <div className={styles.date}>
          <Link href="/">
            <a>{formatDate(createdAt)}</a>
          </Link>
        </div>
        <Chip tags={tags} />
      </div>
    </div>
  );
};
