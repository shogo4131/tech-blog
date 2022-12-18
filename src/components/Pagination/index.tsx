import { FC } from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import { range } from '@/utils/range';

import styles from './index.module.css';

export type Props = {
  className?: string;
  totalCount: number;
};

const PER_PAGE = 9;

export const Pagenation: FC<Props> = ({ className, totalCount }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <ul className={styles.pageNum}>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => (
          <li key={number} className={styles.num}>
            <Link href={`/page/${number}`}>{number}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
