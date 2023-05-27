import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { pagesPath } from '@/lib/$path';
import type { Blog } from '@/types/api';

import { Chip } from '@/components/Chip';

import styles from './index.module.css';

type Props = {
  content: Blog;
};

export const BlogCard: FC<Props> = ({ content }) => {
  const { id, thumbnail, title, tags, createdAt } = content;

  return (
    <div className={styles.root}>
      <Link href={pagesPath.blog._id(id).$url()}>
        <Image
          src={thumbnail.url}
          height={600}
          width={1200}
          sizes="100vw"
          alt="thumbnail"
          className={styles.thumbnail}
        />
      </Link>
      <div className={styles.title}>
        <h3>
          <Link href={pagesPath.blog._id(id).$url()}>{title}</Link>
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
