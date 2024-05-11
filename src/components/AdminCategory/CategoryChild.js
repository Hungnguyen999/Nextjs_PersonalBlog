
// import { useEffect, useState } from 'react';
// import UploadFile from '@/components/UploadFile/UploadFile';

// import { useDispatch, useSelector } from 'react-redux';
// import { EmptyState } from '../EmptyState/EmptyState';
// export const CategoryChild = () => {
//   const dispatch = useDispatch();
//   const [activeIndex, setActiveIndex] = useState(0); // Initialize active index

//   const [selectedCategoryName, setSelectedCategoryName] = useState(null);
//   const [listAllCategory, setListAllCategory] = useState(null);
//   const [selectedCategoryID, setSelectedCategoryID] = useState(null);
//   const [childCategoryName, setChildCategoryName] = useState(null);
//   const AllCategoryData = useSelector(state => state.blog_category.listCategory);

//   const [isActive, setIsActive] = useState(false);

//   const onSelectCategory = (e, index, categoryID, categoryName) => {
//     e.preventDefault()
//     setActiveIndex(index);
//     // setIsActive(!isActive);
//     setSelectedCategoryName(categoryName);
//     setSelectedCategoryID(categoryID);
//     console.log("selectedCategoryID" + selectedCategoryID + " " + selectedCategoryName)
//   }

//   // Require prepline
//   useEffect(() => {
//     require('preline');
//     if (AllCategoryData) {
//       // Set list data for render parent and child category
//       // setListCategoryParent(AllCategoryData.categories.filter(item => item.isChild === false));
//       setListAllCategory(AllCategoryData.categories);
//     }
//     else {
//       fetchDataCategories()
//     }
//     console.log("asdasdsadasd" + selectedCategoryID);
//   }, [AllCategoryData, listAllCategory]);

//   const fetchDataCategories = async () => {
//     try {
//       await dispatch(getAllCategory());
//       // response returned and set 2 value of 2 list: 
//       // 1/ listCategoryParent  -> filter in response data which one is NOT CHILD
//       // 2/ listAllCategory -> return whole of response data
//       console.log("load data" + JSON.stringify(AllCategoryData));

//       // Set as default parentID for createing child category 
//       // setSelectedCategoryID(AllCategoryData.categories[0]?._id);
//       // setSelectedCategoryName(AllCategoryData.categories[0]?.name);
//       // setListCategoryParent(respone.categories.filter(item => item.isChild === false));
//       // setListAllCategory(respone.categories);
//     }
//     catch (error) {
//       console.log("Error when fetching data" + error);
//       throw error;
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   // Child category Handling Functions
//   const handleSaveChildCategory = async (e) => {
//     e.preventDefault();
//     let imageURL = await handleSubmitFile(e);
//     console.log("helllooooo" + selectedCategoryID + " " + imageURL)
//     setIsChild(true);
//     try {
//       if (imageURL && childCategoryName) {
//         const response = await dispatch(createCategory({ name: childCategoryName, parentID: selectedCategoryID, isChild: true, imagePreview: imageURL }))
//         if (response) {
//           handleClearDataAfterSaveChildCate();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Create new child category Successful",
//             showConfirmButton: false,
//             timer: 1500
//           });
//           fetchDataCategories();
//         }
//       }
//       else {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Please fill in all values",
//           footer: '<a href="#">Why do I have this issue?</a>'
//         });
//       }

//     }
//     catch (error) {
//       throw error;
//     }
//   }

//   const handleClearDataAfterSaveChildCate = () => {
//     setSelectedCategoryName(null);
//     setSelectedCategoryID(null);
//     setChildCategoryName(null);
//     setFile(null);
//     setImagePreview(null);
//   }

//   const handleChangeChildCategoryName = (e) => {
//     e.preventDefault();
//     setChildCategoryName(e.target.value);
//   }
//   return (
//     <div class="category-manage__child-category">

//       {/* <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//         <div class="relative p-6 md:p-16">
//           <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
//             <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
//               <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
//                 Fully customizable rules to match your unique needs
//               </h2>


