'use client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostByID } from '@/store/actions/postAction'
import BlogPageLoading from "@/components/SkeletonLoading/BlogPageLoading";
import BlogSidebar from './BlogSidebar';

import { useRouter } from 'next/router';

const BlogContent = ({ blogID }) => {
  const dispatch = useDispatch();
  const blogData = useSelector(state => state.blog_post.post);
  const isLoading = useSelector(state => state.blog_post.loading);

  useEffect(() => {
    if (blogID) {
      FetchBlogData();
    }
  }, [blogID]);


  const FetchBlogData = async () => {
    try {
      await dispatch(getPostByID({ blogID }));
    }
    catch (error) {
      console.log("Get post error" + error.message);
    }
  }

  return (
    <>
      {(isLoading) && (<BlogPageLoading />)}
      {(!isLoading) && <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className='max-w-7xl m-auto'>
            <img
              className=" max-w-none ounded-lg object-cover w-full max-h-96"
              src={blogData.post?.image_preview_url}
              alt=""
            />
          </div>
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>

        <BlogSidebar />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:items-start lg:gap-y-4 p-6 lg:px-8">
          <div className='max-w-7xl m-auto'>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-8xl lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-4xl">
                  <p className="text-base font-semibold leading-7 text-indigo-600">{blogData.post?.createdAt}</p>
                  <p className="text-base font-semibold leading-7 text-indigo-600">{blogData.post?.author_id}</p>
                  <p className="text-base font-semibold leading-7 text-indigo-600">16 comments</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> {blogData.post?.title}</h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    {blogData.post?.title}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-8xl lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-4xl">
                  <div dangerouslySetInnerHTML={{ __html: blogData.post?.content }} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      }
    </>
  )
}

export default BlogContent;