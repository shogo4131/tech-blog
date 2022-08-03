import { FC, ReactNode } from 'react';

import clsx from 'clsx';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Navigation } from 'components/Navigation';

import styles from './index.module.css';

type Props = {
  className?: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ className, children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <main className={clsx(styles.root, className)}>{children}</main>
      <Footer />
    </>
  );
};
