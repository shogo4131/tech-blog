import { FC } from 'react';

import { Chip } from '@/components/Chip';

import sidebarJson from '../../../../public/sidebar.json';

import styles from './index.module.css';

export const TagList: FC = () => {
  const tags = sidebarJson.tags;

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <img src="/images/tag.svg" alt="プロフィール" height={30} width={30} />
        <div className={styles.tag}>
          <h4>タグ一覧</h4>
          <span>Tag Lists</span>
        </div>
      </div>
      <div className={styles.contents}>
        <Chip tags={[...tags].reverse()} tagClassName={styles.tagList} />
      </div>
    </div>
  );
};
