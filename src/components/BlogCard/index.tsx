import { FC } from 'react';

import Link from 'next/link';

import type { Blog } from '@/types/api';

import { Chip } from '@/components/Chip';

import { pages } from '../../constants/pages';

import styles from './index.module.css';

type Props = {
  content: Blog;
};

export const BlogCard: FC<Props> = ({ content }) => {
  const { id, thumbnail, title, tags, createdAt } = content;

  return (
    <div className={styles.root}>
      <Link href={`${pages.blog.url}/${id}`}>
        <img
          src={thumbnail.url}
          height={600}
          width={1200}
          alt="thumbnail"
          className={styles.thumbnail}
        />
      </Link>
      <div className={styles.title}>
        <h3>
          <Link href={`${pages.blog.url}/${id}`}>{title}</Link>
        </h3>
      </div>
      <div className={styles.date}>
        <img src="/images/clock.svg" alt="日付" height={16} width={16} />
        <time dateTime={createdAt}>{createdAt.slice(0, 10)}</time>
      </div>
      <Chip tags={tags} tagClassName={styles.tagList} />
    </div>
  );
};
