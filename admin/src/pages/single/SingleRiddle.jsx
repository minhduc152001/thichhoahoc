import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Single = () => {
  // eslint-disable-next-line no-restricted-globals
  const riddleId = location.pathname.split("/").slice(-1)[0];
  const backendHost = process.env.REACT_APP_BE_HOST;

  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(`${backendHost}/api/riddle/${riddleId}`).then((response) => {
      setData(response.data.riddle);
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
                (window.location.href = `/riddles/update/${riddleId}`)
              }
            >
              Edit
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={data.imageUrl}
                alt=""
                style={{ width: "400px", height: "200px", objectFit: "fill" }}
              />
              <div className="details">
                <h1 className="itemTitle">{data.name?.split(": ")[0]}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{data.id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Riddle:</span>
                  <span className="itemValue">{data.name?.split(": ")[1]}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Answers:</span>
                  <span className="itemValue">
                    {data.correctAnswer?.toString().replace(/,/g, ", ")}
                  </span>
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
