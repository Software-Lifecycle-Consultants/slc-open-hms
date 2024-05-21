"use client";
import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  onBodyChange: (body: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ onBodyChange }) => {
  const [body, setBody] = useState<string>("");

  const handleBodyChange = (content: string) => {
    setBody(content);
    onBodyChange(content);
  };

  const clearContent = () => {
    setBody("");
    onBodyChange("");
  };

  return (
    <>
      <div>
        <ReactQuill
          placeholder="Write something..."
          modules={modules}
          formats={formats}
          onChange={handleBodyChange}
          value={body}
          theme="snow"
        />
      </div>
    </>
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
