import { FC } from 'react';

import Link from 'next/link';

import styles from './index.module.css';

type Props = {
  image: string;
  tags: string[];
  title: string;
};

// TODO: APIの方が決まり次第修正
// TODO: 画像の最小値設定
export const BlogCard: FC<Props> = ({ image, tags, title }) => {
  return (
    <div className={styles.root}>
      <div>
        <img src={image} alt="thumbnail" className={styles.thumbnail} />
      </div>
      <div className={styles.title}>
        <h3>
          <Link href="/">
            <a>{title}</a>
          </Link>
        </h3>
      </div>
      <div className={styles.content}>
        <div className={styles.date}>
          <Link href="/">
            <a>2022/07/20</a>
          </Link>
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span className={styles.tag} key={tag}>
              <Link href="/">
                <a>{tag}</a>
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
