import Head from "next/head";
import { Update } from "../../models/Update";
import { GetServerSideProps } from "next";

const UpdatePage = ({ update }) => {
  return (
    <div>
      <Head>
        <title>{update.title}</title>
      </Head>
      <h1>{update.title}</h1>
      <p>{update.content}</p>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const update = await Update.findOne({ slug: params.slug });
  return {
    props: {
      update: update.toJSON(),
    },
  };
};

export default UpdatePage;
