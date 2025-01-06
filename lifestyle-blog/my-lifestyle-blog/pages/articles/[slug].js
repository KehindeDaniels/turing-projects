import Head from "next/head";
import { Article } from "../../models/Article";
import { GetServerSideProps } from "next";

const ArticlePage = ({ article }) => {
  return (
    <div>
      <Head>
        <title>{article.title}</title>
      </Head>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const article = await Article.findOne({ slug: params.slug });
  return {
    props: {
      article: article.toJSON(),
    },
  };
};

export default ArticlePage;
