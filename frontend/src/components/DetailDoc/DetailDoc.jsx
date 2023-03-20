import React from "react";
import "./DetailDoc.scss";
import RcmSideBar from "../RcmSideBar/RcmSideBar";
import MainTitle from "../MainTitle/MainTitle";
import PDFShow from "../PDFShow/PDFShow";

function DetailDoc() {
  const pdfUrl =
    "https://firebasestorage.googleapis.com/v0/b/thesis-7edb1.appspot.com/o/pdf%2Fpdf-hoa-hoc-12.pdf?alt=media&token=7f7e9913-1979-43c4-9198-a190a517867d";

  const docLink = window.location.href;

  return (
    <div className="doc-container">
      <div className="pure-g">
        <div className="rcm-side-bar">
          <RcmSideBar />
        </div>
        <div className="main-box">
          <MainTitle
            title={
              "CHUYÊN ĐỀ ÔN THI HỌC SINH GIỎI CẤP THÀNH PHỐ 2023 SỞ HẢI PHÒNG"
            }
          />
          <div className="date-update">Ngày cập nhật: 04/04/2022</div>
          <div className="remind-mes">
            ChemX.vn gửi tới các em tài liệu bộ chuyên đề ôn thi học sinh giỏi
            cấp thành phố 2023 Sở GD&DT Hải Phòng.
          </div>
          <div className="remind-mes">
            Các em học sinh tải tài liệu về và làm bài tập ra vở để luyện tập
            sau đó xem file đáp án để so sánh kết quả và thảo luận cùng bạn bè!
          </div>
          <div className="remind-mes">Chúc các em học tập tốt!</div>

          <PDFShow pdfUrl={pdfUrl} />
        </div>
      </div>
      <div className="download-area">
        <a
          href={pdfUrl}
          download="CHUYÊN ĐỀ ÔN THI HỌC SINH GIỎI CẤP THÀNH PHỐ 2023 SỞ HẢI PHÒNG"
        >
          <img src="/tai-tai-lieu.png" alt="Tải tài liệu" />
        </a>

        <a
          href={pdfUrl}
          download="Lời giải: CHUYÊN ĐỀ ÔN THI HỌC SINH GIỎI CẤP THÀNH PHỐ 2023 SỞ HẢI PHÒNG"
        >
          <img src="/tai-loi-giai.png" alt="Tải lời giải" />
        </a>
      </div>

      <div class="sharing-networks">
        <div
          class="sharing-network-button"
          onClick={() =>
            window.open(
              "https://twitter.com/intent/tweet?url=" + docLink,
              "_blank"
            )
          }
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4917_23117)">
              <path
                d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                fill="#03A9F4"
              />
            </g>
            <defs>
              <clipPath id="clip0_4917_23117">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Twitter</span>
        </div>

        <div
          class="sharing-network-button"
          onClick={() =>
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=" + docLink,
              "_blank"
            )
          }
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5.5H9V3.5C9 2.948 9.448 2.5 10 2.5H11V0H9C7.343 0 6 1.343 6 3V5.5H4V8H6V16H9V8H11L12 5.5Z"
              fill="#1976D2"
            />
          </svg>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}

export default DetailDoc;
