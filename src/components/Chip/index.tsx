import { FC } from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import { Tag } from '@/types/api';

import { page } from '../../constants/page';

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
        <Link href={`${page.tags.url}/${id}`} key={id}>
          <span className={clsx(styles.tag, tagClassName)}>
            <a>{tag}</a>
          </span>
        </Link>
      ))}
    </div>
  );
};
