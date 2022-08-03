import { FC } from 'react';

import Link from 'next/link';

import styles from './index.module.css';

//TODO: 詳細のiconズレを修正
export const Profile: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <img src="/images/profile.svg" alt="profile" height={30} width={30} />
        <div className={styles.profile}>
          <h4>プロフィール</h4>
          <span>Profile</span>
        </div>
      </div>
      <div className={styles.profileContent}>
        <div className={styles.profileIcon}>
          <img src="/images/postman.svg" alt="サムネイルアイコン" height={80} width={80} />
        </div>
        <div className={styles.profileText}>
          <p>Reactおじさんです。</p>
          <p>フロントエンドエンジニアです。</p>
          <p>勉強会の講師もしてます。</p>
          <p>
            詳細は
            <Link href="/">
              <a className={styles.profileDetail}>
                こちら
                <img src="/images/chevron-right.svg" alt="" height={12} width={12} />
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
