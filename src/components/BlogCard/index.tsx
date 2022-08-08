import { FC } from 'react';

import Link from 'next/link';

import type { Blog } from '@/types/api';
import { formatDate } from '@/utils/dateformat';

import styles from './index.module.css';

type Props = Pick<Blog, 'title' | 'thumbnail' | 'tags' | 'createdAt'>;

// TODO: ブログ詳細ページへリンク追加
export const BlogCard: FC<Props> = ({ title, thumbnail, tags, createdAt }) => {
  return (
    <div className={styles.root}>
      <div>
        <img src={thumbnail.url} alt="thumbnail" className={styles.thumbnail} />
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
        <div className={styles.tags}>
          {tags.map(({ id, tag }) => (
            <Link href={`/tags/${id}`} key={id}>
              <span className={styles.tag}>
                <a>{tag}</a>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
