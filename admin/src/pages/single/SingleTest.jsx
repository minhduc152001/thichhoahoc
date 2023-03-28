import "./single.scss";
import "./SingleTest.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Single = () => {
  // eslint-disable-next-line no-restricted-globals
  const testId = location.pathname.split("/").slice(-1)[0];
  const backendHost = process.env.REACT_APP_BE_HOST;

  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(`${backendHost}/api/test/${testId}`).then((response) => {
      setData(response.data.test);
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
              onClick={() => (window.location.href = `/tests/update/${testId}`)}
            >
              Edit
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
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
                  <span className="itemKey">Total time:</span>
                  <span className="itemValue">{data.totalTime}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Created at:</span>
                  <span className="itemValue">
                    {new Date(data.createdAt).toLocaleString()}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Attempts count:</span>
                  <span className="itemValue">{data.takenCount}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            {data.questions?.map((question, i) => (
              <div className="question-box">
                <div className="question-header">
                  <div className="question-number">
                    Câu {i + 1}: {question.question}
                  </div>
                </div>
                <div className="question-content">
                  <div
                    className={`question-choice ${
                      question.correctAnswer === "A" ? "correct-answer" : ""
                    }`}
                  >
                    A. {question.optionA}
                  </div>
                  <div
                    className={`question-choice ${
                      question.correctAnswer === "B" ? "correct-answer" : ""
                    }`}
                  >
                    B. {question.optionB}
                  </div>
                  <div
                    className={`question-choice ${
                      question.correctAnswer === "C" ? "correct-answer" : ""
                    }`}
                  >
                    C. {question.optionC}
                  </div>
                  <div
                    className={`question-choice ${
                      question.correctAnswer === "D" ? "correct-answer" : ""
                    }`}
                  >
                    D. {question.optionD}
                  </div>

                  <div className="question-explain">
                    Explain:{" "}
                    <span className="explaination">
                      {question.explaination}
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
