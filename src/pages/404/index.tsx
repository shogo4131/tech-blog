import type { NextPage } from 'next';
import Image from 'next/image';

import { Layout } from '@/components/Layout';

import styles from './index.module.css';

const Custom404: NextPage = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <h2 className={styles.image}>
          <Image src="/images/404.svg" alt="not fount page" height={300} width={400} />
        </h2>
        <p className={styles.text}>お探しのページは見つかりませんでした。</p>
        <p className={styles.text}>入力されたURL等を再度ご確認下さい。</p>
      </div>
    </Layout>
  );
};

export default Custom404;
