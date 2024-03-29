import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { pagesPath } from '@/lib/$path';

import sidebarJson from '../../../../public/sidebar.json';

import styles from './index.module.css';

export const CategoryList: FC = () => {
  const categories = [...sidebarJson.categories].reverse();

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <Image src="/images/category.svg" alt="カテゴリ一覧" height={45} width={45} />
        <div className={styles.category}>
          <h4>カテゴリ一覧</h4>
          <span>Caterory Lists</span>
        </div>
      </div>
      <ul className={styles.contents}>
        {categories.map(({ id, category, post }) => (
          <li key={id} className={styles.item}>
            <Link href={pagesPath.category._slug(id).$url()}>{`${category}(${post.length})`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
