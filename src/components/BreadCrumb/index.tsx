import type { FC } from 'react';
import { Fragment } from 'react';

import { useRouter } from 'next/router';

import clsx from 'clsx';

import styles from './index.module.css';

type Props = {
  className?: string;
  items: Crumbs[];
};

export type Crumbs = {
  id: number;
  label: string;
  href?: string;
};

export const BreadCrumb: FC<Props> = ({ className, items }) => {
  const { push } = useRouter();

  const onClickLinkHandler = (url?: string) => {
    if (url) push(url);
  };

  return (
    <div className={clsx(styles.root, className)}>
      <img src="/images/home.svg" alt="home" className={styles.homeIcon} height={11} width={11} />
      {items.map(({ id, href, label }) => (
        <Fragment key={id}>
          <div
            className={clsx(styles.label, { [styles.cursol]: href })}
            onClick={() => onClickLinkHandler(href)}
          >
            {label}
          </div>
          {href && (
            <img
              src="/images/arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRight}
              height={16}
              width={16}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};
