'use client'
import React, { useEffect, useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '@/store/actions/postAction';
import SuccessDialog from '../SuccessDialog';

const CreatePostForm = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const [editorContent, setEditorContent] = useState('');
  const createFailed = useSelector(state => state.blog_post.error);
  const createdSuccess = useSelector(state => state.blog_post.post);
  const isLoading = useSelector(state => state.blog_post.loading);

  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
  };
  const title = "Nguyen duy hung";
  const author_id = "12313";
  const category_id = "23233232";
  const editorRef = useRef(null); // Create a ref for the TinyMCE editor

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Hello from post" + editorContent)
      await dispatch(createPost({ title: title, author_id: author_id, category_id: category_id, content: editorContent }))
      // Clear the content of the TinyMCE editor
      if (editorRef.current) {
        editorRef.current.setContent('');
      }

      // Clear the content state variable
      setEditorContent("");
    }
    catch (error) {
      console.error('Login error:', error.message);
    }
  }

  return (
    <form >
      {createdSuccess && < SuccessDialog
        title={"Tạo bài viết thành công"}
        message={"Hãy cùng đóng góp chia sẻ kiến thức cho cộng đồng bạn nhé ^o^"}
        buttonMess={"Tạo thêm bài viết"} />}
      <Editor
        value={value}
        onInit={(evt, editor) => editorRef.current = editor}
        onEditorChange={handleEditorChange}
        apiKey="dh2aor51hd41gfth4zp04qqzztiajhxg0gn4oryirqwy2a1a"
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

      <div class="flex justify-center my-5">
        <button type="button" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Save your post
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>

    </form >
  );
};

export default CreatePostForm;