//               <nav class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
//                 <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
//                   <span class="flex">
//                     <svg class="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" /><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" /></svg>
//                     <span class="grow ms-6">
//                       <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Advanced tools</span>
//                       <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Use Preline thoroughly thought and automated libraries to manage your businesses.</span>
//                     </span>
//                   </span>
//                 </button>

//                 <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
//                   <span class="flex">
//                     <svg class="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
//                     <span class="grow ms-6">
//                       <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Smart dashboards</span>
//                       <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Quickly Preline sample components, copy-paste codes, and start right off.</span>
//                     </span>
//                   </span>
//                 </button>

//                 <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
//                   <span class="flex">
//                     <svg class="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
//                     <span class="grow ms-6">
//                       <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Powerful features</span>
//                       <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Reduce time and effort on building modern look design with Preline only.</span>
//                     </span>
//                   </span>
//                 </button>
//               </nav>

//             </div>


//             <div class="lg:col-span-6">
//               <div class="relative">
//                 <div>
//                   <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
//                     <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
//                   </div>

//                   <div id="tabs-with-card-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
//                     <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
//                   </div>

//                   <div id="tabs-with-card-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
//                     <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description" />
//                   </div>
//                 </div>

//                 <div class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
//                   <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
//                     <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
//                     <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
//                   </svg>
//                 </div>
//                 End
//               </div>
//             </div>

//           </div>


//           Back
//           <div class="absolute inset-0 grid grid-cols-12 size-full">
//             <div class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
//           </div>
//           End Back
//         </div>
//       </div> */}

//       <h1 class="py-5 text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">CREATE NEW CHILD CATEGORIES</h1>
//       <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center">
//         <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-7 lg:order-2 max-h-[35rem] overflow-scroll">
//           <h2 class="text-center text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
//             Fully customizable category
//           </h2>
//           <nav class="grid gap-4 p-5 mt-5 md:mt-10 " aria-label="Tabs" role="tablist">
//             {listAllCategory && listAllCategory.map((item, i) => {
//               return (
//                 <button key={i} type="button" className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 ${activeIndex === i ? "active" : ""}`} id={`tabs-with-card-item-${i}`} data-hs-tab={`#tabs-with-card-${i}`} aria-controls={`tabs-with-card-${i}`} role="tab" onClick={(e) => onSelectCategory(e, i, item._id, item.name)}>
//                   <span class="flex">
//                     <img class="w-20 h-20 rounded" src={item.imagePreview} alt="Large avatar" />
//                     <span class="grow ms-6">
//                       <span class="block text-lg font-semibold text-gray-800 dark:text-neutral-200">{item.name}</span>
//                       <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Use Preline thoroughly thought and automated libraries to manage your businesses.</span>
//                     </span>
//                   </span>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>

//         <div class="lg:col-span-6">
//           {listAllCategory && listAllCategory.map((item, i) => {
//             return (
//               <div key={i} id={`tabs-with-card-${i}`} role="tabpanel" className={i === 0 ? "max-height-[50rem] overflow-scroll" : "hidden"} aria-labelledby={`tabs-with-card-item-${i}`} >
//                 <div class="flex flex-col">
//                   <div class="-m-1.5 overflow-x-auto">
//                     <div class="p-1.5 max-w-full w-full inline-block align-middle ">
//                       <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">

//                         <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
//                           <div>
//                             <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200">
//                               {item.name}
//                             </h2>
//                           </div>
//                           <div>
//                             <div class="inline-flex gap-x-2">
//                               <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-800" href="#">
//                                 <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
//                                 Disable
//                               </a>
//                               <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal" >
//                                 <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
//                                 Create
//                               </a>
//                             </div>
//                           </div>
//                         </div>

