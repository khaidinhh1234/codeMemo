import { useEffect, useState } from "react";
import TableCustomer from "../../../components/TableCustomer";
import FormModal from "./Form/MoadalCreate";
import { useDispatch, useSelector } from "react-redux";
import { GetPosts } from "../../../features/post/PostService";
import type { AppDispatch } from "../../../store/store";

const Post = () => {
  const [Modal, setModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [refetch, setRefetch] = useState<boolean>(false);
  const [type, setType] = useState<string>("create");
  const [row, setRow] = useState<any>(null);
  const data = useSelector((state: any) => state.post.post);
  useEffect(() => {
    dispatch(GetPosts());
  }, [dispatch, refetch]);
  const handleAction = (type: string, row?: any) => {
    if (type) {
      setModal(true);
      setType(type);
      setRow(row);
    }
  };
  const columns = [
    {
      title: "ID",
      field: "id",
      render: (text: any, record: any, index: number) => (
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
    {
      title: "Trạng thái",
      field: "status",
      render: (text: any) => {
        switch (text) {
          case "0":
            return <span className="status-pending">Chưa duyệt</span>;
          case "1":
            return <span className="status-approved">Đã duyệt</span>;
          case "2":
            return <span className="status-rejected">Từ chối</span>;
          default:
            return <span className="status-unknown">Không xác định</span>;
        }
      },
    },
    {
      title: "Hành động",
      field: "action",
      render: (row: any, recrod: any) => (
        <div>
          <button
            className="edit-btn"
            onClick={() => handleAction("edit", recrod)}
          >
            Sửa
          </button>
          <button className="delete-btn">Xem</button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="container-admin hide-scrollbar">
        <div className="content-header">
          <div className="survey-header">
            {" "}
            <h1 className="">Danh sách kiến thức</h1>
            <div className="survey-buttons">
              <button
                className="export-btn"
                onClick={() => handleAction("create")}
              >
                Thêm mới
              </button>
              <button className="export-btn">Export Excel</button>
            </div>
          </div>
          <TableCustomer columns={columns} data={data} />
        </div>
      </div>
      <FormModal
        isOpen={Modal}
        onClose={() => setModal(false)}
        type={type}
        data={row}
        setRefetch={setRefetch}
        refetch={refetch}
      />
    </>
  );
};

export default Post;
