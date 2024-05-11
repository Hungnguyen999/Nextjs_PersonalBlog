'use client'
import React, { useEffect, useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '@/store/actions/postAction';
import SuccessDialog from '@/components/SuccessDialog';
import FailureDialog from "@/components/FailureDialog";

const CreatePostForm = ({ value }) => {
  const dispatch = useDispatch();
  const [editorContent, setEditorContent] = useState('');
  const [title, setTitle] = useState("");
  const [overviewPassage, setOverviewPassage] = useState(""); // This overview will be showed as a introduction of a blog at homepage
  const [authorId, setAuthorId] = useState("6607c0cd6e1c16a9c64abb6c");
  const category_id = "23233232";
  const editorRef = useRef(null); // Create a ref for the TinyMCE editor

  // upload form state 
  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [previewUpload, setpreviewUpload] = useState(null)

  // Save 2 category: first is parent cate, second is child
  // When sorting you also can get this blog by clicking the parent cate
  const [selectCategory, setSelectCategory] = useState([]);
  const createFailed = useSelector(state => state.blog_post.error);
  const createdSuccess = useSelector(state => state.blog_post.post);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
  };
  const handleOverviewChange = (content, editor) => {
    setOverviewPassage(content);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setpreviewUpload(URL.createObjectURL(e.target.files[0]));
  };

  const handleDeleteImage = (e) => {
    setpreviewUpload(null);
  }

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
          setUploadedImageUrl(responseData.imageUrl);
          console.log('Image uploaded successfully' + uploadedImageUrl);
          return responseData.imageUrl
        } else {
          console.error('Error uploading image:', JSON.stringify(response));
        }
      } catch (error) {
        console.error('Error uploading image cant connect to server:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageURL = await handleSubmitFile(e)
      setAuthorId("6607c0cd6e1c16a9c64abb6c")
      console.log("Hello from post: " + imageURL);
      await dispatch(createPost({
        title: title,
        author_id: authorId,
        category_id: category_id,
        content: editorContent,
        image_preview_url: imageURL,
        overview_passage: overviewPassage,
      }))
      // Clear the content of the TinyMCE editor
      if (editorRef.current) {
        editorRef.current.setContent('');
      }

      // Clear the content state variable
      setEditorContent("");
      setTitle("");
      setOverviewPassage("");
      handleDeleteImage();
    }
    catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const UploadFile = () => {
    return (
      <div class="flex items-center justify-center w-full">
        <form method='post' onSubmit={handleSubmit}>
          {!previewUpload && <label for="dropzone-file" class="flex flex-col items-center text-center justify-center w-full h-80 p-5 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" name='file' type="file" accept="image/*" class="hidden" onChange={handleFileChange} />
            <button type="submit" onClick={handleSubmitFile}>Upload</button>
          </label>}
          {previewUpload &&
            <figure class="max-w-sm transition-all duration-300 cursor-pointer ">
              <a href="#">
                <img class="rounded-lg" src={previewUpload} className='max-h-72 max-w-full' alt="image description" />
              </a>
              <figcaption class="flex px-4 text-lg py-4">
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  onClick={handleDeleteImage}
                  class="mx-auto text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
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
    <>
      <div className='section__post-title'>
        <div class="mb-6">
          <h1 class="my-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-yellow-400">Your header title</span> here </h1>
          <input onChange={handleChangeTitle} type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
      </div>
      <div className='section__post-overview'>
        {createdSuccess && < SuccessDialog
          title={"Tạo bài viết thành công"}
          message={"Hãy cùng đóng góp chia sẻ kiến thức cho cộng đồng bạn nhé ^o^"}
          buttonMess={"Tạo thêm bài viết"} />}
        {createFailed && <FailureDialog children={createFailed} message={"Tạo bài viết không thành công"} />}
        <form className='overview-editor'>
          <div class="grid lg:grid-rows-2 md:flex lg:grid-flow-col gap-4 justify-between">
            <div class="flex-1">
              <h1 class="my-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Create your</span> blog's overview</h1>
              <p class="mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Describe your main ideas in your sharing post</p>
              <Editor
                value={value}
                onInit={(evt, overviewPassage) => editorRef.current = overviewPassage}
                onEditorChange={handleOverviewChange}
                apiKey="y6m2xxn2gq36exhlbattjbl50ovhyersr28po4up3gz09bms"
                init={{
                  height: 350,
                  menubar: true,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              />
            </div>
            <div class="flex-1 text-center">
              <h1 class="my-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-red-400">Upload your</span> preview image</h1>
              <p class="mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Upload your image for your blog's preview</p>

              {/* Uploading file */}
              <UploadFile />
            </div>
          </div>
        </form>
        <div className='section__post-content'>
          <form >
            <div className='=blogcontent-editor'>
              <h1 class="my-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-red-400">Write something</span> here </h1>
              <Editor
                value={value}
                onInit={(evt, editor) => editorRef.current = editor}
                onEditorChange={handleEditorChange}
                apiKey="y6m2xxn2gq36exhlbattjbl50ovhyersr28po4up3gz09bms"
                init={{
                  height: 500,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              />
            </div>
            <div class="flex justify-center my-5">
              <button type="button" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Save your post
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </div>
          </form >
        </div >
      </div>
    </>
  );
};

export default CreatePostForm;
