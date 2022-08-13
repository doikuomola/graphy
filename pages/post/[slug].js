import React from "react";
import { Author, Comments, PostDetail, PostWidget } from "../../components";
import Categories from "../../components/Categories";
import { getAllPosts, getPost, graphcms } from "../api/video";

const Post = ({ post }) => {
  return (
    <div className="container mx-auto mt-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post} />
          <Comments post={post} />
        </div>
        <div className="col-span-1 lg:col-span-4 text-white">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const { posts } = await graphcms.request(getAllPosts);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const { post } = await graphcms.request(getPost, { slug });

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};
