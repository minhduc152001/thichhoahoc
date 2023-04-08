import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { v4 } from "uuid";
import axios from "axios";
import { allFieldsNotEmpty } from "../../utils/checkAllFieldsEmpty";

const New = ({ title }) => {
  const backendHost = process.env.REACT_APP_BE_HOST;
  const initNewQuestion = (uuid) => {
    return {
      questionId: uuid,
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "A",
      explaination: "",
    };
  };

  const [questionsList, setQuestionsList] = useState([initNewQuestion(v4())]);
  const [test, setTest] = useState({
    name: "",
    score: 0,
    totalTime: 0,
    gradeLevel: "G10",
    questions: [],
  });

  const handleNewQuestion = () => {
    setQuestionsList((prev) => {
      return [...prev, initNewQuestion(v4())];
    });
  };

  const handleRemoveQuestionItem = (questionId) => {
    setQuestionsList((prev) =>
      prev.filter((el) => el.questionId !== questionId)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, score, totalTime } = test;
    const isFormFilled =
      name && score > 0 && totalTime > 0 && allFieldsNotEmpty(questionsList);
    if (!isFormFilled) {
      alert("All fields are required and must be valid!");
      return;
    } else
      try {
        const url = backendHost + `/api/test`;
        await axios.post(url, { ...test, questions: questionsList });
        alert("Successfully added!");
        window.location.reload();
      } catch (error) {
        alert("Failed to add...");
        console.log(error);
      }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left" style={{ flex: 2 }}>
            {questionsList.map((q, i) => (
              <div className="question-fields">
                <div
                  className="question-title"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "green",
                  }}
                >
                  Question {i + 1}:{" "}
                  <DeleteIcon
                    className="remove-icon"
                    onClick={() => handleRemoveQuestionItem(q.questionId)}
                  />
                </div>
                <textarea
                  onChange={(e) => {
                    e.preventDefault();
                    let updatedList = questionsList.map((item) => {
                      if (item.questionId == q.questionId) {
                        return { ...item, question: e.target.value };
                      }
                      return item;
                    });
                    setQuestionsList(updatedList);
                  }}
                  type="text"
                  placeholder={
                    "Cho a mol Na vào 300 ml dung dịch HCl 1M thu được 4,48 lít khí dung dịch X (dktc). Cô cạn X thu được m gam chất rắn khan. Tính m?"
                  }
                />
                <div className="choices-box">
                  <div className="choice-container">
                    <div className="choice-detail">
                      A:{" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          let updatedList = questionsList.map((item) => {
                            if (item.questionId == q.questionId) {
                              return { ...item, optionA: e.target.value };
                            }
                            return item;
                          });
                          setQuestionsList(updatedList);
                        }}
                        placeholder="21,55"
                      />
                    </div>
                    <div className="choice-detail">
                      B:{" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          let updatedList = questionsList.map((item) => {
                            if (item.questionId == q.questionId) {
                              return { ...item, optionB: e.target.value };
                            }
                            return item;
                          });
                          setQuestionsList(updatedList);
                        }}
                        placeholder="33,55"
                      />
                    </div>
                    <div className="choice-detail">
                      C:{" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          let updatedList = questionsList.map((item) => {
                            if (item.questionId == q.questionId) {
                              return { ...item, optionC: e.target.value };
                            }
                            return item;
                          });
                          setQuestionsList(updatedList);
                        }}
                        placeholder="17,55"
                      />
                    </div>
                    <div className="choice-detail">
                      D:{" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          let updatedList = questionsList.map((item) => {
                            if (item.questionId == q.questionId) {
                              return { ...item, optionD: e.target.value };
                            }
                            return item;
                          });
                          setQuestionsList(updatedList);
                        }}
                        placeholder="19,55"
                      />
                    </div>
                  </div>
                  <label htmlFor="">Correct choice: </label>
                  <select
                    defaultValue="A"
                    onChange={(e) => {
                      let updatedList = questionsList.map((item) => {
                        if (item.questionId == q.questionId) {
                          return { ...item, correctAnswer: e.target.value };
                        }
                        return item;
                      });
                      setQuestionsList(updatedList);
                    }}
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>

                  <div
                    className="question-title"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    Explanation:
                  </div>
                  <textarea
                    onChange={(e) => {
                      e.preventDefault();
                      let updatedList = questionsList.map((item) => {
                        if (item.questionId == q.questionId) {
                          return { ...item, explaination: e.target.value };
                        }
                        return item;
                      });
                      setQuestionsList(updatedList);
                    }}
                    type="text"
                    placeholder={`Số mol HCl: 0,3 mol\n=> m là: 0,3 x 58,5 = 17,55 (g)`}
                  />
                </div>
                <hr />
              </div>
            ))}

            <button
              style={{
                background: "teal",
                color: "white",
                cursor: "pointer",
                border: "1px solid teal",
                fontSize: "15px",
                width: "60px",
              }}
              onClick={handleNewQuestion}
            >
              Add
            </button>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Test title</label>
                <input
                  type="text"
                  onChange={(e) => {
                    e.preventDefault();
                    setTest((prev) => {
                      {
                        return { ...prev, name: e.target.value };
                      }
                    });
                  }}
                  placeholder="Đề minh hoạ thi THPT Quốc gia môn Hoá học 2023"
                />
              </div>

              {/* grade level */}
              <div className="formInput">
                <label>Grade level</label>
                <select
                  name="subscription"
                  id="subscription-select"
                  defaultValue="G10"
                  onChange={(e) => {
                    e.preventDefault();
                    setTest((prev) => {
                      {
                        return { ...prev, gradeLevel: e.target.value };
                      }
                    });
                  }}
                >
                  <option value="G10">Lớp 10</option>
                  <option value="G11">Lớp 11</option>
                  <option value="G12">Lớp 12</option>
                  <option value="collegePrep">Ôn thi Đại học</option>
                </select>
              </div>

              <div className="formInput">
                <label>Score (each question)</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setTest((prev) => {
                      {
                        return { ...prev, score: Number(e.target.value) };
                      }
                    });
                  }}
                  type="number"
                  placeholder={0.25}
                />
              </div>

              <div className="formInput">
                <label>Total time (minutes)</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setTest((prev) => {
                      {
                        return { ...prev, totalTime: Number(e.target.value) };
                      }
                    });
                  }}
                  type="number"
                  placeholder={50}
                />
              </div>

              <button onClick={handleSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
