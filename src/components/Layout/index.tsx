import { FC, ReactNode } from 'react';

import clsx from 'clsx';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Navigation } from 'components/Navigation';
import { Sidebar } from 'components/Sidebar';

import styles from './index.module.css';

type Props = {
  className?: string;
  children: ReactNode;
};

// TODO: サイドバーの余白、レスポンシブ対応
export const Layout: FC<Props> = ({ className, children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <main className={clsx(styles.root, className)}>
        {children}
        <Sidebar />
      </main>
      <Footer />
    </>
  );
};
