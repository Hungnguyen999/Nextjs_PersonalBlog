'use client'
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, createCategory } from '@/store/actions/categoryAction';
import { EmptyState } from '@/components/EmptyState/EmptyState';
import { CategoryChild } from '@/components/AdminCategory/CategoryChild';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export const Categories = () => {
  const dispatch = useDispatch();
  const [listCategoryParent, setListCategoryParent] = useState([]);
  const [listAllCategory, setListAllCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const AllCategoryData = useSelector(state => state.blog_category.listCategory);

  // Parent category
  const [categoryName, setCategoryName] = useState(null);
  const [isChild, setIsChild] = useState(false);
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Child category
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);
  const [selectedCategoryID, setSelectedCategoryID] = useState(null);
  const [childCategoryName, setChildCategoryName] = useState(null);
  const [previousChildCategory, setPreviousChildCategory] = useState(null);


  const [selectedCategory, setSelectedCategory] = useState(null);

  // Require prepline
  useEffect(() => {
    require('preline');
    if (AllCategoryData) {
      // Set list data for render parent and child category
      setListCategoryParent(AllCategoryData.categories.filter(item => item.isChild === false));
      setListAllCategory(AllCategoryData.categories);
      setSelectedCategory(!previousChildCategory ? AllCategoryData.categories[0] : previousChildCategory);
      setSelectedCategoryID(!previousChildCategory ? AllCategoryData.categories[0]?._id : previousChildCategory._id);
      setSelectedCategoryName(!previousChildCategory ? AllCategoryData.categories[0]?.name : previousChildCategory.name);
    }
    else {
      fetchDataCategories()
    }
  }, [AllCategoryData]);

  const fetchDataCategories = async () => {
    try {
      await dispatch(getAllCategory());
      // response returned and set 2 value of 2 list: 
      // 1/ listCategoryParent  -> filter in response data which one is NOT CHILD
      // 2/ listAllCategory -> return whole of response data
      // console.log("load data" + JSON.stringify(AllCategoryData));
    }
    catch (error) {
      console.log("Error when fetching data" + error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  // Parent Catgory Handling Functions
  const handleSaveCategory = async (e) => {
    e.preventDefault();
    let imageURL = await handleSubmitFile(e);
    setIsChild(false);
    try {
      if (imageURL && categoryName) {
        const response = await dispatch(createCategory({ name: categoryName, isChild: isChild, imagePreview: imageURL }))
        handleClearDataAfterSave();

        if (response) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Create new parent category successful",
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

  const handleClearDataAfterSave = () => {
    setCategoryName(null);
    setFile(null);
    setImagePreview(null);
  }

  // Child category Handling Functions
  const handleSaveChildCategory = async (e) => {
    e.preventDefault();
    let imageURL = await handleSubmitFile(e);
    console.log("helllooooo" + selectedCategoryID + " " + imageURL)
    setIsChild(true);
    try {
      if (imageURL && childCategoryName) {
        const response = await dispatch(createCategory({ name: childCategoryName, parentID: selectedCategoryID, isChild: true, imagePreview: imageURL }))
        handleClearDataAfterSaveChildCate();

        fetchDataCategories();
        if (response) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Create new child category Successful",
            showConfirmButton: false,
            timer: 1500
          });
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
    setSelectedCategoryName("");
    setSelectedCategoryID("");
    setChildCategoryName("");
    setFile("");
    setImagePreview("");
  }

  const handleChangeChildCategoryName = (e) => {
    e.preventDefault();
    setChildCategoryName(e.target.value);
  }

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
            <input id="dropzone-file" name='file' type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
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
                  onClick={e => handleDeleteImage(e)}
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

  const handleDeleteImage = (e) => {
    setFile(null);
    setImagePreview(null);
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!file && !imagePreview) {
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

  // Child component handling functions
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPreviousChildCategory(category);
    setSelectedCategoryID(category?._id)
    setSelectedCategoryName(category?.name);
  };

  return (
    <div class="category-manage max-w-[85rem] px-4 py-10 sm:px-6 lg:py-2 mx-auto">
      <div className="category-manage__parent-category">
        <h1 className="py-5 text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">CREATE NEW CATEGORY</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {listCategoryParent && Object.keys(listCategoryParent).map((item) => {
            return (
              <a key={listCategoryParent[item]._id} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="#">
                <div className="p-2 md:p-2">
                  <div className="flex justify-between items-center">
                    <img className="w-20 h-20 rounded" src={listCategoryParent[item].imagePreview} alt="Category image" />
                    <div>
                      <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200 ml-2">
                        {listCategoryParent[item].name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-neutral-500 ml-2">
                        {listCategoryParent[item].children.length} categories
                      </p>
                    </div>
                    <div className="ps-3">
                      <svg className="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
          <button className="group flex flex-col  bg-gray-50  border border-dashed shadow-sm rounded-xl  border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700" data-hs-overlay="#create-parent-categorymodal" >
            <div className="m-auto p-2 md:p-2">
              <div className="flex justify-between items-center text-center">
                <div className="text-blue-600 font-semibold text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
          {/* Modal form add new category */}
          <div id="create-parent-categorymodal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
              <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    CREATE NEW CATEGORY
                  </h3>
                  <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-overlay="#create-parent-categorymodal">
                    <span className="sr-only">Close</span>
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>
                <div className="p-4 overflow-y-auto">
                  <div className="p-2">
                    <h3 className='py-2 text-xl font-semibold text-gray-800 dark:text-neutral-200'>Create your parent category name</h3>
                    <input type="text" className="peer py-3 px-4 ps-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter category name" onChange={(e) => setCategoryName(e.target.value)} value={categoryName || ''} />
                  </div>

                  <div className="p-2">
                    <h3 className='py-2 text-xl font-semibold text-gray-800 dark:text-neutral-200'>Upload category's icon</h3>
                    <UploadFile />
                  </div>
                </div>
                <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                  <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-overlay="#create-parent-categorymodal">
                    Close
                  </button>
                  <button onClick={handleSaveCategory} id='save-button' className="on-close py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#create-parent-categorymodal">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="category-manage__child-category">
        <h1 className="py-5 text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">CREATE NEW CHILD CATEGORY</h1>
        <div className="flex">
          {/* Navigation bar */}
          <div className="w-2/4 p-4 bg-slate-100 rounded-3xl">
            <h2 className="font-bold text-center text-3xl">Categories</h2>
            <ul className="mt-4">
              {listAllCategory && listAllCategory.map((item, i) => {
                return (
                  <button key={item._id} type="button" className={`text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl  dark:hover:bg-neutral-700 cursor-pointer ${item === selectedCategory ? 'font-bold focus:outline-none focus:ring focus:ring-violet-300' : ''}`}
                    onClick={() => handleCategorySelect(item)} >
                    <span class="flex">
                      <img class="w-20 h-20 rounded" src={item?.imagePreview} alt="Large avatar" />
                      <span class="grow ms-6">
                        <span class="block text-lg font-semibold text-gray-800 dark:text-neutral-200">{item?.name}</span>
                        <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Use Preline thoroughly thought and automated libraries to manage your businesses.</span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </ul>
          </div>
          {/** Table list child categories  */}
          {listAllCategory && (
            <div className="w-2/4 p-4">
              <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                  <div class="p-1.5 max-w-full w-full inline-block align-middle ">
                    <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">

                      <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                        <div>
                          <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                            {selectedCategoryName}
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
                      {(listAllCategory && selectedCategory.children.length > 0) ? listAllCategory.map((item, i) => {
                        if (item._id == selectedCategoryID) {
                          return (
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
                                {item?.children.map((child, j) => {
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
                          );
                        }
                      }) : (<EmptyState message={"No data to show"} />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Form modal create child category */}
          <div id="hs-vertically-centered-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
            <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
              <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                  <h3 class="font-bold text-gray-800 dark:text-white">
                    CREATE NEW CHILD CATEGORY :{selectedCategoryID} + {selectedCategoryName}
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
                    <input type='text' class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter name" onChange={handleChangeChildCategoryName} value={childCategoryName} />
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
      </div>
    </div >
  )
}
export default Categories;