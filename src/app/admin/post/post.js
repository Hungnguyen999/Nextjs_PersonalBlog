import React, { useEffect, useState } from "react";
import YourPosts from "@/components/AdminPost/YourPosts";
import CreatePostForm from "@/components/AdminPost/CreatePostForm";
import ListCategory from "@/components/List/ListCategory";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAPI } from "@/store/utils/API_Category";


const Post = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (!category) {
      getDataCategory();
    }
  }, [])

  const getDataCategory = async () => {
    try {
      const response = await dispatch(getAllCategoryAPI);
      console.log("respone " + JSON.stringify(response.categories));
      setCategory(response.categories)
    }
    catch (error) {
      console.log("error when fetching category :" + error)
      throw error
    }
  }

  return (
    <div className="creat-post__section">
      {/* <YourPosts /> */}
      <ListCategory categories={category} />
      <CreatePostForm />
    </div>
  )
}
export default Post;