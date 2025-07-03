import { useEffect, useState } from "react";
import TableCustomer from "../../../components/TableCustomer";
import FormModal from "./Form/MoadalCreate";
import { useDispatch, useSelector } from "react-redux";
import { GetPosts } from "../../../features/post/PostService";
import type { AppDispatch } from "../../../store/store";

const Post = () => {
  // const data = [
  //   {
  //     id: 1,
  //     name: "Nguyen Van A",
  //     email: "asdh@gmail.com",
  //     phone: "0123456789",
  //     address: "123 Street, City",
  //     createdAt: "2023-10-01",
  //     status: "Active",
  //   },
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: any) => state.post.post);
  console.log(data);
  useEffect(() => {
    dispatch(GetPosts());
  }, []);
  const columns = [
    {
      title: "ID",
      field: "id",
      render: (rowData: any, record: any, index: number) => (
        <span>{index + 1}</span>
      ),
    },
    { title: "Tiêu đề", field: "title" },
    {
      title: "Danh mục",
      field: "categoryId",
      render: (text: any) => {
        return text ? text?.name : "Chưa có danh mục";
      },
    },
    { title: "Ngày tạo", field: "createdAt" },
    { title: "Trạng thái", field: "status" },
    {
      title: "Hành động",
      field: "action",
      render: (rowData: any) => (
        <div>
          <button className="edit-btn">Sửa</button>
          <button className="delete-btn">Xóa</button>
        </div>
      ),
    },
  ];
  const [Modal, setModal] = useState(false);
  return (
    <>
      <div className="container-admin hide-scrollbar">
        <div className="content-header">
          <div className="survey-header">
            {" "}
            <h1 className="">Danh sách kiến thức</h1>
            <div className="survey-buttons">
              <button className="export-btn" onClick={() => setModal(true)}>
                Thêm mới
              </button>
              <button className="export-btn">Export Excel</button>
            </div>
          </div>
          <TableCustomer columns={columns} data={data} />
        </div>
      </div>
      <FormModal isOpen={Modal} onClose={() => setModal(false)} />
    </>
  );
};

export default Post;
