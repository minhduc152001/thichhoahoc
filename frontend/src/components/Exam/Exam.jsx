import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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
import axios from "axios";
import { user } from "../../constants/profileUser";

function Exam() {
  let { testId } = useParams();

  const [test, setTest] = useState({});
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [timeToDo, setTimeToDo] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const [score, setScore] = useState(0);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BE_HOST}/api/test/${testId}`
    );
    setTest(data.test);
    setTime(data.test.totalTime);
    setTimeToDo(data.test.totalTime);
  };

  useEffect(() => {
    const interval = setInterval(() => setTimeToDo((prev) => prev + 1), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const [answers, setAnswers] = useState(
    new Array(test?.questions?.length).fill(undefined)
  );
  const [dialogActive, setDialogActive] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  function handleAnswerSelect(e, index) {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  }

  const calcTotalScore = () => {
    setScore(0);
    test.questions.map((q, i) => {
      q.correctAnswer === answers[i].slice(-1) &&
        setScore((prev) => prev + q.score);
    });
  };

  const totalCorrectAnswers = () => {
    let sum = 0;
    test.questions.map((q, i) => {
      q.correctAnswer === answers[i].slice(-1) && sum++;
    });
    return sum;
  };

  const handleCloseDialog = () => {
    setDialogActive(false);
  };

  const handleSubmit = async () => {
    setShowAnswer(true);
    setIsEnded(true);
    await handleCompleteExam();
    setDialogActive(false);
    window.scrollTo(0, 0);
  };

  const getAnswerColorRadio = (q, answer) => {
    if (!showAnswer) {
      return "primary";
    }
    if (q.correctAnswer === answer) {
      return "success";
    } else {
      return "error";
    }
  };

  const getAnswerColorText = (q, answer) => {
    if (!showAnswer) {
      return "#212529";
    }
    if (q.correctAnswer === answer) {
      return "#07bc0c";
    } else {
      return "#e74c3c";
    }
  };

  const handleCompleteExam = async () => {
    await axios.post(
      `${process.env.REACT_APP_BE_HOST}/api/test-record`,
      test.questions.map((q, i) => {
        return {
          testQuestionId: q.id,
          userId: user.userId,
          answer: answers[i].slice(-1),
          isCorrect: q.correctAnswer === answers[i].slice(-1),
        };
      })
    );

    await axios.post(`${process.env.REACT_APP_BE_HOST}/api/test-history`, {
      userId: user.userId,
      mockTestId: test.id,
      doneTime: new Intl.NumberFormat("en-US").format(
        test.totalTime - timeToDo / 60
      ),
      highestScore: score,
    });
  };

  console.log(score);

  return (
    <>
      <div>
        <MainTitle title={test.name} />
        <div className="main-test">
          <div className="test-questions">
            {showAnswer && (
              <>
                <h4 style={{ color: "#1b6800", textAlign: "center" }}>
                  Đúng {totalCorrectAnswers()}/{test.questions?.length} câu
                </h4>
              </>
            )}
            {test?.questions?.map((q, i) => (
              <div className="question">
                <FormControl>
                  <FormLabel className="question-text">
                    {!showAnswer ? (
                      <></>
                    ) : q.correctAnswer === answers[i]?.slice(-1) ? (
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
                      label={q.optionA}
                      style={{
                        color: getAnswerColorText(q, "A"),
                      }}
                    />

                    <FormControlLabel
                      value={`${i + 1}B`}
                      control={<Radio color={getAnswerColorRadio(q, "B")} />}
                      label={q.optionB}
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
                      label={q.optionC}
                    />

                    <FormControlLabel
                      value={`${i + 1}D`}
                      control={<Radio color={getAnswerColorRadio(q, "D")} />}
                      style={{
                        color: getAnswerColorText(q, "D"),
                      }}
                      label={q.optionD}
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
              {test?.questions?.map((q, i) => (
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
          minutes={test.totalTime}
          time={time}
          setTime={setTime}
          isEnded={isEnded}
        />
        <button
          onClick={() => {
            calcTotalScore();
            setDialogActive(true);
          }}
        >
          Hoàn thành
        </button>
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
