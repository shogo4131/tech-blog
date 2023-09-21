import { FC } from 'react';

import { CategoryList } from '@/components/Sidebar/CategoryList';
import { Profile } from '@/components/Sidebar/Profile';
import { TagList } from '@/components/Sidebar/TagList';

import { Midworks } from './Midworks';
import styles from './index.module.css';

type Props = {
  className?: string;
};

// TODO:全文検索追加
export const Sidebar: FC<Props> = () => {
  return (
    <aside className={styles.root}>
      <Midworks />
      {/* TODO:: 検索機能追加の際にコメントアウトする */}
      {/* <InputFiled
        readOnly
        inputClassName={styles.input}
        placeholder="検索"
        value={keyword}
        onClick={onChangeSearchHandler}
        surffixIcon="/images/search.svg"
      /> */}
      <Profile />
      <TagList />
      <CategoryList />
    </aside>
  );
};
