import { FC } from 'react';

import Link from 'next/link';

import { clsx } from 'clsx';

import { pagesPath } from '@/lib/$path';
import { Tag } from '@/types/api';

import styles from './index.module.css';

type Props = {
  className?: string;
  tagClassName?: string;
  tags: Tag[];
};

export const Chip: FC<Props> = ({ className, tagClassName, tags }) => {
  return (
    <div className={clsx(styles.tags, className)}>
      {tags.map(({ id, tag }) => (
        <Link
          href={pagesPath.tags._slug(id).$url()}
          key={id}
          className={clsx(styles.tag, tagClassName)}
        >
          <span>{tag}</span>
        </Link>
      ))}
    </div>
  );
};
