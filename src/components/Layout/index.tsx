import { FC, ReactNode, useCallback, useEffect, useState } from 'react';

import clsx from 'clsx';

import { Button } from '@/components/Button';
// import { Footer } from '@/components/Footer';
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
  const [isHidden, setHidden] = useState(true);

  const onClickScrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onChangeScrollHightHandelr = useCallback(() => {
    const scrollY = window.scrollY;
    const height = window.outerHeight;
    setHidden(!(scrollY > height));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onChangeScrollHightHandelr);
    return () => window.removeEventListener('scroll', onChangeScrollHightHandelr);
  }, [onChangeScrollHightHandelr]);

  return (
    <>
      <Header />
      <Navigation />
      <main className={clsx(styles.root, { [styles.xl]: xl }, className)}>
        {children}
        <Sidebar />
      </main>
      {/* <Footer /> */}
      {/* TODO: スクロールボタンのデザイン変更する */}
      <Button
        type="button"
        className={clsx(styles.scrollButton, { [styles.hidden]: isHidden })}
        onClick={onClickScrollTopHandler}
      >
        <img src="/images/arrow-up.svg" alt="スクロールトップ" />
      </Button>
    </>
  );
};
