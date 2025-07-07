import TableCustomer from "../../../components/TableCustomer";

const Dashboard = () => {
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
    <>
      <div className="container-admin hide-scrollbar">
        <div className="content-header">
          <h1 className="">Báo cáo thống kê</h1>
          <div className="dashboard-header item">
            <div className="dashboard-actions">
              <h3 className="">Total Responses</h3>
              <p className="item">2,547</p>
            </div>
            <div className="dashboard-actions">
              <h3 className="">Average Score</h3>
              <p className="item">8.4</p>
            </div>
            <div className="dashboard-actions">
              <h3 className="">Response Rate</h3>
              <p className="item">87%</p>
            </div>
          </div>
        </div>
        <div className="dashboard-chart ">
          <div className="dashboard-chart-item ">
            <h2 className="">Response Trends</h2>
            {/* <canvas id="lineChart" className="w-full" /> */}
          </div>
          <div className="dashboard-chart-item">
            <h2 className="text-xl font-bold mb-4">Demographics</h2>
            {/* <canvas id="barChart" className="w-full" /> */}
          </div>
        </div>
        <TableCustomer columns={columns} />
      </div>
    </>
  );
};

export default Dashboard;
