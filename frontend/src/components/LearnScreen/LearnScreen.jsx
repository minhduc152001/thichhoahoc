import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Avatar, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./LearnScreen.scss";
import Chat from "../Chat/Chat";
import { useSearchParams } from "react-router-dom";
import timeDifference from "../../utils/timeDifference";

function LearnScreen() {
  const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get("lessonId")

  const [question, setQuestion] = useState("");

  const questions = [
    {
      id: "123",
      firstName: "Duc",
      lastName: "Vu Minh",
      avatar: "/default_avatar.png",
      createdAt: new Date("2023-03-10"),
      question: "Do you know the CTHH of glucoze",
    },

    {
      id: "3455",
      firstName: "Duong",
      lastName: "Nguyen T A",
      avatar: "/default_avatar.png",
      createdAt: new Date("2023-02-10"),
      question:
        "Now, the next step is to define the onClick handler for the button. So, changeStyle is the button handler. In order to change the state value, we define our setState value which is setStyle in our case.",
    },
  ];

  const currentCourse = {
    _id: "e114rfjikafs5e",
    name: "Cách Lấy Gốc Hóa Đạt 9 điểm Trong 2 THÁNG | HOẠT HÌNH",
    gradeLevel: "G10",
    img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/6926005ea411e490ff8d4c5d4ff426/chemistry_logo.png?auto=format%2Ccompress&dpr=1",
    description:
      "Khi tôi lên lớp 8, tôi biết là môn hóa rất khó. Tôi cảm thấy mình học bao nhiêu cũng không vào nào là các hóa trị, cách tính số mol, phản ứng... nó làm tôi như muốn nổi khùng lên. Cũng chính vì lí do đó, về nhà tôi không làm bài tập và cũng không soạn bài trước khi đến lớp, tôi cũng chẳng chịu tìm hiểu về môn hóa. Giữa học kì 2 lớp 8, tôi trở thành học sinh mất gốc thật sự. Bạn biết không? Để được trên 6,5 môn hóa tôi phải đi học thêm, không phải để biết thêm kiến thức đâu. Nói nhỏ ở đây thôi nhé, học thêm để thầy cho biết đề trước và nâng điểm.",
    author: "Thầy Vũ Minh Đức",
    isFree: true,
    completedLessons: ["23444", "312"],
    totalLessons: 3,
    totalBuyers: 1043,
    createdAt: new Date("2022-01-23"),
    lessons: [
      {
        id: "23444",
        name: "Bài 1: Kim loại và phi kim",
        description:
          "Kim loại là những chất có tính chất dẫn điện tốt và thường có độ bền cao hơn các chất phi kim.Còn phi kim là các chất không có tính chất dẫn điện và thường có độ bền thấp hơn kim loại.",
        text: "Kim loại và phi kim được phân biệt dựa trên tính chất vật lý và hoá học của chúng. Kim loại có tính chất dẫn điện tốt, có màu sắc và độ bóng cao, độ bền cao và dễ uốn cong. Trong khi đó, phi kim không có tính chất dẫn điện và thường có độ bền thấp hơn. Các phi kim thường có tính chất hóa học khác nhau, nhưng chúng không thể tạo thành mạng tinh thể như kim loại.",
        video: "https://www.youtube.com/embed/4ekf0J-W5k0",
        CreatedAt: new Date("2021-10-10"),
      },
      {
        id: "312",
        name: "Bài 2: Động học học hóa học",
        description:
          "Kim loại là những chất có tính chất dẫn điện tốt và thường có độ bền cao hơn các chất phi kim.Còn phi kim là các chất không có tính chất dẫn điện và thường có độ bền thấp hơn kim loại.",
        text: "Kim loại và phi kim được phân biệt dựa trên tính chất vật lý và hoá học của chúng. Kim loại có tính chất dẫn điện tốt, có màu sắc và độ bóng cao, độ bền cao và dễ uốn cong. Trong khi đó, phi kim không có tính chất dẫn điện và thường có độ bền thấp hơn. Các phi kim thường có tính chất hóa học khác nhau, nhưng chúng không thể tạo thành mạng tinh thể như kim loại.",
        video: "/test-video.mov",
        CreatedAt: new Date("2022-09-10"),
      },
      {
        id: "32980",
        name: "Bài 3: Điện hóa",
        description:
          "kim loại là những chất có tính chất dẫn điện tốt và thường có độ bền cao hơn các chất phi kim.Còn phi kim là các chất không có tính chất dẫn điện và thường có độ bền thấp hơn kim loại.",
        text: "Kim loại và phi kim được phân biệt dựa trên tính chất vật lý và hoá học của chúng. Kim loại có tính chất dẫn điện tốt, có màu sắc và độ bóng cao, độ bền cao và dễ uốn cong. Trong khi đó, phi kim không có tính chất dẫn điện và thường có độ bền thấp hơn. Các phi kim thường có tính chất hóa học khác nhau, nhưng chúng không thể tạo thành mạng tinh thể như kim loại.",
        video: "/test-video.mov",
        CreatedAt: new Date("2023-01-32"),
      },
    ],
  };

  const currentLesson = {
    id: "32980",
    name: "Bài 2: Động học học hóa học",
    description:
      "Kim loại là những chất có tính chất dẫn điện tốt và thường có độ bền cao hơn các chất phi kim.Còn phi kim là các chất không có tính chất dẫn điện và thường có độ bền thấp hơn kim loại.",
    text: "Kim loại và phi kim được phân biệt dựa trên tính chất vật lý và hoá học của chúng. Kim loại có tính chất dẫn điện tốt, có màu sắc và độ bóng cao, độ bền cao và dễ uốn cong. Trong khi đó, phi kim không có tính chất dẫn điện và thường có độ bền thấp hơn. Các phi kim thường có tính chất hóa học khác nhau, nhưng chúng không thể tạo thành mạng tinh thể như kim loại.",
    video: "/test-video.mov",
    createdAt: new Date("2022-10-10"),
  };

  const lessons = currentCourse.lessons;

  const isLessonCompleted = (lessonId) =>
    currentCourse.completedLessons.includes(lessonId);

  return (
    <div className="container">
      <div className="course-video">
        <ReactPlayer
          width={"100%"}
          height={"60vh"}
          style={{ backgroundColor: "#333" }}
          volume={0.8}
          controls={true}
          url={currentLesson.video}
          onEnded={() => {}}
        />
      </div>

      <div className="navigation-tabs">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Chi tiết
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="course-qa-tab"
              data-bs-toggle="tab"
              data-bs-target="#course-qa"
              type="button"
              role="tab"
              aria-controls="course-qa"
              aria-selected="false"
            >
              Hỏi đáp
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="course-lessons-tab"
              data-bs-toggle="tab"
              data-bs-target="#course-lessons"
              type="button"
              role="tab"
              aria-controls="course-lessons"
              aria-selected="false"
            >
              Bài học
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <h3>Khoá học</h3>
            <p>{currentCourse.name}</p>
            <h3>Tên bài học</h3>
            <p>{currentLesson.name}</p>
            <h3>Mô tả</h3>
            <p>{currentLesson.description}</p>
            <h3>Hướng dẫn học</h3>
            <p>{currentLesson.text}</p>
            <p>Đã tạo {timeDifference(currentLesson.createdAt)}</p>
          </div>
          <div
            className="tab-pane fade"
            id="course-qa"
            role="tabpanel"
            aria-labelledby="course-qa-tab"
          >
            <div className="main-qa-content">
              <Avatar
                className="avatar"
                alt="Cindy Baker"
                src="/default_avatar.png"
              />
              <TextField
                id="filled-basic"
                label="Viết bình luận..."
                variant="filled"
                fullWidth={true}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div className="send-button">
              <Button
                disabled={!question}
                variant="contained"
                endIcon={<SendIcon />}
                size="medium"
              >
                Bình luận
              </Button>
            </div>
            <div className="list-qa">
              {questions.map((q) => {
                return <Chat q={q} />;
              })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="course-lessons"
            role="tabpanel"
            aria-labelledby="course-lessons-tab"
          >
            <div className="list-lessons">
              {lessons.map((lesson, i) => (
                <div className="lesson">
                  {/* <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={lesson.name}
                    />
                  </FormGroup> */}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      {...(isLessonCompleted(lesson.id) && {
                        defaultChecked: true,
                      })}
                      id={`check-${lesson.id}`}
                    />
                    <label class="form-check-label" for={`check-${lesson.id}`}>
                      <a href="/">{`${i + 1}. ${lesson.name}`}</a>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnScreen;
