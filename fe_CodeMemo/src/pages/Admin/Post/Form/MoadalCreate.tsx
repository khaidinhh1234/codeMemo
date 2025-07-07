import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ModalMedia from "../ModalMedia/ModalMedia";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  CreatePost,
  DatailPost,
  UpdatePost,
} from "../../../../features/post/PostService";
interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: string;
  data?: any;
  setRefetch: (value: boolean) => void;
  refetch?: boolean;
}

const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  type = "view",
  data = {},
  setRefetch,
  refetch = false,
}) => {
  const isView = type === "view";
  const isAction = type === "create " || type === "edit";
  const dispatch = useDispatch<any>();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      categoryId: "",
      textarea: "",
    },
  });
  const [value, setvalue] = useState("");
  const [Madia, setMadia] = useState<boolean>(false);
  const quillRef = useRef<any>(null);
  const handleSelectUrl = (url: string) => {
    const quill = quillRef.current;
    if (quill) {
      const range = quill?.editor?.getSelection()?.index ?? 0;
      quill.editor.insertEmbed(range, "image", url);
    }
  };
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
      ["link"],
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
  const OnSubmit = (dataModel: any) => {
    if (type === "create") {
      const payload = { ...dataModel, content: value };
      dispatch(CreatePost(payload));
      setRefetch(!refetch);
    } else if (type === "edit") {
      const payload = { ...dataModel, content: value, _id: data?._id };
      dispatch(UpdatePost({ id: payload?._id, payload: payload }));
      setRefetch(!refetch);
    }
    onClose();
  };
  useEffect(() => {
    if (type === "edit" && data?._id) {
      dispatch(DatailPost(data._id)).then((res: any) => {
        if (res.payload) {
          reset({
            title: res.payload.title,
            categoryId: res.payload.categoryId,
            textarea: res.payload.textarea,
          });
          setvalue(res.payload.content);
        }
      });
    }

    // 👉 Khi chuyển sang tạo mới thì reset form rỗng
    if (type === "create") {
      reset({
        title: "",
        categoryId: "",
        textarea: "",
      });
      setvalue("");
    }
  }, [type, data?._id, dispatch, reset]);

  if (!isOpen) return null;
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2 className="modal-title">
            {type === "create"
              ? "Thêm mới kiến thức"
              : "Chỉnh sửa kiến thức: " + data?.title || ""}
          </h2>
          <form onSubmit={handleSubmit(OnSubmit)} className="form-model">
            <div className="form-groups">
              {" "}
              <div className="form-group">
                <label htmlFor="title">Tiêu đề:</label>
                <input
                  id="title"
                  type="text"
                  {...register("title", { required: true })}
                  placeholder="Vui lòng nhập Tiêu đề"
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Tiêu đề:</label>
                <select
                  id="categoryId"
                  {...register("categoryId", { required: true })}
                >
                  <option value="">Chọn danh mục</option>
                  <option value="685c49c8908cfe74ccbff2ed">Danh mục 1</option>
                  <option value="2">Danh mục 2</option>
                  <option value="3">Danh mục 3</option>
                  <option value="4">Danh mục 4</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="textarea">Mô tả ngắn:</label>
                <textarea
                  id="textarea"
                  rows={3}
                  {...register("textarea", { required: true })}
                  placeholder="Vui lòng nhập mô tả ngắn"
                />
              </div>
            </div>
            <div className="form-group">
              <label>
                Nội dung:{" "}
                <button type="button" onClick={() => setMadia(true)}>
                  Thêm ảnh
                </button>
              </label>
              <ReactQuill
                theme="snow"
                value={value}
                ref={quillRef}
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
      {Madia && <ModalMedia setMadia={setMadia} setUrl={handleSelectUrl} />}
    </>
  );
};

export default FormModal;
