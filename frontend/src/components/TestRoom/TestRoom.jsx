import React, { useState } from "react";
import "./TestRoom.scss";
import MainTitle from "../MainTitle/MainTitle";

function TestRoom() {
  const tests = [
    {
      id: "1212",
      gradeLevel: "G10",
      name: "Kiểm tra 15 phút lop 10 số 1",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },
    {
      id: "4392",
      gradeLevel: "G10",
      name: "Kiểm tra 15 phút lop 10 số 2",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },
    {
      id: "432",
      gradeLevel: "G10",
      name: "Thi Hoá học cấp Quận Thanh Xuân lop 10 HN",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },
    {
      id: "03942",
      gradeLevel: "G10",
      name: "Thi Hoá học cấp Thành phố Hải Phòng lop 10 số 1",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },

    {
      id: "f34fwe",
      gradeLevel: "G11",
      name: "Kiểm tra 15 phút số lop 11",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },

    {
      id: "sa90f",
      gradeLevel: "G11",
      name: "Kiểm tra 15 phút lop 11 số 2",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },
    {
      id: "sa9f0",
      gradeLevel: "G11",
      name: "Thi Hoá học cấp Quận Thanh Xuân lop 11 lan thu 29",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },
    {
      id: "9fja9e",
      gradeLevel: "G11",
      name: "Thi Hoá học cấp Thành phố Hải Phòng lop 11",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },

    {
      id: "9023",
      gradeLevel: "G12",
      name: "Kiểm tra 15 phút lop 12 số 1",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },

    {
      id: "0osapf",
      gradeLevel: "G12",
      name: "Kiểm tra 15 phút lop 12 số 2",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },
    {
      id: "fsa89",
      gradeLevel: "G12",
      name: "Thi Hoá học cấp Quận Thanh Xuân lop 12 lan thu 34",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },
    {
      id: "opppsa",
      gradeLevel: "G12",
      name: "Thi Hoá học cấp Thành phố Hải Phòng lop 12 số 90",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },

    {
      id: "asf23",
      gradeLevel: "collegePrep",
      name: "Ôn thi Đại học Hoá học đề thi thử trường THPT Trần Phú",
      totalTime: 20,
      takenCount: 13290,
      userTakenTimes: 9,
      highestScore: 5,
    },
  ];

  const testsG10 = tests.filter((el) => el.gradeLevel === "G10");
  const testsG11 = tests.filter((el) => el.gradeLevel === "G11");
  const testsG12 = tests.filter((el) => el.gradeLevel === "G12");
  const testsCollegePrep = tests.filter(
    (el) => el.gradeLevel === "collegePrep"
  );

  return (
    <div>
      <MainTitle title={"đề thi"} />
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
                <th scope="col">Điểm cao nhất</th>
              </tr>
            </thead>
            <tbody>
              {testsG10
                .filter((el) => el.name.includes("Kiểm tra"))
                .map((test) => (
                  <tr>
                    <th className="col-name-test" scope="row" colSpan={4}>
                      <a href="/lam-bai-thi/1234567"><a href="/lam-bai-thi/1234567">{test.name}</a></a>
                    </th>
                    <td>{test.totalTime}</td>
                    <td>{test.takenCount}</td>
                    <td>{test.userTakenTimes}</td>
                    <td>{test.highestScore}</td>
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
                <th scope="col">Điểm cao nhất</th>
              </tr>
            </thead>
            <tbody>
              {testsG10
                .filter((el) => el.name.includes("Thi Hoá học cấp Quận"))
                .map((test) => (
                  <tr>
                    <th className="col-name-test" scope="row" colSpan={4}>
                      <a href="/lam-bai-thi/1234567">{test.name}</a>
                    </th>
                    <td>{test.totalTime}</td>
                    <td>{test.takenCount}</td>
                    <td>{test.userTakenTimes}</td>
                    <td>{test.highestScore}</td>
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
                <th scope="col">Điểm cao nhất</th>
              </tr>
            </thead>
            <tbody>
              {testsG10
                .filter((el) => el.name.includes("Thi Hoá học cấp Thành phố"))
                .map((test) => (
                  <tr>
                    <th scope="row" className="col-name-test" colSpan={4}>
                      <a href="/lam-bai-thi/1234567">{test.name}</a>
                    </th>
                    <td>{test.totalTime}</td>
                    <td>{test.takenCount}</td>
                    <td>{test.userTakenTimes}</td>
                    <td>{test.highestScore}</td>
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
                <th scope="col">Điểm cao nhất</th>
              </tr>
            </thead>
            <tbody>
              {testsG11
                .filter((el) => el.name.includes("Kiểm tra"))
                .map((test) => (
                  <tr>
                    <th className="col-name-test" scope="row" colSpan={4}>
                      <a href="/lam-bai-thi/1234567">{test.name}</a>
                    </th>
                    <td>{test.totalTime}</td>
                    <td>{test.takenCount}</td>
                    <td>{test.userTakenTimes}</td>
                    <td>{test.highestScore}</td>
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
                <th scope="col">Điểm cao nhất</th>
              </tr>
            </thead>
            <tbody>
              {testsG11
                .filter((el) => el.name.includes("Thi Hoá học cấp Quận"))
                .map((test) => (
                  <tr>
                    <th className="col-name-test" scope="row" colSpan={4}>
                      <a href="/lam-bai-thi/1234567">{test.name}</a>
                    </th>
                    <td>{test.totalTime}</td>
                    <td>{test.takenCount}</td>
                    <td>{test.userTakenTimes}</td>
                    <td>{test.highestScore}</td>
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
                <th scope="col">Điểm cao nhất</th>
              </tr>
            </thead>
            <tbody>
              {testsG11
                .filter((el) => el.name.includes("Thi Hoá học cấp Thành phố"))
                .map((test) => (
                  <tr>
                    <th scope="row" className="col-name-test" colSpan={4}>
                      <a href="/lam-bai-thi/1234567">{test.name}</a>
                    </th>
                    <td>{test.totalTime}</td>
                    <td>{test.takenCount}</td>
                    <td>{test.userTakenTimes}</td>
                    <td>{test.highestScore}</td>
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
                <th scope="col">Điểm cao nhất</th>
              </tr>
            </thead>
            <tbody>
              {testsG12
                .filter((el) => el.name.includes("Kiểm tra"))
                .map((test) => (
                  <tr>
                    <th className="col-name-test" scope="row" colSpan={4}>
                      <a href="/lam-bai-thi/1234567">{test.name}</a>
                    </th>
                    <td>{test.totalTime}</td>
                    <td>{test.takenCount}</td>
                    <td>{test.userTakenTimes}</td>
                    <td>{test.highestScore}</td>
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
                <th scope="col">Điểm cao nhất</th>
              </tr>
            </thead>
            <tbody>
              {testsG12
                .filter((el) => el.name.includes("Thi Hoá học cấp Quận"))
                .map((test) => (
                  <tr>
                    <th className="col-name-test" scope="row" colSpan={4}>
                      <a href="/lam-bai-thi/1234567">{test.name}</a>
                    </th>
                    <td>{test.totalTime}</td>
                    <td>{test.takenCount}</td>
                    <td>{test.userTakenTimes}</td>
                    <td>{test.highestScore}</td>
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
                <th scope="col">Điểm cao nhất</th>
              </tr>
            </thead>
            <tbody>
              {testsG12
                .filter((el) => el.name.includes("Thi Hoá học cấp Thành phố"))
                .map((test) => (
                  <tr>
                    <th scope="row" className="col-name-test" colSpan={4}>
                      <a href="/lam-bai-thi/1234567">{test.name}</a>
                    </th>
                    <td>{test.totalTime}</td>
                    <td>{test.takenCount}</td>
                    <td>{test.userTakenTimes}</td>
                    <td>{test.highestScore}</td>
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
                <th scope="col">Điểm cao nhất</th>
              </tr>
            </thead>
            <tbody>
              {testsCollegePrep.map((test) => (
                <tr>
                  <th className="col-name-test" scope="row" colSpan={4}>
                    <a href="/lam-bai-thi/1234567">{test.name}</a>
                  </th>
                  <td>{test.totalTime}</td>
                  <td>{test.takenCount}</td>
                  <td>{test.userTakenTimes}</td>
                  <td>{test.highestScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TestRoom;
