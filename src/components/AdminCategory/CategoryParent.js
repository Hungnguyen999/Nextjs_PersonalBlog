
import { useEffect, useState } from "react";
// import UploadFile from "../UploadFile/UploadFile";
import { useDispatch } from "react-redux";
import { createCategory } from "@/store/actions/categoryAction";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CategoryParent = (listCategory) => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState(null);
  const [parentID, setParentID] = useState(null);
  const [isChild, setIsChild] = useState(false);

  const categories = useSelector(state => state.blog_category.listCategory);


  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  // const [imageURL, setImageURL] = useState(null);

  const handleSaveCategory = () => {
    // e.preventDefault();
    // let imageURL = handleSubmitFile(e);
    setIsChild(false);
    console.log("dasdas" + imagePreview + categoryName + isChild);
    try {
      const response = dispatch(createCategory({ name: categoryName, isChild: false, imagePreview: imageURL }))
    }
    catch (error) {
      throw error;
    }
  }

  const handleDeleteImage = (e) => {
    setImagePreview(null);
  }

  const handleChangeName = (e) => {
    e.preventDefault();
    setCategoryName(e.target.value);
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmitFile = async () => {
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
          return responseData.imageUrl;
        } else {
          console.error('Error uploading image:', JSON.stringify(response));
        }
      } catch (error) {
        console.error('Error uploading image cant connect to server:', error);
      }
    }
  };

  // Upload file component
  const UploadFile = () => {
    return (
      <div className="flex items-center justify-center w-full">
        <form method='post'>
          {!imagePreview && <label for="dropzone-file" className="flex flex-col items-center text-center justify-center w-full h-80 p-5 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            {/* <input id="dropzone-file" name='file' type="file" accept="image/*" className="hidden" onChange={handleFileChange} /> */}
          </label>}
          {imagePreview &&
            <figure className="max-w-sm transition-all duration-300 cursor-pointer ">
              <a href="#">
                <img className="rounded-lg max-h-72 max-w-full" src={imagePreview} alt="image description" />
              </a>
              <figcaption className="flex px-4 text-lg py-4">
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  onClick={handleDeleteImage}
                  className="mx-auto text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  <FontAwesomeIcon icon={faTrash} className="fas fa-trash px-2"
                  ></FontAwesomeIcon>
                  Delete
                </button>
              </figcaption>
            </figure>
          }
        </form>
      </div>
    )
  }

  return (
    // <div className="category-manage__parent-category">
    //   <h1 className="py-5 text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">CREATE NEW CATEGORY</h1>
    //   <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
    //     {listCategoryParent && listCategoryParent.map((item) => {
    //       <a key={item._id} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
    //         <div className="p-2 md:p-2">
    //           <div className="flex justify-between items-center">
    //             <img className="w-20 h-20 rounded" src={item.imagePreview} alt="Category image" />
    //             <div>
    //               <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200 ml-2">
    //                 {item.name}
    //               </h3>
    //               <p className="text-sm text-gray-500 dark:text-neutral-500 ml-2">
    //                 {item.children.length} categories
    //               </p>
    //             </div>
    //             <div className="ps-3">
    //               <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
    //             </div>
    //           </div>
    //         </div>
    //       </a>
    //     })}

    //     <button className="group flex flex-col  bg-gray-50  border border-dashed shadow-sm rounded-xl  border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700" data-hs-overlay="#create-parent-categorymodal" >
    //       <div className="m-auto p-2 md:p-2">
    //         <div className="flex justify-between items-center text-center">
    //           <div className="text-blue-600 font-semibold text-2xl">
    //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    //             </svg>
    //           </div>
    //         </div>
    //       </div>
    //     </button>
    //     {/* Modal form add new category */}
    //     <form id="create-parent-categorymodal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
    //       <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
    //         <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
    //           <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
    //             <h3 className="font-bold text-gray-800 dark:text-white">
    //               CREATE NEW CHILD CATEGORY
    //             </h3>
    //             <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#create-parent-categorymodal">
    //               <span className="sr-only">Close</span>
    //               <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                 <path d="M18 6 6 18"></path>
    //                 <path d="m6 6 12 12"></path>
    //               </svg>
    //             </button>
    //           </div>
    //           <div className="p-4 overflow-y-auto">
    //             <div className="p-2">
    //               <h3 className='py-2 text-xl font-semibold text-gray-800 dark:text-neutral-200'>Create your category name</h3>
    //               {/* <input type="text" className="peer py-3 px-4 ps-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter category name" onChange={handleChangeName} /> */}
    //             </div>

    //             <div className="p-2">
    //               <h3 className='py-2 text-xl font-semibold text-gray-800 dark:text-neutral-200'>Upload category's icon</h3>
    //               {/* <UploadFile /> */}
    //             </div>
    //           </div>
    //           <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
    //             <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#create-parent-categorymodal">
    //               Close
    //             </button>
    //             <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
    //               Save changes
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    //   <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-basic-modal">
    //     Open modal
    //   </button>

    //   <div id="hs-basic-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
    //     <div class="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    //       <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
    //         <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
    //           <h3 class="font-bold text-gray-800 dark:text-white">
    //             Modal title
    //           </h3>
    //           <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#hs-basic-modal">
    //             <span class="sr-only">Close</span>
    //             <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //               <path d="M18 6 6 18"></path>
    //               <path d="m6 6 12 12"></path>
    //             </svg>
    //           </button>
    //         </div>
    //         <div class="p-4 overflow-y-auto">
    //           <p class="mt-1 text-gray-800 dark:text-neutral-400">
    //             This is a wider card with supporting text below as a natural lead-in to additional content.
    //           </p>
    //         </div>
    //         <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
    //           <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#hs-basic-modal">
    //             Close
    //           </button>
    //           <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
    //             Save changes
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-basic-modal">
        Open modal
      </button>

      <div id="hs-basic-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
        <div class="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 class="font-bold text-gray-800 dark:text-white">
                Modal title
              </h3>
              <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#hs-basic-modal">
                <span class="sr-only">Close</span>
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-y-auto">
              <p class="mt-1 text-gray-800 dark:text-neutral-400">
                This is a wider card with supporting text below as a natural lead-in to additional content.
              </p>
            </div>
            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#hs-basic-modal">
                Close
              </button>
              <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}