/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";
import React from "react";

import logo from "../../../../assets/images/sytLogo.png";
import BlogStats from "../../blogs/sections/BlogStats";
import {
  facebook,
  instagram,
  linkedin,
  twitter,
} from "../../../../assets/images/socials";
import ShareBlog from "./ShareBlog";

function BlogHeader({
  id,
  likes,
  title,
  description,
  image,
  author,
  createdAt,
}) {
  const timeAgo = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  });

  return (
    <div className="flex flex-col">
      <div className="md:w-[864px] px-3 ">
        <h1 className="py-3 text-2xl md:text-4xl font-bold leading-normal text-center md:text-left">
          {title}
        </h1>

        <p className="text-base md:text-lg leading-normal text-center md:text-left">
          {description}
        </p>

        <div className="flex items-center gap-2 mt-5 md:my-3">
          <img
            src={logo}
            alt={author}
            className="w-10 h-10 object-cover rounded-full flex items-center justify-center"
          />

          <span className="text-sm md:text-base font-medium text-[#323433] capitalize">
            {author}
          </span>

          <small className="text-[#656767] text-xs">{timeAgo}</small>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-5">
        <img
          src={image}
          alt={title}
          className="object-cover overflow-hidden w-full md:h-[320px] md:rounded-xl px-4 md:px-0"
        />

        <div className="flex flex-row items-center justify-between px-3 ">
          <ShareBlog />

          <BlogStats likes={likes} blogId={id} />
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
