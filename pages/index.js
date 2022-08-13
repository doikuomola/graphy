import Head from "next/head";
import { PostCard, PostWidget } from "../components";
import Categories from "../components/Categories";
import { getAllPosts, graphcms } from "./api/video";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Graphy</title>
        <link rel="favicon" href="../public/favicon.ico" />
      </Head>
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mt-10">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard post={post} key={index} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4 text-white">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const { posts } = await graphcms.request(getAllPosts);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};
