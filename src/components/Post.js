import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "@/store/actions/postAction";

export default function Post() {
  const [listPost, setListPost] = useState([]);
  const dispatch = useDispatch();
  const allPost = useSelector(state => state.blog_post.listPost)

  useEffect(() => {
    if (allPost) {
      setListPost(allPost.ListPost);
    }
    else {
      dispatch(getAllPost());
    }
  }, [allPost])

  return (
    <div className="bg-white py-24 sm:py-32">
      <button type="button" data-hs-overlay="#hs-unstyled-modal">
        Open modal
      </button>

      <div id="hs-unstyled-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div class="pointer-events-auto">
            Modal content
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {listPost && listPost.map((post) => {
            return (
              <Link key={post._id} href={`/blog/${encodeURIComponent(post._id)}`}>
                <article key={post._id} className="flex max-w-xl flex-col items-start justify-between relative">
                  <img src={post.image_preview_url} alt="" className="absolute w-full h-40 object-cover opacity-65" />
                  <div className="pt-20 px-4 w-full">
                    <div className="relative mt-8 flex items-center gap-x-4 bg-white p-2 rounded-t-md">
                      <img src='https://calnewport.com/wp-content/uploads/2022/09/maincalbanner.jpg' alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a
                            href="{post.author.href}">
                            <span className="absolute inset-0" />
                            {post.author_name}
                          </a>
                        </p>
                        <p className="text-gray-600">
                          {post.role}
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="" />
                          {post.title}
                        </a>
                      </h3>
                      <div className="flex items-center gap-x-4 text-xs">
                        <a href="#" class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-white-700 dark:text-blue-400 mb-2">
                          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m11.5 11.5 2.071 1.994M4 10h5m11 0h-1.5M12 7V4M7 7V4m10 3V4m-7 13H8v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L10 17Zm-5 3h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                          </svg>

                          <time dateTime={post.createdAt} >
                            {post.createdAt}
                          </time>
                        </a>
                        <a href="#" class="relative z-10 rounded-full bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-white-700 dark:text-purple-400 mb-2">
                          <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z" />
                          </svg>

                          16 comments
                        </a>
                      </div>
                      <article className="max-h-36 min-h-36 overflow-hidden break-all whitespace-normal" dangerouslySetInnerHTML={{ __html: post.overview_passage }} />
                    </div>
                    <button
                      class="mx-auto flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                      type="button">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                        class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                      </svg>
                    </button>

                  </div>

                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
