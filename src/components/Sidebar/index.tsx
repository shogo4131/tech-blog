import { ChangeEvent, FC, useState } from 'react';

import clsx from 'clsx';

import { InputFiled } from '@/components/InputField';
import { CategoryList } from '@/components/Sidebar/CategoryList';
import { Profile } from '@/components/Sidebar/Profile';
import { TagList } from '@/components/Sidebar/TagList';

import { useMediaQuery } from '../../hooks/useMediaQuery';

import styles from './index.module.css';

type Props = {
  className?: string;
};

// TODO:全文検索追加
export const Sidebar: FC<Props> = () => {
  const { xl } = useMediaQuery();
  const [keyword, setKeyWord] = useState('');

  const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  return (
    <aside className={clsx(styles.root, { [styles.xl]: xl })}>
      {!xl && (
        <InputFiled
          inputClassName={styles.input}
          placeholder="検索"
          value={keyword}
          onChange={onChangeSearchHandler}
          surffixIcon="/images/search.svg"
        />
      )}
      <Profile />
      <TagList />
      <CategoryList />
    </aside>
  );
};
