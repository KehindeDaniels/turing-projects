import Head from "next/head";
import { Article } from "../models/Article";
import { Update } from "../models/Update";
import Layout from "../components/Layout";

const HomePage = ({ articles, updates }) => {
  return (
    <Layout>
      <Head>
        <title>My Lifestyle Blog</title>
      </Head>
      <h1>Latest Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/articles/${article.slug}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <h1>Latest Updates</h1>
      <ul>
        {updates.map((update) => (
          <li key={update.slug}>
            <Link href={`/updates/${update.slug}`}>
              <a>{update.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const articles = await Article.find().sort({ createdAt: -1 }).limit(5);
  const updates = await Update.find().sort({ createdAt: -1 }).limit(5);
  return {
    props: {
      articles: articles.map((article) => article.toJSON()),
      updates: updates.map((update) => update.toJSON()),
    },
  };
};

export default HomePage;