//                         {item.children.length > 0 ? (
//                           <table class="max-w-full w-full divide-y divide-gray-200 dark:divide-neutral-700">
//                             <thead class="bg-gray-50 dark:bg-neutral-900">
//                               <tr>
//                                 <th scope="col" class="ps-6 py-3 text-start">
//                                   <label for="hs-at-with-checkboxes-main" class="flex">
//                                     <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main" />
//                                     <span class="sr-only">Checkbox</span>
//                                   </label>
//                                 </th>

//                                 <th scope="col" class="px-6 py-3 text-start">
//                                   <div class="flex items-center gap-x-2">
//                                     <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
//                                       Category
//                                     </span>
//                                   </div>
//                                 </th>

//                                 <th scope="col" class="px-6 py-3 text-start">
//                                   <div class="flex items-center gap-x-2">
//                                     <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
//                                       Status
//                                     </span>
//                                   </div>
//                                 </th>

//                                 <th scope="col" class="px-6 py-3 text-start">
//                                   <div class="flex items-center gap-x-2">
//                                     <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
//                                       Actions
//                                     </span>
//                                   </div>
//                                 </th>
//                               </tr>
//                             </thead>

//                             <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
//                               {item.children.map((child, j) => {
//                                 return (
//                                   <tr key={j}>
//                                     <td class="size-px whitespace-nowrap">
//                                       <div class="ps-6 py-2">
//                                         <label for="hs-at-with-checkboxes-1" class="flex">
//                                           <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" checked />
//                                           <span class="sr-only">Checkbox</span>
//                                         </label>
//                                       </div>
//                                     </td>
//                                     <td class="size-px whitespace-nowrap">
//                                       <div class="px-6 py-2">
//                                         <div class="flex items-center gap-x-2">
//                                           <img class="inline-block size-[46px] rounded-lg" src={child.imagePreview} alt="Image Description" />

//                                           <div class="grow">
//                                             <span class="text-sm text-gray-600 dark:text-neutral-400">{child.name}</span>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </td>

//                                     <td class="size-px whitespace-nowrap">
//                                       <div class="px-6 py-3">
//                                         <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
//                                           <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                                             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                                           </svg>
//                                           Active
//                                         </span>
//                                       </div>
//                                     </td>
//                                     <td class="size-px whitespace-nowrap">
//                                       <div class="gap-x-[0.25rem] inline-flex border border-gray-200 rounded-full p-0.5 dark:border-neutral-700">
//                                         <button type="button" class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200">
//                                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                                             <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
//                                           </svg>
//                                         </button>
//                                         <button type="button" class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200">
//                                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                                             <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
//                                           </svg>
//                                         </button>
//                                         <button type="button" class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200">
//                                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                                             <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//                                           </svg>

//                                         </button>
//                                       </div>
//                                     </td>
//                                   </tr>
//                                 )
//                               })}
//                             </tbody>

//                           </table>
//                         ) : <EmptyState message={"No data to show"} />}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//       <div id="hs-vertically-centered-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
//         <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
//           <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
//             <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
//               <h3 class="font-bold text-gray-800 dark:text-white">
//                 CREATE NEW CHILD CATEGORY : {selectedCategoryID} + {selectedCategoryName}
//               </h3>
//               <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#hs-vertically-centered-modal">
//                 <span class="sr-only">Close</span>
//                 <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                   <path d="M18 6 6 18"></path>
//                   <path d="m6 6 12 12"></path>
//                 </svg>
//               </button>
//             </div>
//             <div class="p-4 overflow-y-auto">
//               <div class="p-2">
//                 <h3 className='py-2 text-xl font-semibold text-gray-800 dark:text-neutral-200'>Create your category name</h3>
//                 <input type='text' class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter name" onChange={handleChangeChildCategoryName} />
//                 <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
//                   <svg class="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                     <circle cx="12" cy="7" r="4"></circle>
//                   </svg>
//                 </div>
//               </div>

//               <div class="p-2">
//                 <h3 className='py-2 text-xl font-semibold text-gray-800 dark:text-neutral-200'>Upload category's icon</h3>
//                 <UploadFile />
//               </div>
//             </div>
//             <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
//               <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#hs-vertically-centered-modal">
//                 Close
//               </button>
//               <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" onClick={handleSaveChildCategory}>
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import { useState, useEffect } from 'react';

