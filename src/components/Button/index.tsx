import type { FC, ReactNode, ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

type Props = {
  className?: string;
  children: ReactNode;
} & ComponentProps<'button'>;

export const Button: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className={clsx(styles.root, className)}>
      {children}
      <img src="/images/arrow-button.svg" alt="arrow button" height={20} width={20} />
    </button>
  );
};
