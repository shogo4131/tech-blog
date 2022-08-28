/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/horizon-dark.css';

import { BreadCrumb, Crumbs } from '@/components/BreadCrumb';
import { Chip } from '@/components/Chip';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { Toc } from '@/components/Toc';
import { client } from '@/lib/client';
import { Blog, BlogResponseData, BlogDetailResponseData, Toc as TocList } from '@/types/api';

import { page, seoContents } from '../../constants';

import styles from './[id].module.css';

type Props = {
  toc: TocList[];
} & Blog;

const BlogDetail: NextPage<Props> = ({
  id,
  title,
  body,
  thumbnail,
  tags,
  category,
  createdAt,
  toc,
  description,
}) => {
  // TODO: urlをidからアルファベットに変更
  const url = `${seoContents.siteUrl}${page.blog.url}/${title}`;

  const breadCrumbs: Crumbs[] = [
    {
      id: 1,
      href: page.top.url,
      label: page.top.title,
    },
    {
      id: 2,
      href: `${page.category.url}/${id}`,
      label: category.toString(),
    },
    {
      id: 3,
      label: title,
    },
  ];

  return (
    <Layout>
      <Seo title={`${title} | ${seoContents.blogTitle}`} description={description} url={url} />
      <article className={styles.root}>
        <BreadCrumb items={breadCrumbs} />
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.datetime}>
            <img src="/images/clock.svg" alt="日付" height={16} width={16} />
            <time dateTime={createdAt}>{createdAt.slice(0, 10)}</time>
          </span>
          <Chip tags={tags} />
          <img
            src={thumbnail.url}
            alt="サムネイル"
            height={600}
            width={1200}
            className={styles.thumbnail}
          />
        </div>
        <Toc toc={toc} className={styles.toc} />
        <div dangerouslySetInnerHTML={{ __html: body }} className={styles.blog} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blog = await client.get<BlogResponseData>({ endpoint: 'blog' });
  const paths = blog.contents.map(({ id }) => `/blog/${id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params) return { notFound: true };
  const id = ctx.params.id && Array.isArray(ctx.params.id) ? ctx.params.id[0] : ctx.params.id ?? '';

  const { contents } = await client.get<BlogDetailResponseData>({
    endpoint: 'blog',
    queries: { ids: id },
  });

  const $ = cheerio.load(contents[0].body, { _useHtmlParser2: true });
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  const headding = $('h2, h3').toArray();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toc = headding.map((data: any) => {
    return {
      id: data.attribs.id,
      text: data.children[0].data ? data.children[0].data : '',
      tag: data.name ? data.name : '',
    };
  });

  return {
    props: {
      id: contents[0].id,
      title: contents[0].title,
      body: $.html(),
      createdAt: contents[0].createdAt,
      tags: contents[0].tags,
      thumbnail: contents[0].thumbnail,
      category: contents[0].category[0].category,
      description: contents[0].description,
      toc,
    },
  };
};

export default BlogDetail;
