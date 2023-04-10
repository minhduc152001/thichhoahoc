import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Document.scss";
import MainTitle from "../MainTitle/MainTitle";
import RcmSideBar from "../RcmSideBar/RcmSideBar";
import numberWithCommas from "../../utils/numberWithCommas";
import { user } from "../../constants/profileUser";
import NeedLogin from "../NeedLogin/NeedLogin";
import axios from "axios";

function Document() {
  const [searchParams, _] = useSearchParams();
  const [docs, setDocs] = useState([]);
  let level = searchParams.get("level");
  const levelMap = {
    "lop-10": ["lớp 10", "G10"],
    "lop-11": ["lớp 11", "G11"],
    "lop-12": ["lớp 12", "G12"],
    "on-thi-dai-hoc": ["ôn thi đại học", "collegePrep"],
  };
  const pageTitle = levelMap[level][0];

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BE_HOST}/api/documents`
    );
    setDocs(
      data.documents.filter((el) => el.gradeLevel === levelMap[level][1])
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainTitle title={"TÀI LIỆU"} />
      {user.userId ? (
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
                {docs?.map((doc) => (
                  <tr>
                    <th scope="row" colSpan={5}>
                      <a
                        href={`/doc-tai-lieu/${doc?._id}`}
                        className="title-doc"
                      >
                        {doc.name}
                      </a>
                    </th>
                    <td>{numberWithCommas(doc.downloadedCount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <RcmSideBar />
        </div>
      ) : (
        <NeedLogin />
      )}
    </>
  );
}

export default Document;