import UploadFile from '@/components/UploadFile/UploadFile';

import { EmptyState } from '../EmptyState/EmptyState';

export const CategoryChild = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryID, setSelectedCategoryID] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);
  const [childCategoryName, setChildCategoryName] = useState(null);

  // Set selected category when categories prop changes
  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory(categories[0]);
      setSelectedCategoryID(categories[0]._id);
      setSelectedCategoryName(categories[0].name);
    }
  }, [categories]);


  // Child category Handling Functions
  const handleSaveChildCategory = async (e) => {
    e.preventDefault();
    let imageURL = await handleSubmitFile(e);
    console.log("helllooooo" + selectedCategoryID + " " + imageURL)
    setIsChild(true);
    try {
      if (imageURL && childCategoryName) {
        const response = await dispatch(createCategory({ name: childCategoryName, parentID: selectedCategoryID, isChild: true, imagePreview: imageURL }))
        if (response) {
          handleClearDataAfterSaveChildCate();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Create new child category Successful",
            showConfirmButton: false,
            timer: 1500
          });
          fetchDataCategories();
        }
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in all values",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }

    }
    catch (error) {
      throw error;
    }
  }

  const handleClearDataAfterSaveChildCate = () => {
    setSelectedCategoryName(null);
    setSelectedCategoryID(null);
    setChildCategoryName(null);
    setFile(null);
    setImagePreview(null);
  }

  const handleChangeChildCategoryName = (e) => {
    e.preventDefault();
    setChildCategoryName(e.target.value);
  }

  // Upload file component
  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error('No file selected');
      return;
    }
    else {
      const formData = new FormData();
      formData.append('file', file);
      try {
        console.log("sadsad" + JSON.stringify(formData))
        const response = await fetch('http://localhost:3001/upload/post-preview-image', {
          method: 'POST',
          body: formData,
        });
        const responseData = await response.json();
        if (response.status == 200) {
          console.log("file: " + responseData)
          return responseData.imageUrl;
        } else {
          console.error('Error uploading image:', JSON.stringify(response));
        }
      } catch (error) {
        console.error('Error uploading image cant connect to server:', error);
      }
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex">
      {/* Navigation bar */}
      <div className="w-2/4 p-4 bg-gray-200">
        <h2 className="font-bold text-center text-3xl">Categories</h2>
        <ul className="mt-4">
          {categories && categories.map((item, i) => {
            return (
              <button key={item.id} type="button" className={`text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl  dark:hover:bg-neutral-700 cursor-pointer ${item === selectedCategory ? 'font-bold' : ''}`}
                onClick={() => handleCategorySelect(item)} >
                <span class="flex">
                  <img class="w-20 h-20 rounded" src={item.imagePreview} alt="Large avatar" />
                  <span class="grow ms-6">
                    <span class="block text-lg font-semibold text-gray-800 dark:text-neutral-200">{item.name}</span>
                    <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Use Preline thoroughly thought and automated libraries to manage your businesses.</span>
                  </span>
                </span>
              </button>
            );
          })}
          {categories && categories.map((category) => (
            <li
              key={category.id}
              className={`text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl  dark:hover:bg-neutral-700 cursor-pointer ${category === selectedCategory ? 'font-bold' : ''
                }`}
              onClick={() => handleCategorySelect(category)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedCategory ? (
        <div className="w-2/4 p-4">
          <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 max-w-full w-full inline-block align-middle ">
                <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">

                  <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                    <div>
                      <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                        {selectedCategory.name}
                      </h2>
                    </div>
                    <div>
                      <div class="inline-flex gap-x-2">
                        <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-red-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-800" href="#">
                          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                          Disable
                        </a>
                        <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-vertically-centered-modal" >
                          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                          Create
                        </a>
                      </div>
                    </div>
                  </div>

                  <table class="max-w-full w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead class="bg-gray-50 dark:bg-neutral-900">
                      <tr>
                        <th scope="col" class="ps-6 py-3 text-start">
                          <label for="hs-at-with-checkboxes-main" class="flex">
                            <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main" />
                            <span class="sr-only">Checkbox</span>
                          </label>
                        </th>

                        <th scope="col" class="px-6 py-3 text-start">
                          <div class="flex items-center gap-x-2">
                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                              Category
                            </span>
                          </div>
                        </th>

                        <th scope="col" class="px-6 py-3 text-start">
                          <div class="flex items-center gap-x-2">
                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                              Status
                            </span>
                          </div>
                        </th>

                        <th scope="col" class="px-6 py-3 text-start">
                          <div class="flex items-center gap-x-2">
                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                              Actions
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                      {selectedCategory?.children.map((child, j) => {
                        return (
                          <tr key={j}>
                            <td class="size-px whitespace-nowrap">
                              <div class="ps-6 py-2">
                                <label for="hs-at-with-checkboxes-1" class="flex">
                                  <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" checked />
                                  <span class="sr-only">Checkbox</span>
                                </label>
                              </div>
                            </td>
                            <td class="size-px whitespace-nowrap">
                              <div class="px-6 py-2">
                                <div class="flex items-center gap-x-2">
                                  <img class="inline-block size-[46px] rounded-lg" src={child.imagePreview} alt="Image Description" />

                                  <div class="grow">
                                    <span class="text-sm text-gray-600 dark:text-neutral-400">{child.name}</span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td class="size-px whitespace-nowrap">
                              <div class="px-6 py-3">
                                <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                  </svg>
                                  Active
                                </span>
                              </div>
                            </td>
                            <td class="size-px whitespace-nowrap">
                              <div class="gap-x-[0.25rem] inline-flex border border-gray-200 rounded-full p-0.5 dark:border-neutral-700">
                                <button type="button" class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                  </svg>
                                </button>
                                <button type="button" class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                  </svg>
                                </button>
                                <button type="button" class="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>

                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>


        </div>
      ) : <EmptyState message={"No data to show"} />}
      <div id="hs-vertically-centered-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 class="font-bold text-gray-800 dark:text-white">
                CREATE NEW CHILD CATEGORY : {selectedCategoryID} + {selectedCategoryName}
              </h3>
              <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#hs-vertically-centered-modal">
                <span class="sr-only">Close</span>
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-y-auto">
              <div class="p-2">
                <h3 className='py-2 text-xl font-semibold text-gray-800 dark:text-neutral-200'>Create your category name</h3>
                <input type='text' class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter name" onChange={handleChangeChildCategoryName} />
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg class="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>

              <div class="p-2">
                <h3 className='py-2 text-xl font-semibold text-gray-800 dark:text-neutral-200'>Upload category's icon</h3>
                <UploadFile />
              </div>
            </div>
            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#hs-vertically-centered-modal">
                Close
              </button>
              <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" onClick={handleSaveChildCategory}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {JSON.stringify(selectedCategory)} */}
      {/* <h1>{selectedCategory?.name}</h1> */}
      {/* List of child categories */}
      {/* <div className="w-2/4 p-4">
        <h2 className="text-lg font-bold">{selectedCategory?.name} Children</h2>
        <ul className="mt-4">
          {selectedCategory && selectedCategory?.children.map((child) => (
            <li key={child.id} className="flex items-center justify-between border-b py-2">
              <span>{child.name}</span>
              <div>
                <button
                  className="px-4 py-1 bg-green-500 text-white rounded mr-2"
                  disabled={child.disabled}
                  onClick={() => console.log(`Creating ${child.name}`)}
                >
                  Create
                </button>
                <button
                  className="px-4 py-1 bg-red-500 text-white rounded"
                  disabled={child.disabled}
                  onClick={() => console.log(`Disabling ${child.name}`)}
                >
                  Disable
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </div >
  );
}
