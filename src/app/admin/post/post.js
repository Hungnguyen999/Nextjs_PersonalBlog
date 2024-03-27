import React from "react";
import YourPosts from "@/components/AdminPost/YourPosts";
import CreatePostForm from "@/components/AdminPost/CreatePostForm";

import ListCategory from "@/components/List/ListCategory";
const Post = () => {
  return (
    <>
      <YourPosts />
      <ListCategory />
      <CreatePostForm />
    </>
  )
}
export default Post;