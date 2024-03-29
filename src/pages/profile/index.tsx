import type { NextPage } from 'next';

import { pagesPath } from '@/lib/$path';

import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';

import { seoContents, frontend, backtend } from '../../constants';

import styles from './index.module.css';

const pageTitle = 'プロフィール';

const breadCrumbs: Crumbs[] = [
  {
    id: 1,
    href: pagesPath.$url().pathname,
    label: 'トップ',
  },
  {
    id: 2,
    label: pageTitle,
  },
];

const Profile: NextPage = () => {
  const { blogTitle, description, siteUrl } = seoContents;

  return (
    <Layout>
      <Seo
        title={`${pageTitle} | ${blogTitle}`}
        description={description}
        url={`${siteUrl}${pagesPath.profile.$url().pathname}`}
      />
      <div className={styles.root}>
        <BreadCrumb items={breadCrumbs} />
        <h1 className={styles.title}>{pageTitle}</h1>
        <div className={styles.selfIntroduction}>
          <p>初めまして！！</p>
          <p>Reactおじさんです。</p>
          <p>2020年3月からWebエンジニアとして活動しています。</p>
          <p>フロントエンド領域が得意ですが、インフラ・バックエンドも経験があります。</p>
          <p>元々、営業を行なっていたこともありエンジニアぽくないと言われることが多いです。</p>
          <p>スキル、経歴を下記で紹介させて頂ければと思います。</p>
        </div>
        <div className={styles.skill}>
          <h2 className={styles.subTitle}>スキル</h2>
          <div className={styles.front}>
            <h3>フロントエンド</h3>
            {frontend.map(({ icon, alt }) => (
              <img
                key={alt}
                src={icon}
                alt={alt}
                height={40}
                width={40}
                className={styles.skillIcon}
              />
            ))}
          </div>
          <div className={styles.back}>
            <h3>バックエンド</h3>
            {backtend.map(({ icon, alt }) => (
              <img
                key={alt}
                src={icon}
                alt={alt}
                height={40}
                width={40}
                className={styles.skillIcon}
              />
            ))}
          </div>
        </div>
        <div className={styles.skill}>
          <h2 className={styles.subTitle}>経歴</h2>
          {/* TODO: github apiからmarkdownを呼び出し */}
          <div>・準備中</div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
