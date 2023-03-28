import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Single = () => {
  // eslint-disable-next-line no-restricted-globals
  const userId = location.pathname.split("/").slice(-1)[0];
  const backendHost = process.env.REACT_APP_BE_HOST;

  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(`${backendHost}/api/user/${userId}`).then((response) => {
      setData(response.data.user);
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
              onClick={() => (window.location.href = `/users/update/${userId}`)}
            >
              Edit
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={data.avatar} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">
                  {data.firstName + " " + data.lastName}
                </h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{data.id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Subscription:</span>
                  <span className="itemValue">{data.subscription}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Expires at:</span>
                  <span className="itemValue">
                    {(data.subscriptionExpiresAt &&
                      new Date(
                        data.subscriptionExpiresAt
                      ).toLocaleString()) ||
                      "unlimited"}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Begins at:</span>
                  <span className="itemValue">
                    {new Date(data.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
