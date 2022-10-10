import { FC } from 'react';

import Link from 'next/link';

import type { Blog } from '@/types/api';

import { Chip } from '@/components/Chip';


import { page } from '../../constants/page';

import styles from './index.module.css';


type Props = Pick<Blog, 'id' | 'title' | 'thumbnail' | 'tags' | 'createdAt'>;

export const BlogCard: FC<Props> = ({ id, title, thumbnail, tags, createdAt }) => {
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
          <Link href={`${page.blog.url}/${id}`}>
            <a>{title}</a>
          </Link>
        </h3>
      </div>
      <div className={styles.content}>
        <div className={styles.date}>
          <time dateTime={createdAt}>{createdAt.slice(0, 10)}</time>
        </div>
        <Chip tags={tags} />
      </div>
    </div>
  );
};
