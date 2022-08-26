import { ChangeEvent, FC, useState } from 'react';

import clsx from 'clsx';
import { useMedia } from 'use-media';

import { InputFiled } from '@/components/InputField';
import { CategoryList } from '@/components/Sidebar/CategoryList';
import { Profile } from '@/components/Sidebar/Profile';
import { TagList } from '@/components/Sidebar/TagList';

import styles from './index.module.css';

type Props = {
  className?: string;
};

// TODO:全文検索追加
export const Sidebar: FC<Props> = () => {
  const isMobile = useMedia({ maxWidth: '920px' });
  const [keyword, setKeyWord] = useState('');

  const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  return (
    <aside className={clsx(styles.root, { [styles.mobile]: isMobile })}>
      {!isMobile && (
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
