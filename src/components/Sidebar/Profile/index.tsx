import { FC } from 'react';

import Link from 'next/link';

import { pagesPath } from '@/lib/$path';

import styles from './index.module.css';

export const Profile: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <img src="/images/profile.svg" alt="プロフィール" height={40} width={40} />
        <div className={styles.profile}>
          <h4>プロフィール</h4>
          <span>Profile</span>
        </div>
      </div>
      <div className={styles.profileContent}>
        <div className={styles.profileIcon}>
          <img src="/images/postman.svg" alt="サムネイルアイコン" height={100} width={100} />
        </div>
        <div className={styles.profileText}>
          <p>Reactおじさんです。</p>
          <p>フロントエンドエンジニアです。</p>
          <p>勉強会の講師もしてます。</p>
          <p>
            詳細は
            <Link href={pagesPath.profile.$url()} className={styles.profileDetail}>
              <span>こちら</span>
              <img
                src="/images/arrow-right-blue.svg"
                alt="プロフィール詳細"
                height={16}
                width={16}
                className={styles.arrowIcon}
              />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
