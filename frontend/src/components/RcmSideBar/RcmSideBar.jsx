import React from "react";
import "./RcmSideBar.scss";

function RcmSideBar() {
  return (
    <div>
      <div className="recommend-side-bar">
        <div className="box-side">
          <div className="top-content">TÀI LIỆU KHÁC</div>
          <div className="box-side-content">
            <div>
              Chuyên đề ôn thi học sinh giỏi cấp thành phố 2023 Sở Hải Phòng
            </div>
            <div>
              Đề ôn tập giữa học kì I lớp 12 năm 2023 THPT Amsterdam Hà Nội
            </div>
            <div>
              Đề ôn tập giữa học kì I lớp 12 trường chuyên THPT Trần Phú - Hải
              Phòng
            </div>
            <div>
              Làm quen với các dạng đề thi tốt nghiệp THPT Quốc gia năm 2023
            </div>
          </div>
        </div>

        <div className="box-side">
          <div className="top-content">DANH MỤC TÀI LIỆU</div>
          <div className="box-side-content">
            <a href="/tai-lieu?level=lop-10">tài liệu hoá học lớp 10</a>
            <a href="/tai-lieu?level=lop-11">tài liệu hoá học lớp 11</a>
            <a href="/tai-lieu?level=lop-12">tài liệu hoá học lớp 12</a>
            <a href="/tai-lieu?level=on-thi-dai-hoc">
              tài liệu hoá học ôn thi đại học
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RcmSideBar;
