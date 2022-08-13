import React from "react";
import parse from "html-react-parser";

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white rounded-lg p-10 shadow-lg">
      <img
        src={post.image.url}
        alt={post.title}
        className="w-full h-100 rounded-lg object-cover"
      />
      <h1 className="my-4 text-2xl text-center font-semibold">{post.title}</h1>
      <p>{parse(post.content.html)}</p>
    </div>
  );
};

export default PostDetail;
