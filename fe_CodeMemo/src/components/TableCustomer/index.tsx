import React from "react";

type TableCustomerProps = {
  columns?: any;
  data?: any;
};

const TableCustomer: React.FC<TableCustomerProps> = ({
  columns,
  data = [],
}) => {
  console.log(data);
  return (
    <div>
      <div className="survey-box">
        <div className="survey-filters">
          <input
            type="text"
            placeholder="Search responses..."
            className="survey-input"
          />
          <select className="survey-select">
            <option value="0">Age Range</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45+">45+</option>
          </select>
          <select className="survey-select">
            <option value="0">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="table-wrapper">
          <table className="survey-table">
            <thead>
              {columns?.map((column: any, index: number) => (
                <th key={index}>{column.title}</th>
              ))}
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data?.map((item: any, rowIndex: number) => (
                  <tr key={rowIndex}>
                    {columns?.map((column: any, colIndex: number) => (
                      <td key={colIndex}>
                        {column.render
                          ? column.render(item[column.field], item, rowIndex)
                          : column.field
                          ? item[column.field]
                          : ""}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns?.length || 1}>No Data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="survey-footer">
          <p>Showing 1 to 10 of 2,547 entries</p>
          <div className="page-controls">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCustomer;
