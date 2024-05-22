"use client";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  onBodyChange: (body: string) => void;
  bodyContent: string;
}

const TextEditor: React.FC<TextEditorProps> = ({
  onBodyChange,
  bodyContent,
}) => {
  const handleBodyChange = (content: string) => {
    onBodyChange(content);
  };

  useEffect(() => {
    handleBodyChange(bodyContent);
  }, [bodyContent]);

  return (
    <div>
      <ReactQuill
        placeholder="Write something..."
        modules={modules}
        formats={formats}
        onChange={handleBodyChange}
        value={bodyContent}
        theme="snow"
      />
    </div>
  );
};

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

export default TextEditor;
