import React, { useRef } from 'react';

import { Editor } from '@tinymce/tinymce-react';

const TinyMCE = ({ value, objectInit, onChange, height }) => {

  const TinyAPIkey = "y6m2xxn2gq36exhlbattjbl50ovhyersr28po4up3gz09bms";
  const editorRef = useRef(null); // Create a ref for the TinyMCE editor
  return (
    <Editor
      value={value}
      onInit={(evt, objectInit) => editorRef.current = objectInit}
      onEditorChange={onChange}
      apiKey={TinyAPIkey}
      init={{
        height: height || 350,
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
  )
}
export default TinyMCE;