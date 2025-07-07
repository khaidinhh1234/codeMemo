import TableCustomer from "../../../components/TableCustomer";

const User = () => {
  const data = [
    {
      id: 1,
      name: "Nguyen Van A",
      email: "asdh@gmail.com",
      phone: "0123456789",
      address: "123 Street, City",
      createdAt: "2023-10-01",
      status: "Active",
    },
  ];
  const columns = [
    {
      title: "ID",
      field: "id",
    },
    { title: "Tên khách hàng", field: "name" },
    { title: "Email", field: "email" },
    { title: "Số điện thoại", field: "phone" },
    { title: "Địa chỉ", field: "address" },
    { title: "Ngày tạo", field: "createdAt" },
    { title: "Trạng thái", field: "status" },
    { title: "Hành động", field: "action" },
  ];
  return (
    <div className="container-admin hide-scrollbar">
      <div className="content-header">
        <div className="survey-header">
          {" "}
          <h1 className="">Danh sách tài khoản</h1>
          <div className="survey-buttons">
            <button className="export-btn">Thêm mới</button>
            <button className="export-btn">Export Excel</button>
          </div>
        </div>
        <TableCustomer columns={columns} data={data} />
      </div>
    </div>
  );
};

export default User;
