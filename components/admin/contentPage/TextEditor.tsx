"use client"; // This directive indicates that the component is client-side rendered in Next.js.

import React, { useEffect } from "react"; // Importing React and the useEffect hook.
import ReactQuill from "react-quill"; // Importing the ReactQuill component.
import "react-quill/dist/quill.snow.css"; // Importing the Quill editor's snow theme CSS.

interface TextEditorProps {
  onBodyChange: (body: string) => void; // Function to handle changes in the editor content.
  bodyContent: string; // Initial content for the editor.
}

const TextEditor: React.FC<TextEditorProps> = ({
  onBodyChange,
  bodyContent,
}) => {
  // Function to handle content change in the editor.
  const handleBodyChange = (content: string) => {
    onBodyChange(content); // Call the provided onBodyChange function with the new content.
  };

  // Effect to set the initial content when the bodyContent prop changes.
  useEffect(() => {
    handleBodyChange(bodyContent);
  }, [bodyContent]);

  return (
    <div>
      {/* ReactQuill component for rich text editing */}
      <ReactQuill
        placeholder="Write something..." // Placeholder text in the editor.
        modules={modules} // Toolbar and other configurations.
        formats={formats} // Supported formats in the editor.
        onChange={handleBodyChange} // Handler for content changes.
        value={bodyContent} // The content of the editor.
        theme="snow" // Editor theme.
      />
    </div>
  );
};

// Configuration for the toolbar in the Quill editor.
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
  ],
};

// Supported formats for content in the Quill editor.
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
];

export default TextEditor; // Exporting the TextEditor component as default.
