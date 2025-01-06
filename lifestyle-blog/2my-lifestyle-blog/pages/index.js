import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>My Lifestyle Blog</title>
      </Head>
      <h1>Welcome to My Lifestyle Blog</h1>
      <p>This is a blog about lifestyle, articles, and updates.</p>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
        <li>
          <Link href="/updates">Updates</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
