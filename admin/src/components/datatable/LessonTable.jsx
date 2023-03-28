import { DataGrid } from "@mui/x-data-grid";
import { lessonColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Datatable = () => {
  const backendHost = process.env.REACT_APP_BE_HOST;
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(`${backendHost}/api/lessons`).then((response) => {
      setData(response.data.lessons);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    setData(data.filter((item) => item.id !== id));
    await axios.delete(`${backendHost}/api/lesson/${id}`);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/lessons/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        List of Lessons
        <Link to="/lessons/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={lessonColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
