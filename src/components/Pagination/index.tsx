import { FC } from 'react';

import Link from 'next/link';

import { clsx } from 'clsx';

import { range } from '@/utils/range';

import styles from './index.module.css';

export type Props = {
  className?: string;
  totalCount: number;
  pageUrl: string;
};

const PER_PAGE = 9;

export const Pagenation: FC<Props> = ({ className, totalCount, pageUrl }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <ul className={styles.pageNum}>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => (
          <li key={number}>
            <Link href={`${pageUrl}/${number}`} className={styles.num}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
