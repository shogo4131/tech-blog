import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { ScrollTopButton } from '@/components/Elements/ScrollTopButton';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';

import { useMediaQuery } from '../../hooks/useMediaQuery';

import styles from './index.module.css';

type Props = {
  className?: string;
  children: ReactNode;
};

// TODO: モバイル端末の場合、検索フォームを追加する
export const Layout: FC<Props> = ({ className, children }) => {
  const { xl } = useMediaQuery();

  return (
    <>
      <Header />
      <Navigation />
      <main className={clsx(styles.root, { [styles.xl]: xl }, className)}>
        {children}
        <Sidebar />
      </main>
      <Footer />
      {/* TODO: スクロールボタンのデザイン変更する */}
      <ScrollTopButton />
    </>
  );
};
