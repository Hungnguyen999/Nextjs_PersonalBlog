'use client'
import { useEffect, useState } from 'react';
const ListCategory = ({ categories }) => {
  const [listChosenCategory, setListChosenCategory] = useState([]);

  const handleAddCategory = (e, value, name) => {
    e.preventDefault()
    setListChosenCategory(listChosenCategory => {
      // Check if the item with the same childCategoryID already exists
      if (!listChosenCategory.some(item => item.childCategoryID === value)) {
        // If it doesn't exist, add the new item
        return [...listChosenCategory, { childCategoryID: value, childCategoryName: name }];
      }
      // If it already exists, return the original array
      return listChosenCategory;
    });
  }

  const handleDeleteCategory = (e, value) => {
    e.preventDefault();
    setListChosenCategory(listChosenCategory => {
      const updatedList = listChosenCategory.filter(item => item.childCategoryID !== value);
      return updatedList;
    })
  }


  // Require prepline
  useEffect(() => {
    require('preline');
  }, []);
  return (
    <div className='section__list-category'>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Choose  <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">your topic</mark></h1>
      <header class="grid grid-flow-row auto-rows-max  sm:flex-nowrap z-50 w-full bg-white text-sm py-4 sm:py-0 dark:bg-gray-800">
        <nav class="w-full mx-auto" aria-label="Global">
          <div class="relative md:flex md:items-center md:justify-between">
            <div class="flex items-center justify-between">
              <img class="inline-block size-[62px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
              <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand"></a>
              <div class="md:hidden">
                <button type="button" class="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                  <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                  <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </div>
            </div>

            <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
              <div class="overflow-hidden overflow-y-auto max-h-[100vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div class="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-neutral-700">
                  {categories && categories.map(category => (
                    < div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                      <button type="button" class="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-neutral-200 dark:hover:text-neutral-500">
                        {category?.name}
                        <svg class="flex-shrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      </button>
                      {category.children && category.children.map(childCategory => (
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-10 top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg dark:bg-neutral-800 dark:divide-neutral-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                          <div class="grid grid-cols-2 md:grid-cols-10">
                            <div class="md:col-span-3">
                              <div class="flex flex-col py-6 px-3 md:px-6">
                                <div class="space-y-4">
                                  <span class="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">About us</span>
                                  <a onClick={(e) => handleAddCategory(e, childCategory._id, childCategory.name)} class="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200" href="#">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                                    <div class="grow">
                                      <p>{childCategory?.name}</p>
                                    </div>
                                  </a>
                                  <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200" href="#">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="14" y="3" rx="1" /><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" /></svg>
                                    <div class="grow">
                                      <p>Integrations</p>
                                    </div>
                                  </a>
                                  <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200" href="#">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                                    <div class="grow">
                                      <p>Guides</p>
                                    </div>
                                  </a>
                                  <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200" href="#">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2" /><path d="M11 13h4" /><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /></svg>
                                    <div class="grow">
                                      <p>API Reference</p>
                                    </div>
                                  </a>
                                  <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200" href="#">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                    <div class="grow">
                                      <p>API Status</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="md:col-span-3">
                              <div class="flex flex-col py-6 px-3 md:px-6">
                                <div class="space-y-4">
                                  <span class="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">Support</span>

                                  <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200" href="#">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                                    <div class="grow">
                                      <p>Help Center</p>
                                    </div>
                                  </a>

                                  <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200" href="#">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" /></svg>
                                    <div class="grow">
                                      <p>Developer Hub</p>
                                    </div>
                                  </a>

                                  <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200" href="#">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    <div class="grow">
                                      <p>Community Forum</p>
                                    </div>
                                  </a>
                                </div>

                                <div class="mt-7 space-y-4">
                                  <span class="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">Partners</span>

                                  <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200" href="#">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" /><polyline points="14 2 14 8 20 8" /><path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M7 16.5 8 22l-3-1-3 1 1-5.5" /></svg>
                                    <div class="grow">
                                      <p>Become a Partner</p>
                                    </div>
                                  </a>

                                  <a class="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200" href="#">
                                    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5 4 4" /><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" /><path d="m8 6 2-2" /><path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" /><path d="m18 16 2-2" /><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" /></svg>
                                    <div class="grow">
                                      <p>Build on Preline</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="col-span-full md:col-span-4">
                              <div class="flex flex-col bg-gray-50 p-6 dark:bg-neutral-700">
                                <span class="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">Customer stories</span>

                                <a class="mt-4 group" href="#">
                                  <div class="aspect-w-16 aspect-h-9">
                                    <img class="w-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="Image Description" />
                                  </div>
                                  <div class="mt-2">
                                    <p class="text-gray-800 dark:text-neutral-200">Preline Projects has proved to be most efficient cloud based project tracking and bug tracking tool.</p>
                                    <p class="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500">
                                      Learn more
                                      <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
        < div className="flex flex-wrap mt-5">
          {listChosenCategory && listChosenCategory.map(category => (
            <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
              <span className="mr-2">{category?.childCategoryName}</span>
              <svg onClick={(e) => handleDeleteCategory(e, category?.childCategoryID)} className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ))}
        </div>

      </header >
    </div >
  )
}
export default ListCategory;