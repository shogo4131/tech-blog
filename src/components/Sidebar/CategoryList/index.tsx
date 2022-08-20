import { FC } from 'react';

import Link from 'next/link';

import sidebarJson from '../../../../public/sidebar.json';

import styles from './index.module.css';

export const CategoryList: FC = () => {
  const categories = [...sidebarJson.categories].reverse();

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {/* TODO: カテゴリーのアイコンもらう */}
        <img src="/images/tag.svg" alt="カテゴリ一覧" height={30} width={30} />
        <div className={styles.category}>
          <h4>カテゴリ一覧</h4>
          <span>Caterory Lists</span>
        </div>
      </div>
      <ul className={styles.contents}>
        {categories.map(({ id, category, post }) => (
          <li key={id} className={styles.item}>
            <Link href={`/category/${id}`}>
              <a>{`${category}(${post.length})`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
