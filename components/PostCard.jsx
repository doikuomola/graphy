import Link from "next/link";
import React from "react";
import * as timeago from "timeago.js";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-white shadow-lg rounded-lg mb-10 lg:p-8">
      <div className="overflow-hidden">
        <img
          src={post.image.url}
          alt={post.title}
          className="w-full h-80 rounded-lg object-cover"
        />
      </div>
      <Link href={`/post/${post.slug}`}>
        <h1 className="my-4 text-2xl font-semibold text-center cursor-pointer hover:text-pink-600 transition duration-300 ">
          {post.title}
        </h1>
      </Link>
      <div className="flex justify-between px-4 items-center">
        <div className="flex items-center ">
          <img
            src={post.author.avatar.url}
            alt={post.author.name}
            className="h-8 w-8 rounded-full object-cover mr-2"
          />
          <span className="text-sm text-gray-600 font-semibold">
            {post.author.name}
          </span>
        </div>
        <div>
          <span className="text-sm text-gray-600">
            {timeago.format(post.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
