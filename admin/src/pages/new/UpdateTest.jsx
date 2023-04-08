import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Select from "../../components/Select/Select";
import { allFieldsNotEmpty } from "../../utils/checkAllFieldsEmpty";

const New = ({ title }) => {
  // eslint-disable-next-line no-restricted-globals
  const testId = location.pathname.split("/").slice(-1)[0];
  const backendHost = process.env.REACT_APP_BE_HOST;

  const [data, setData] = useState([]);
  const [updatedTestInfo, setUpdatedTestInfo] = useState({ _id: testId });
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const { data } = await axios.get(`${backendHost}/api/test/${testId}`);
    setData(data.test);
    const { name, totalTime, gradeLevel, questions } = data.test;
    setUpdatedTestInfo({
      name,
      totalTime,
      gradeLevel,
      score: data.test.questions[0].score,
    });
    setQuestions(questions);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemoveQuestionItem = (id) => {
    setQuestions((prev) => prev.filter((el) => el.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, totalTime, gradeLevel, score } = updatedTestInfo;
    const isFormFilled =
      name &&
      totalTime > 0 &&
      gradeLevel &&
      score > 0 &&
      allFieldsNotEmpty(questions);
    if (!isFormFilled) {
      alert("All fields are required and must be valid!");
      return;
    } else {
      setIsLoading(true);
      try {
        const url = backendHost + `/api/test/${data.id}`;
        await axios.put(url, { ...updatedTestInfo, questions });
        alert("Successfully updated!");
        setIsLoading(false);
        window.location.reload();
      } catch (error) {
        setIsLoading(false);
        alert("Failed to update...");
        console.log(error);
      }
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
            {data.questions?.map((q, i) => (
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
                    onClick={() => handleRemoveQuestionItem(q.id)}
                  />
                </div>
                <textarea
                  onChange={(e) => {
                    e.preventDefault();
                    let updatedList = data.questions.map((item) => {
                      if (item.id == q.id) {
                        return { ...item, question: e.target.value };
                      }
                      return item;
                    });
                    setQuestions(updatedList);
                  }}
                  type="text"
                  defaultValue={q.question}
                />
                <div className="choices-box">
                  <div className="choice-container">
                    <div className="choice-detail">
                      A:{" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          let updatedList = data.questions.map((item) => {
                            if (item.id == q.id) {
                              return { ...item, optionA: e.target.value };
                            }
                            return item;
                          });
                          setQuestions(updatedList);
                        }}
                        defaultValue={q.optionA}
                      />
                    </div>
                    <div className="choice-detail">
                      B:{" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          let updatedList = data.questions.map((item) => {
                            if (item.id == q.id) {
                              return { ...item, optionB: e.target.value };
                            }
                            return item;
                          });
                          setQuestions(updatedList);
                        }}
                        defaultValue={q.optionB}
                      />
                    </div>
                    <div className="choice-detail">
                      C:{" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          let updatedList = data.questions.map((item) => {
                            if (item.id == q.id) {
                              return { ...item, optionC: e.target.value };
                            }
                            return item;
                          });
                          setQuestions(updatedList);
                        }}
                        defaultValue={q.optionC}
                      />
                    </div>
                    <div className="choice-detail">
                      D:{" "}
                      <input
                        type="text"
                        onChange={(e) => {
                          let updatedList = data.questions.map((item) => {
                            if (item.id == q.id) {
                              return { ...item, optionD: e.target.value };
                            }
                            return item;
                          });
                          setQuestions(updatedList);
                        }}
                        defaultValue={q.optionD}
                      />
                    </div>
                  </div>
                  <label htmlFor="">Correct choice: </label>
                  <select
                    defaultValue={q.correctAnswer}
                    onChange={(e) => {
                      let updatedList = data.questions.map((item) => {
                        if (item.id == q.id) {
                          return { ...item, correctAnswer: e.target.value };
                        }
                        return item;
                      });
                      setQuestions(updatedList);
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
                      let updatedList = data.questions.map((item) => {
                        if (item.id == q.id) {
                          return { ...item, explaination: e.target.value };
                        }
                        return item;
                      });
                      setQuestions(updatedList);
                    }}
                    type="text"
                    defaultValue={q.explaination}
                  />
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="right">
            <form>
              {/* firstname input */}
              <div className="formInput">
                <label>Test name</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedTestInfo((prev) => {
                      {
                        return { ...prev, name: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  defaultValue={data.name}
                />
              </div>

              <Select
                gradeLevel={data.gradeLevel}
                setUpdatedInfo={setUpdatedTestInfo}
              />

              <div className="formInput">
                <label>Total time</label>
                <input
                  type="text"
                  defaultValue={data.totalTime}
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedTestInfo((prev) => {
                      {
                        return {
                          ...prev,
                          totalTime: e.target.value,
                        };
                      }
                    });
                  }}
                ></input>
              </div>

              <div className="formInput">
                <label>Score per question</label>
                <input
                  type="number"
                  defaultValue={data?.questions?.[0]?.score}
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedTestInfo((prev) => {
                      {
                        return {
                          ...prev,
                          score: e.target.value,
                        };
                      }
                    });
                  }}
                ></input>
              </div>

              <div className="formInput">
                <label>Total of completion</label>
                <input type="number" disabled value={data?.takenCount}></input>
              </div>

              <div className="formInput">
                <label>Date create</label>
                <input
                  type="text"
                  value={new Date(data?.createdAt).toLocaleString()}
                  disabled
                ></input>
              </div>

              <button disabled={isLoading} onClick={handleSubmit}>
                {isLoading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
