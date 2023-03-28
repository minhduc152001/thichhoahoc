import React from "react";
import "./Home.scss";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <div>
      <HomeBanner />
      <div className="main-container">
        <Carousel />

        <div className="grid-container">
          <div className="grid-row">
            <div
              onClick={() => (window.location.href = "/khoa-hoc?level=lop-10")}
              className="grid-cell-box"
              style={{ marginRight: "20px", background: "rgb(28, 184, 65)" }}
            >
              Lớp 10
            </div>
            <div
              onClick={() => (window.location.href = "/khoa-hoc?level=lop-11")}
              className="grid-cell-box"
              style={{ marginLeft: "20px", backgroundColor: "#0078e7" }}
            >
              Lớp 11
            </div>
          </div>

          <div className="grid-row">
            <div
              onClick={() => (window.location.href = "/khoa-hoc?level=lop-12")}
              className="grid-cell-box"
              style={{ marginRight: "20px", background: "rgb(128, 88, 165)" }}
            >
              Lớp 12
            </div>
            <div
              onClick={() =>
                (window.location.href = "/khoa-hoc?level=on-thi-dai-hoc")
              }
              className="grid-cell-box"
              style={{ marginLeft: "20px", background: "rgb(223, 117, 20)" }}
            >
              Ôn thi Đại học
            </div>
          </div>
        </div>

        <div className="production-box">
          <div className="author-production">
            <div className="quote-param">
              "ChemX là website học hoá online hiệu quả với hàng ngàn video bài
              giảng, bài tập luyện tập từ cơ bản đến nâng cao. Tôi luôn nỗ lực
              không ngừng để mang đến cho học sinh những bài học sinh động, lý
              thú, giúp các em vững vàng kiến thức và say mê, yêu thích môn Hoá
              học hơn. ChemX là tình yêu, đam mê và tâm huyết của tôi."
            </div>

            <div className="author-infomation">
              <img
                src="https://vnn-imgs-f.vgcloud.vn/2019/04/26/15/truong-dh-kinh-te-quoc-dan-co-hieu-truong-moi.jpg"
                alt=""
              />
              <div className="author-bio">
                <div className="author-name-span">
                  Thầy <span className="hightlight-span">Vũ Minh Đức</span> (Chú
                  Tiểu Thích Hoá)
                </div>
                <div className="author-role-span">
                  Sáng lập{" "}
                  <span className="hightlight-span">ChemX.fly.dev</span> và{" "}
                  <span className="hightlight-span">ChemistrySpace.edu.vn</span>
                </div>
              </div>
            </div>
          </div>
          <div className="youtube-production">
            <iframe
              src="https://www.youtube.com/embed/P3RXtoYCW4M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="subscription-for-info">
          <div className="form-container">
            <div className="form-subscription">
              <div className="form-heading">ĐĂNG KÝ NHẬN NGAY TƯ VẤN</div>
              <div className="info-subscription">
                <input type="text" placeholder="Nhập họ và tên:" />
                <input type="text" placeholder="Số điện thoại:" />
                <input type="text" placeholder="Lực học hiện tại:" />
                <input type="text" placeholder="Năm sinh:" />
                <input
                  type="button"
                  value="Gửi ngay"
                  className="info-send-button"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="news-bar">
          <div className="box-news">
            <div className="news-heading">
              <img src="/research-icon.png" alt="research icon" />
              <div className="news-box-title">Tìm tòi học hoá</div>
            </div>
            <div className="news-box-item">
              <img src="/mole-number.jpeg" alt="mole number" />
              <div className="box-item-detail">
                <a href="#" className="news-item-title">
                  NHỮNG ĐIỀU KHÓ KHĂN VỀ SỐ MOL
                </a>
                <p className="news-content">
                  Từ khi mới bắt đầu tiếp xúc với hoá học, chúng ta đã quen
                  thuộc với số mol. Có thể nói hai công thức phổ biến nhất trong
                  bộ môn…
                  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="box-news">
            <div className="news-heading">
              <img src="/icon_worldnews.png" alt="world news icon" />
              <div className="news-box-title">Nhìn ra thế giới</div>
            </div>
            <div className="news-box-item">
              <img
                src="data:image/jpeg;base64,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"
                alt="mole number"
              />
              <div className="box-item-detail">
                <a href="#" className="news-item-title">
                  VẤN ĐỀ KHÓ KHĂN VỚI CÁC BẠN TRẺ
                </a>
                <p className="news-content">
                  Từ khi mới bắt đầu tiếp xúc với hoá học. Có thể nói hai công
                  thức phổ biến nhất trong bộ môn…
                  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="news-bar">
          <div className="box-news">
            <div className="news-heading">
              <img src="/icon_star.png" alt="research icon" />
              <div className="news-box-title">GƯƠNG SÁNG - KINH NGHIỆM</div>
            </div>
            <div className="news-box-item">
              <img
                src="https://www.thoughtco.com/thmb/6MsMmUK27akFhb8i89kj95J5iko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg"
                alt="mole number"
              />
              <div className="box-item-detail">
                <a href="#" className="news-item-title">
                  LỜI NÓI VÀ NHỮNG CHIẾC ĐINH
                </a>
                <p className="news-content">
                  Vết thương tâm hồn rất khó hàn gắn và chỉ có thể lành được khi
                  có tình thương yêu chân thành và thực sự…
                  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="box-news">
            <div className="news-heading">
              <img src="/icon_qa.png" alt="world news icon" />
              <div className="news-box-title">ChemX Blog – Tư duy Hoá học</div>
            </div>
            <div className="news-box-item">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/6926005ea411e490ff8d4c5d4ff426/chemistry_logo.png?auto=format%2Ccompress&dpr=1"
                alt="mole number"
              />
              <div className="box-item-detail">
                <a href="#" className="news-item-title">
                  VẤN ĐỀ KHÓ KHĂN VỚI CÁC BẠN TRẺ
                </a>
                <p className="news-content">
                  Từ khi mới bắt đầu tiếp xúc với hoá học. Có thể nói hai công
                  thức phổ biến nhất trong bộ môn…
                  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="news-bar">
          <div className="box-news">
            <div className="news-heading">
              <img
                src="data:image/png;base64,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"
                alt="research icon"
              />
              <div className="news-box-title">Tin tức giáo dục</div>
            </div>
            <div className="news-box-item">
              <img
                src="https://www.thoughtco.com/thmb/6MsMmUK27akFhb8i89kj95J5iko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-545286316-433dd345105e4c6ebe4cdd8d2317fdaa.jpg"
                alt="mole number"
              />
              <div className="box-item-detail">
                <a href="#" className="news-item-title">
                  Lịch thi tuyển sinh vào lớp 10 năm học 2023 - 2024
                </a>
                <p className="news-content">
                  Lịch thi tuyển sinh vào lớp 6 trường Hà Nội Amsterdam năm học
                  2022 - 2023.…
                  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="box-news">
            <div className="news-heading">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0s8KOc-L5g6LRj1pfTL7xaPKKpW33SnMTw&usqp=CAU"
                alt="world news icon"
              />
              <div className="news-box-title">Tài liệu học tập</div>
            </div>
            <div className="news-box-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_mNz39yxxFallx2hsHoW_wO3slgASYYz6Q&usqp=CAU"
                alt="mole number"
              />
              <div className="box-item-detail">
                <a href="#" className="news-item-title">
                  Đề thi học sinh giỏi THPT tỉnh Quảng Ninh năm 2023
                </a>
                <p className="news-content">
                  Đề thi học sinh giỏi môn Hoá học THPT tỉnh Quảng Ninh năm 2023
                  …<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fast-riddle-container">
        <div className="riddle-heading">
          <a href="/do-vui" className="riddle-header">
            ĐỐ VUI CÙNG CHEMX
          </a>
          <div className="riddle-slogan">** Học mà chơi, chơi mà học **</div>
        </div>

        <div className="riddle-body">
          <div className="riddle-question-box">
            <img
              src="https://www.riddlesnow.com/wp-content/uploads/2020/07/WHICH-TANK-IS-SAFE-RIDDLES-ROOM.jpg"
              alt="The funny riddle"
            />
            <div className="riddle-title-param">Câu hỏi đố vui 179</div>
            <div className="riddle-desc-param">
              Điền số thích hợp vào dấu hỏi chấm.
            </div>
          </div>

          <div className="riddle-answer-box">
            <div className="riddle-answer-header">Câu trả lời của bạn</div>
            <div className="riddle-requirement">
              (*) Bạn phải đăng nhập để gửi câu trả lời. Hạn trả lời là 08:41
              01-05-2023
            </div>
            <div className="riddle-answer-param">Nội dung:</div>
            <div className="riddle-answer-input">
              <textarea
                name="riddle-answer-input"
                id="answer-input"
                placeholder="Nhập lời giải/đáp án của bạn"
                style={{ resize: "none" }}
              ></textarea>
              <div className="submit-riddle-btns">
                <button>Gửi lời giải</button>
                <button>Xem chi tiết</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
