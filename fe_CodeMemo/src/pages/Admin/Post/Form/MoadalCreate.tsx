import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ModalMedia from "../ModalMedia/ModalMedia";
interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  //   onSubmit: (data: { name: string; textarea: string }) => void;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [value, setvalue] = useState("");
  const [Madia, setMadia] = useState<boolean>(false);
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
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
  ];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  if (!isOpen) return null;
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2 className="modal-title">Thêm mới kiến thức</h2>
          <form onSubmit={handleSubmit} className="form-add">
            <div className="form-groups">
              {" "}
              <div className="form-group">
                <label htmlFor="title">Tiêu đề:</label>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Vui lòng nhập Tiêu đề"
                />
              </div>
              <div className="form-group">
                <label htmlFor="textarea">Mô tả ngắn:</label>
                <textarea
                  id="textarea"
                  rows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Vui lòng nhập mô tả ngắn"
                />
              </div>
            </div>
            <div className="form-group">
              <label>
                Nội dung:{" "}
                <button onClick={() => setMadia(true)}>Thêm ảnh</button>
              </label>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setvalue}
                modules={modules}
                formats={formats}
                placeholder="Vui lòng nhập nội dung"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={onClose}
                className="modal-button cancel"
              >
                Huỷ
              </button>
              <button type="submit" className="modal-button submit">
                Lưu
              </button>
            </div>
          </form>
        </div>
      </div>
      {Madia && <ModalMedia setMadia={setMadia} />}
    </>
  );
};

export default FormModal;
