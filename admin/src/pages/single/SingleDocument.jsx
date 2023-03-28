import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Single = () => {
  // eslint-disable-next-line no-restricted-globals
  const documentId = location.pathname.split("/").slice(-1)[0];
  const backendHost = process.env.REACT_APP_BE_HOST;

  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(`${backendHost}/api/document/${documentId}`).then((response) => {
      setData(response.data.document);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div
              className="editButton"
              onClick={() =>
                (window.location.href = `/documents/update/${documentId}`)
              }
            >
              Edit
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <iframe
                src={data.url}
                height="600"
                style={{ border: "1px solid #333" }}
              ></iframe>

              <div className="details">
                <h1 className="itemTitle">{data.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{data.id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Grade level:</span>
                  <span className="itemValue">{data.gradeLevel}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Link document:</span>
                  <span className="itemValue">{data.url}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Type file:</span>
                  <span className="itemValue">{data.type?.toUpperCase()}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Number of Downloads:</span>
                  <span className="itemValue">{data.downloadedCount}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Created at:</span>
                  <span className="itemValue">
                    {new Date(data.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        {/* <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div> */}
      </div>
    </div>
  );
};

export default Single;
