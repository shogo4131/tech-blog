import { FC } from 'react';

import { clsx } from 'clsx';

import type { Toc as TocList } from '@/types/api';

import styles from './index.module.css';

type Props = {
  className?: string;
  toc: TocList[];
};

export const Toc: FC<Props> = ({ className, toc }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <span className={styles.toc}>目次</span>
      <ul>
        {toc.map(({ id, text, tag }) => (
          <li key={text} className={clsx(styles.tocItem, { [styles.indent]: tag === 'h3' })}>
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
