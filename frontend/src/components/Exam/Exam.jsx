import React from "react";
import { useState } from "react";
import "./Exam.scss";
import MainTitle from "../MainTitle/MainTitle";
import CountDown from "../Countdown/CountDown";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Answer from "../Answer/Answer";

function Exam() {
  const questions = [
    {
      question:
        "Trong bảng tuần hoàn các nguyên tố hóa học, nguyên tố nào có số proton bằng 6?",
      options: ["A. Carbon", "B. Nitơ", "C. Oxy", "D. Florua"],
      answer: "A",
      explaination:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur, dolores enim rem obcaecati maxime nam ipsam consectetur! Repudiandae ab perspiciatis rem vel. Tenetur explicabo in iure veritatis officia porro",
    },
    {
      question:
        "Số lượng chất cơ bản (nguyên tố hoặc hợp chất) trong phương trình hóa học trên cân bằng phải bằng nhau. Điều này được gọi là:",
      options: [
        "A. Định luật bảo toàn khối lượng",
        "B. Định luật bảo toàn năng lượng",
        "C. Định luật bảo toàn điện tích",
        "D. Định luật bảo toàn nguyên tử",
      ],
      answer: "D",
      explaination:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur, dolores enim rem obcaecati maxime nam ipsam consectetur! Repudiandae ab perspiciatis rem vel. Tenetur explicabo in iure veritatis officia porro",
    },
    {
      question:
        "Trong quá trình luyện kim, than đen (cacbon) thường được sử dụng để làm gì?",
      options: [
        "A. Làm chất hoạt động chính trong pin",
        "B. Làm chất chống ăn mòn",
        "C. Làm chất chống cháy",
        "D. Làm chất khử oxit",
      ],
      answer: "D",
      explaination:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur, dolores enim rem obcaecati maxime nam ipsam consectetur! Repudiandae ab perspiciatis rem vel. Tenetur explicabo in iure veritatis officia porro",
    },
    {
      question: "Trong phản ứng oxi hóa khử, chất nào bị oxi hóa?",
      options: [
        "A. Chất có khả năng nhận electron",
        "B. Chất có khả năng nhả electron",
        "C. Chất có khả năng trung hòa acid",
        "D. Chất có khả năng trung hòa bazơ",
      ],
      answer: "A",
      explaination:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur, dolores enim rem obcaecati maxime nam ipsam consectetur! Repudiandae ab perspiciatis rem vel. Tenetur explicabo in iure veritatis officia porro",
    },
    {
      question: "Phản ứng nào sau đây là phản ứng trao đổi?",
      options: [
        "A. Fe + CuSO4 → FeSO4 + Cu",
        "B. 2H2 + O2 → 2H2O",
        "C. NaCl + AgNO3 → NaNO3 + AgCl",
        "D. CaCO3 → CaO + CO2",
      ],
      answer: "C",
      explaination:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur, dolores enim rem obcaecati maxime nam ipsam consectetur! Repudiandae ab perspiciatis rem vel. Tenetur explicabo in iure veritatis officia porro",
    },
    {
      question:
        "Phương trình hóa học nào sau đây biểu diễn phản ứng trung hòa HCl bằng NaOH?",
      options: [
        "A. HCl + NaOH → NaCl + H2O",
        "B. HCl + H2O → H3O+ + Cl-",
        "C. NaOH",
        "D. NaOH + H2O → Na+ + OH- + H2O",
      ],
      answer: "A",
      explaination:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur, dolores enim rem obcaecati maxime nam ipsam consectetur! Repudiandae ab perspiciatis rem vel. Tenetur explicabo in iure veritatis officia porro",
    },
    {
      question: "Trong cấu trúc của một nguyên tử, proton được tìm thấy ở đâu?",
      options: [
        "A. Trong hạt nhân",
        "B. Quanh hạt nhân",
        "C. Trong electron",
        "D. Quanh electron",
      ],
      answer: "A",
      explaination:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur, dolores enim rem obcaecati maxime nam ipsam consectetur! Repudiandae ab perspiciatis rem vel. Tenetur explicabo in iure veritatis officia porro",
    },
    {
      question: "Một chất có khả năng làm tan các chất khác được gọi là gì?",
      options: [
        "A. Chất oxi hóa",
        "B. Chất khử",
        "C. Chất tan",
        "D. Chất kết tủa",
      ],
      answer: "C",
      explaination:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur, dolores enim rem obcaecati maxime nam ipsam consectetur! Repudiandae ab perspiciatis rem vel. Tenetur explicabo in iure veritatis officia porro",
    },
    {
      question:
        "Trong phương trình hóa học, ký hiệu (s) sau tên chất biểu thị cho chất đó ở dạng gì?",
      options: [
        "A. Chất rắn",
        "B. Chất lỏng",
        "C. Chất khí",
        "D. Chất tan trong nước",
      ],
      answer: "A",
      explaination:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur, dolores enim rem obcaecati maxime nam ipsam consectetur! Repudiandae ab perspiciatis rem vel. Tenetur explicabo in iure veritatis officia porro",
    },
    {
      question: "Số electron của nguyên tử lưu động trên lớp năng lượng nào?",
      options: [
        "A. Lớp năng lượng ngoài cùng",
        "B. Lớp năng lượng thứ hai",
        "C. Lớp năng lượng thứ ba",
        "D. Lớp năng lượng thứ tư",
      ],
      answer: "A",
      explaination:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur, dolores enim rem obcaecati maxime nam ipsam consectetur! Repudiandae ab perspiciatis rem vel. Tenetur explicabo in iure veritatis officia porro",
    },
  ];

  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(undefined)
  );
  const [dialogActive, setDialogActive] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  function handleAnswerSelect(e, index) {
    const newAnswers = [...answers];
    console.log(e);
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  }

  const handleCloseDialog = () => {
    setDialogActive(false);
  };
  const handleSubmit = () => {
    setShowAnswer(true);
    setDialogActive(false);
    window.scrollTo(0, 0);
  };

  const getAnswerColorRadio = (q, answer) => {
    if (!showAnswer) {
      return "primary";
    }
    if (q.answer === answer) {
      return "success";
    } else {
      return "error";
    }
  };

  const getAnswerColorText = (q, answer) => {
    if (!showAnswer) {
      return "#212529";
    }
    if (q.answer === answer) {
      return "#07bc0c";
    } else {
      return "#e74c3c";
    }
  };

  return (
    <>
      <div>
        <MainTitle
          title={"kiểm tra vào lớp 10 trường THPT Armsterdam Hà Nội 2023"}
        />
        <div className="main-test">
          <div className="test-questions">
            {questions.map((q, i) => (
              <div className="question">
                <FormControl>
                  <FormLabel className="question-text">
                    {!showAnswer ? (
                      <></>
                    ) : q.answer === answers[i]?.slice(-1) ? (
                      <i
                        style={{ color: "green", marginRight: "5px" }}
                        class="fa fa-check"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        style={{ color: "red", marginRight: "5px" }}
                        class="fa fa-times"
                        aria-hidden="true"
                      ></i>
                    )}
                    {`Câu ${i + 1}: ${q.question}`}
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name={`radio-buttons-group-${i + 1}`}
                    onChange={(e) => {
                      handleAnswerSelect(e, i);
                    }}
                  >
                    <FormControlLabel
                      value={`${i + 1}A`}
                      control={<Radio color={getAnswerColorRadio(q, "A")} />}
                      label={q.options[0]}
                      style={{
                        color: getAnswerColorText(q, "A"),
                      }}
                    />

                    <FormControlLabel
                      value={`${i + 1}B`}
                      control={<Radio color={getAnswerColorRadio(q, "B")} />}
                      label={q.options[1]}
                      style={{
                        color: getAnswerColorText(q, "B"),
                      }}
                    />

                    <FormControlLabel
                      value={`${i + 1}C`}
                      control={<Radio color={getAnswerColorRadio(q, "C")} />}
                      style={{
                        color: getAnswerColorText(q, "C"),
                      }}
                      label={q.options[2]}
                    />

                    <FormControlLabel
                      value={`${i + 1}D`}
                      control={<Radio color={getAnswerColorRadio(q, "D")} />}
                      style={{
                        color: getAnswerColorText(q, "D"),
                      }}
                      label={q.options[3]}
                    />
                  </RadioGroup>
                </FormControl>

                <Answer showAnswer={showAnswer} question={q} />
              </div>
            ))}
          </div>

          <div className="check-questions">
            <h4>Câu hỏi đã trả lời</h4>
            <div className="question-buttons">
              {questions.map((q, i) => (
                <div
                  className={`${
                    answers[i]
                      ? "blue-bgcolor checked-question"
                      : "checked-question"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="timer">
        <img src="/clock.png" alt="dong-ho-tinh-gio" />
        <CountDown
          showAnswer={showAnswer}
          handleSubmit={handleSubmit}
          minutes={20}
        />
        <button onClick={() => setDialogActive(true)}>Hoàn thành</button>
      </div>

      {dialogActive && (
        <div>
          <Dialog
            open={dialogActive}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Bài làm đã có thể nộp"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Thời gian vẫn còn. Bạn có chắc là muốn nộp bài?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Huỷ</Button>
              <Button onClick={handleSubmit} autoFocus>
                Đồng ý
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
}

export default Exam;
