import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Avatar, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./LearnScreen.scss";
import Chat from "../Chat/Chat";
import { useParams } from "react-router-dom";
import timeDifference from "../../utils/timeDifference";
import { user } from "../../constants/profileUser";
import axios from "axios";

function LearnScreen() {
  const { REACT_APP_BE_HOST } = process.env;
  let { courseId, lessonId } = useParams();

  const [course, setCourse] = useState({});
  const [lesson, setLesson] = useState({});
  const [lessons, setLessons] = useState([]);
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([
    {
      id: "123",
      firstName: "Duc",
      lastName: "Vu Minh",
      avatar:
        "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1680079861~exp=1680080461~hmac=29764fcfeabcea54be50c50ebfb8f34e9383dceeeb744c9d2559385144d5138e",
      createdAt: new Date("2023-03-10"),
      question: "Cho em hỏi tại sao ở phút 23 lại có phản ứng vậy ạ?",
    },

    {
      id: "123",
      firstName: "Nam",
      lastName: "Nguyen Xuân",
      avatar: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
      createdAt: new Date("2023-02-10"),
      question: "Rất hữu ích",
    },

    {
      id: "123",
      firstName: "Quang",
      lastName: "Vũ Minh",
      avatar: "https://cdn-icons-png.flaticon.com/512/2661/2661129.png",
      createdAt: new Date("2022-12-19"),
      question: "cảm ơn thầy nhiều",
    },

    {
      id: "123",
      firstName: "Lam",
      lastName: "Nguyễn Thị Hoai",
      avatar: "https://cdn-icons-png.flaticon.com/512/547/547413.png",
      createdAt: new Date("2022-11-11"),
      question: "sao đường lại bị tác dụng vậy thầy",
    },

    {
      id: "3455",
      firstName: "Dương",
      lastName: "Nguyễn T A",
      avatar: "https://cdn-icons-png.flaticon.com/512/3940/3940417.png",
      createdAt: new Date("2022-02-10"),
      question: "cảm ơn thầy",
    },
  ]);

  const fetchData = async () => {
    const { data: courseData } = await axios.get(
      `${REACT_APP_BE_HOST}/api/course/${courseId}`
    );
    const { data: completedLessons } = await axios.get(
      `${REACT_APP_BE_HOST}/api/participation/${courseId}/${user.userId}`
    );
    setCourse({
      ...courseData.course,
      completedLessons: completedLessons.completedLessons.completedLessons,
    });
    setLessons(courseData.course.lessons);
    setLesson(courseData.course.lessons.filter((el) => el._id === lessonId)[0]);
  };

  const isLessonCompleted = (lessonId) =>
    course.completedLessons?.includes(lessonId);

  const handleAddComment = (e) => {
    setQuestions((prev) => [
      { ...user, question, createdAt: Date.now() },
      ...prev,
    ]);
    setQuestion("");
  };

  const handleEndLesson = async (lessonId) => {
    setCourse((prev) => {
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
      };
    });
    await axios.put(
      `${REACT_APP_BE_HOST}/api/participation/${courseId}/${user.userId}`,
      { newCompletedLessonId: lessonId }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="course-video">
        <ReactPlayer
          width={"100%"}
          height={"60vh"}
          style={{ backgroundColor: "#333" }}
          volume={0.8}
          controls={true}
          url={lesson?.videoUrl}
          onEnded={() => {
            handleEndLesson(lesson._id);
          }}
        />
      </div>

      <div className="navigation-tabs">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
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
              Danh sách bài học
            </button>
          </li>
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
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <h3>Khoá học</h3>
            <p>{course.name}</p>
            <h3>Tên bài học</h3>
            <p>{lesson.name}</p>
            <h3>Mô tả</h3>
            <p>{lesson.description}</p>
            <h3>Hướng dẫn học</h3>
            <p>{lesson.text}</p>
            <p>Đã tạo {timeDifference(new Date(lesson.createdAt))}</p>
          </div>
          <div
            className="tab-pane fade"
            id="course-qa"
            role="tabpanel"
            aria-labelledby="course-qa-tab"
          >
            <div className="main-qa-content">
              <Avatar className="avatar" alt="Cindy Baker" src={user.avatar} />
              <TextField
                id="filled-basic"
                label="Viết bình luận..."
                variant="filled"
                fullWidth={true}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div className="send-button">
              <Button
                disabled={!question}
                variant="contained"
                endIcon={<SendIcon />}
                size="medium"
                onClick={handleAddComment}
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
              {lessons?.map((lesson, i) => (
                <div className="lesson">
                  {/* <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label={lesson.name}
                    />
                  </FormGroup> */}
                  <div
                    class={`form-check ${
                      lessonId === lesson.id && "bg-from-check"
                    }`}
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      // {...(isLessonCompleted(lesson?.id) && {
                      //   checked: true,
                      // })}
                      checked={isLessonCompleted(lesson?.id)}
                      id={`check-${lesson.id}`}
                    />
                    <label class="form-check-label" for={`check-${lesson.id}`}>
                      <a href={`/hoc/${courseId}/bai-hoc/${lesson.id}`}>{`${
                        i + 1
                      }. ${lesson.name}`}</a>
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
