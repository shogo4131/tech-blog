import { FC } from 'react';

import Link from 'next/link';

import type { BlogContent } from '@/types/blog';
import { formatDate } from '@/utils/dateformat';

import styles from './index.module.css';

type Props = Pick<BlogContent, 'title' | 'thumbnail' | 'tags' | 'createdAt'>;

// TODO: タグ絞り込み、ブログ詳細ページへリンク追加
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
          {tags.map(({ id, tags }) => (
            <span className={styles.tag} key={id}>
              <Link href={`/tags/${id}`}>
                <a>{tags}</a>
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
