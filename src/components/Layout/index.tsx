import { FC, ReactNode } from 'react';

import clsx from 'clsx';
import { useMedia } from 'use-media';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';

import styles from './index.module.css';

type Props = {
  className?: string;
  children: ReactNode;
};

// TODO: モバイル端末の場合、検索フォームを追加する
export const Layout: FC<Props> = ({ className, children }) => {
  const isMobile = useMedia({ maxWidth: '920px' });

  return (
    <>
      <Header />
      <Navigation />
      <main className={clsx(styles.root, { [styles.mobile]: isMobile }, className)}>
        {children}
        <Sidebar />
      </main>
      <Footer />
    </>
  );
};
