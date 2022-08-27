import { FC } from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import type { Toc as TocList } from '@/types/api';

import styles from './index.module.css';

type Props = {
  className?: string;
  toc: TocList[];
};

// TODO: 各目次にaリンクを設置
export const Toc: FC<Props> = ({ className, toc }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <span className={styles.toc}>目次</span>
      <ul>
        {toc.map(({ text, tag }) => (
          <li key={text} className={clsx(styles.tocItem, { [styles.indent]: tag === 'h3' })}>
            <Link href="#">
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
