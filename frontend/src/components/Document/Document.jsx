import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Document.scss";
import MainTitle from "../MainTitle/MainTitle";
import RcmSideBar from "../RcmSideBar/RcmSideBar";
import numberWithCommas from "../../utils/numberWithCommas";

function Document() {
  const [searchParams, _] = useSearchParams();
  let level = searchParams.get("level");
  const levelMap = {
    "lop-10": "lớp 10",
    "lop-11": "lớp 11",
    "lop-12": "lớp 12",
    "on-thi-dai-hoc": "ôn thi đại học",
  };

  const docs = [
    {
      title: "Đề ôn tập hè Hoá lớp 11 (Chương trình mới)",
      downloadCount: 12390,
    },
    {
      title:
        "Bộ 5 đề kiểm tra cuối học kì II Sách Chân trời sáng tạo - Hoá học lớp 12",
      downloadCount: 2190,
    },
    {
      title:
        "Bộ 15 đề kiểm tra cuối học kì II Sách Chân trời sáng tạo - Hoá học lớp 12",
      downloadCount: 21348,
    },
    {
      title:
        "Bộ 5 đề kiểm tra cuối học kì II Sách Chân trời sáng tạo - Hoá học lớp 12",
      downloadCount: 1008,
    },
    {
      title:
        "Bộ 5 đề kiểm tra cuối học kì II Sách Chân trời sáng tạo - Hoá học lớp 12",
      downloadCount: 18263,
    },
  ];

  const pageTitle = levelMap[level];

  return (
    <>
      <MainTitle title={"TÀI LIỆU"} />
      <div className="main-list-documents">
        <h4>TÀI LIỆU HOÁ HỌC {pageTitle.toUpperCase()}</h4>
        <div className="docs-table">
          <table class="table table-bordered">
            <thead>
              <tr className="bg-success-color">
                <th scope="col" colSpan={5}>
                  Tài liệu
                </th>
                <th scope="col">Lượt tải</th>
              </tr>
            </thead>
            <tbody>
              {docs.map((doc) => (
                <tr>
                  <th scope="row" colSpan={5}>
                    <a href="/doc-tai-lieu/123csad" className="title-doc">
                      {doc.title}
                    </a>
                  </th>
                  <td>{numberWithCommas(doc.downloadCount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <RcmSideBar />
      </div>
    </>
  );
}

export default Document;
