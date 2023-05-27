import { type FC, useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import { clsx } from 'clsx';

import { Button } from '@/components/Button';

import styles from './index.module.css';

type Props = {
  className?: string;
};

export const ScrollTopButton: FC<Props> = () => {
  const [isHidden, setHidden] = useState(false);

  const onClickScrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onChangeScrollHightHandelr = useCallback(() => {
    const scrollY = window.scrollY;
    const height = window.outerHeight;
    setHidden(scrollY > height);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onChangeScrollHightHandelr);
    return () => window.removeEventListener('scroll', onChangeScrollHightHandelr);
  }, [onChangeScrollHightHandelr]);

  return (
    <Button
      type="button"
      className={clsx(styles.scrollButton, { [styles.hidden]: !isHidden })}
      onClick={onClickScrollTopHandler}
    >
      <Image src="/images/arrow-up.svg" alt="スクロールトップ" height={24} width={24} />
    </Button>
  );
};
