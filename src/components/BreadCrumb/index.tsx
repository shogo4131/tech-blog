import type { FC } from 'react';
import { Fragment, useCallback } from 'react';

import { useRouter } from 'next/router';

import clsx from 'clsx';

import styles from './index.module.css';

type Props = {
  className?: string;
  items: Crumbs[];
};

type Crumbs = {
  id: number;
  label: string;
  href?: string;
};

export const BreadCrumb: FC<Props> = ({ className, items }) => {
  const { push } = useRouter();

  const onClickLinkHandler = useCallback(
    (url?: string) => {
      if (url) push(url);
    },
    [push]
  );

  return (
    <div className={clsx(styles.root, className)}>
      <img src="/images/home.svg" alt="home" height={16} width={18} />
      {items.map(({ id, href, label }) => (
        <Fragment key={id}>
          <div
            className={clsx(styles.label, { [styles.cursol]: href })}
            onClick={() => onClickLinkHandler(href)}
          >
            {label}
          </div>
          {/* {href && <Image alt="arrow-right" src={ArrowRightIcon} className={styles.icon} />} */}
        </Fragment>
      ))}
    </div>
  );
};

export default BreadCrumb;
