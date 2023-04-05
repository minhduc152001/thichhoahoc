import React, { useEffect, useState } from "react";
import "./TestRoom.scss";
import MainTitle from "../MainTitle/MainTitle";
import NeedLogin from "../NeedLogin/NeedLogin";
import { needLoginToast } from "../../utils/toastInfo";
import { user } from "../../constants/profileUser";
import numberWithCommas from "../../utils/numberWithCommas";
import axios from "axios";

function TestRoom() {
  const [testsWithHistory, setTestsWithHistory] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BE_HOST}/api/tests/history/${user.userId}`
    );
    setTestsWithHistory(data.testsAndHistory);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const testsG10 = testsWithHistory.filter(
    ({ test }) => test.gradeLevel === "G10"
  );
  const testsG11 = testsWithHistory.filter(
    ({ test }) => test.gradeLevel === "G11"
  );
  const testsG12 = testsWithHistory.filter(
    ({ test }) => test.gradeLevel === "G12"
  );
  const testsCollegePrep = testsWithHistory.filter(
    ({ test }) => test.gradeLevel === "collegePrep"
  );

  const handleTakeExam = (testId) => {
    if (user.userId) window.location.href = `/lam-bai-thi/${testId}`;
    needLoginToast();
  };

  return (
    <div>
      <MainTitle title={"đề thi"} />
      {!!user.userId ? (
        <div className="tests-list-container">
          <nav
            id="navbar-filter"
            class="navbar navbar-light flex-column align-items-stretch p-3"
          >
            {/* <a class="navbar-brand">
            <i class="fa fa-angle-double-left" aria-hidden="true"></i>
          </a> */}

            <nav class="nav nav-pills flex-column filter">
              <a class="nav-link orange-text" href="#item-1">
                Lớp 10
              </a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-1-1">
                  Kiểm tra
                </a>
                <a class="nav-link ms-3 my-1" href="#item-1-2">
                  Thi quận
                </a>
                <a class="nav-link ms-3 my-1" href="#item-1-3">
                  Thi thành phố
                </a>
              </nav>
              <a class="nav-link orange-text" href="#item-2">
                Lớp 11
              </a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-2-1">
                  Kiểm tra
                </a>
                <a class="nav-link ms-3 my-1" href="#item-2-2">
                  Thi quận
                </a>
                <a class="nav-link ms-3 my-1" href="#item-2-3">
                  Thi thành phố
                </a>
              </nav>
              <a class="nav-link orange-text" href="#item-3">
                Lớp 12
              </a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-3-1">
                  Kiểm tra
                </a>
                <a class="nav-link ms-3 my-1" href="#item-3-2">
                  Thi quận
                </a>
                <a class="nav-link ms-3 my-1" href="#item-3-3">
                  Thi thành phố
                </a>
              </nav>
              <a class="nav-link orange-text" href="#item-3">
                Ôn thi Đại học
              </a>
            </nav>
          </nav>

          <div
            id="list-tests"
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-offset="0"
            tabindex="0"
          >
            <h4 id="item-1">Đề thi lớp 10</h4>
            <h5 id="item-1-1">Kiểm tra</h5>
            <table class="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#17A74A", color: "white" }}>
                  <th scope="col" colSpan={4}>
                    Đề thi
                  </th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Lượt làm</th>
                  <th scope="col">Bạn làm</th>
                  <th scope="col">Điểm cao nhất của bạn</th>
                </tr>
              </thead>
              <tbody>
                {testsG10
                  .filter(({ test }) => test.name.includes("Kiểm tra"))
                  .map(({ test, history }) => (
                    <tr>
                      <th className="col-name-test" scope="row" colSpan={4}>
                        <div
                          className="test-name-text"
                          onClick={(e) => handleTakeExam(test.id)}
                        >
                          {test.name}
                        </div>
                      </th>
                      <td className="align-text">{test.totalTime} phút</td>
                      <td className="align-text">
                        {numberWithCommas(test.takenCount)}
                      </td>
                      <td className="align-text">{history.attemptsCount}</td>
                      <td className="align-text">{history.highestScore}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <h5 id="item-1-2">Thi quận</h5>
            <table class="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#17A74A", color: "white" }}>
                  <th scope="col" colSpan={4}>
                    Đề thi
                  </th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Lượt làm</th>
                  <th scope="col">Bạn làm</th>
                  <th scope="col">Điểm cao nhất của bạn</th>
                </tr>
              </thead>
              <tbody>
                {testsG10
                  .filter(({ test }) =>
                    test.name.includes("Thi Hoá học cấp Quận")
                  )
                  .map(({ test, history }) => (
                    <tr>
                      <th className="col-name-test" scope="row" colSpan={4}>
                        <div
                          className="test-name-text"
                          onClick={() => handleTakeExam(test.id)}
                        >
                          {test.name}
                        </div>
                      </th>
                      <td className="align-text">{test.totalTime} phút</td>
                      <td className="align-text">
                        {numberWithCommas(test.takenCount)}
                      </td>
                      <td className="align-text">{history.attemptsCount}</td>
                      <td className="align-text">{history.highestScore}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <h5 id="item-1-3">Thi thành phố</h5>
            <table class="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#17A74A", color: "white" }}>
                  <th scope="col" colSpan={4}>
                    Đề thi
                  </th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Lượt làm</th>
                  <th scope="col">Bạn làm</th>
                  <th scope="col">Điểm cao nhất của bạn</th>
                </tr>
              </thead>
              <tbody>
                {testsG10
                  .filter(({ test }) =>
                    test.name.includes("Thi Hoá học cấp Thành phố")
                  )
                  .map(({ test, history }) => (
                    <tr>
                      <th scope="row" className="col-name-test" colSpan={4}>
                        <div
                          className="test-name-text"
                          onClick={(e) => handleTakeExam(test.id)}
                        >
                          {test.name}
                        </div>
                      </th>
                      <td className="align-text">{test.totalTime} phút</td>
                      <td className="align-text">
                        {numberWithCommas(test.takenCount)}
                      </td>
                      <td className="align-text">{history.attemptsCount}</td>
                      <td className="align-text">{history.highestScore}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <h4 id="item-2" className="mt-50">
              Đề thi lớp 11
            </h4>
            <h5 id="item-2-1">Kiểm tra</h5>
            <table class="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#17A74A", color: "white" }}>
                  <th scope="col" colSpan={4}>
                    Đề thi
                  </th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Lượt làm</th>
                  <th scope="col">Bạn làm</th>
                  <th scope="col">Điểm cao nhất của bạn</th>
                </tr>
              </thead>
              <tbody>
                {testsG11
                  .filter(({ test }) => test.name.includes("Kiểm tra"))
                  .map(({ test, history }) => (
                    <tr>
                      <th className="col-name-test" scope="row" colSpan={4}>
                        <div
                          className="test-name-text"
                          onClick={(e) => handleTakeExam(test.id)}
                        >
                          {test.name}
                        </div>
                      </th>
                      <td className="align-text">{test.totalTime} phút</td>
                      <td className="align-text">
                        {numberWithCommas(test.takenCount)}
                      </td>
                      <td className="align-text">{history.attemptsCount}</td>
                      <td className="align-text">{history.highestScore}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <h5 id="item-2-2">Thi quận</h5>
            <table class="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#17A74A", color: "white" }}>
                  <th scope="col" colSpan={4}>
                    Đề thi
                  </th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Lượt làm</th>
                  <th scope="col">Bạn làm</th>
                  <th scope="col">Điểm cao nhất của bạn</th>
                </tr>
              </thead>
              <tbody>
                {testsG11
                  .filter(({ test }) =>
                    test.name.includes("Thi Hoá học cấp Quận")
                  )
                  .map(({ test, history }) => (
                    <tr>
                      <th className="col-name-test" scope="row" colSpan={4}>
                        <div
                          className="test-name-text"
                          onClick={(e) => handleTakeExam(test.id)}
                        >
                          {test.name}
                        </div>
                      </th>
                      <td className="align-text">{test.totalTime} phút</td>
                      <td className="align-text">
                        {numberWithCommas(test.takenCount)}
                      </td>
                      <td className="align-text">{history.attemptsCount}</td>
                      <td className="align-text">{history.highestScore}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <h5 id="item-2-3">Thi thành phố</h5>
            <table class="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#17A74A", color: "white" }}>
                  <th scope="col" colSpan={4}>
                    Đề thi
                  </th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Lượt làm</th>
                  <th scope="col">Bạn làm</th>
                  <th scope="col">Điểm cao nhất của bạn</th>
                </tr>
              </thead>
              <tbody>
                {testsG11
                  .filter(({ test }) =>
                    test.name.includes("Thi Hoá học cấp Thành phố")
                  )
                  .map(({ test, history }) => (
                    <tr>
                      <th scope="row" className="col-name-test" colSpan={4}>
                        <div
                          className="test-name-text"
                          onClick={(e) => handleTakeExam(test.id)}
                        >
                          {test.name}
                        </div>
                      </th>
                      <td className="align-text">{test.totalTime} phút</td>
                      <td className="align-text">
                        {numberWithCommas(test.takenCount)}
                      </td>
                      <td className="align-text">{history.attemptsCount}</td>
                      <td className="align-text">{history.highestScore}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <h4 id="item-3" className="mt-50">
              Đề thi lớp 12
            </h4>
            <h5 id="item-3-1">Kiểm tra</h5>
            <table class="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#17A74A", color: "white" }}>
                  <th scope="col" colSpan={4}>
                    Đề thi
                  </th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Lượt làm</th>
                  <th scope="col">Bạn làm</th>
                  <th scope="col">Điểm cao nhất của bạn</th>
                </tr>
              </thead>
              <tbody>
                {testsG12
                  .filter(({ test }) => test.name.includes("Kiểm tra"))
                  .map(({ test, history }) => (
                    <tr>
                      <th className="col-name-test" scope="row" colSpan={4}>
                        <div
                          className="test-name-text"
                          onClick={(e) => handleTakeExam(test.id)}
                        >
                          {test.name}
                        </div>
                      </th>
                      <td className="align-text">{test.totalTime} phút</td>
                      <td className="align-text">
                        {numberWithCommas(test.takenCount)}
                      </td>
                      <td className="align-text">{history.attemptsCount}</td>
                      <td className="align-text">{history.highestScore}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <h5 id="item-3-2">Thi quận</h5>
            <table class="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#17A74A", color: "white" }}>
                  <th scope="col" colSpan={4}>
                    Đề thi
                  </th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Lượt làm</th>
                  <th scope="col">Bạn làm</th>
                  <th scope="col">Điểm cao nhất của bạn</th>
                </tr>
              </thead>
              <tbody>
                {testsG12
                  .filter(({ test }) =>
                    test.name.includes("Thi Hoá học cấp Quận")
                  )
                  .map(({ test, history }) => (
                    <tr>
                      <th className="col-name-test" scope="row" colSpan={4}>
                        <div
                          className="test-name-text"
                          onClick={(e) => handleTakeExam(test.id)}
                        >
                          {test.name}
                        </div>
                      </th>
                      <td className="align-text">{test.totalTime} phút</td>
                      <td className="align-text">
                        {numberWithCommas(test.takenCount)}
                      </td>
                      <td className="align-text">{history.attemptsCount}</td>
                      <td className="align-text">{history.highestScore}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <h5 id="item-3-3">Thi thành phố</h5>
            <table class="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#17A74A", color: "white" }}>
                  <th scope="col" colSpan={4}>
                    Đề thi
                  </th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Lượt làm</th>
                  <th scope="col">Bạn làm</th>
                  <th scope="col">Điểm cao nhất của bạn</th>
                </tr>
              </thead>
              <tbody>
                {testsG12
                  .filter(({ test }) =>
                    test.name.includes("Thi Hoá học cấp Thành phố")
                  )
                  .map(({ test, history }) => (
                    <tr>
                      <th scope="row" className="col-name-test" colSpan={4}>
                        <div
                          className="test-name-text"
                          onClick={(e) => handleTakeExam(test.id)}
                        >
                          {test.name}
                        </div>
                      </th>
                      <td className="align-text">{test.totalTime} phút</td>
                      <td className="align-text">
                        {numberWithCommas(test.takenCount)}
                      </td>
                      <td className="align-text">{history.attemptsCount}</td>
                      <td className="align-text">{history.highestScore}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <h4 id="item-4" className="mt-50">
              Ôn thi Đại học
            </h4>
            <table class="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: "#17A74A", color: "white" }}>
                  <th scope="col" colSpan={4}>
                    Đề thi
                  </th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Lượt làm</th>
                  <th scope="col">Bạn làm</th>
                  <th scope="col">Điểm cao nhất của bạn</th>
                </tr>
              </thead>
              <tbody>
                {testsCollegePrep.map(({ test, history }) => (
                  <tr>
                    <th className="col-name-test" scope="row" colSpan={4}>
                      <div
                        className="test-name-text"
                        onClick={(e) => handleTakeExam(test.id)}
                      >
                        {test.name}
                      </div>
                    </th>
                    <td className="align-text">{test.totalTime} phút</td>
                    <td className="align-text">
                      {numberWithCommas(test.takenCount)}
                    </td>
                    <td className="align-text">{history.attemptsCount}</td>
                    <td className="align-text">{history.highestScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <NeedLogin />
      )}
    </div>
  );
}

export default TestRoom;
