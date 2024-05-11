import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [previewUpload, setpreviewUpload] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setpreviewUpload(URL.createObjectURL(e.target.files[0]));
  };

  const handleDeleteImage = (e) => {
    setpreviewUpload(null);
  }

  const handleSubmit = async (e) => {
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
        console.log("sadsad" + JSON.stringify(response))
        const responseData = await response.json();

        if (response.status == 200) {
          setUploadedImageUrl(responseData.imageUrl);
          onPropsChange(responseData.imageUrl);
          console.log('Image uploaded successfully' + JSON.stringify(responseData));

        } else {
          console.error('Error uploading image:', JSON.stringify(response));
        }
      } catch (error) {
        console.error('Error uploading image cant connect to server:', error);
      }
    }
  };
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
          <button type="submit" onClick={handleSubmit}>Upload</button>
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

      {uploadedImageUrl && <img src={uploadedImageUrl} alt="Uploaded" className='max-h-80 max-w-full' style={{ maxHeight: "320px" }} />} {/* Display uploaded image */}
    </div>
  )
}
export default UploadFile;