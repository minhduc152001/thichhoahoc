import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";

const New = ({ title }) => {
  // eslint-disable-next-line no-restricted-globals
  const lessonId = location.pathname.split("/").slice(-1)[0];
  const backendHost = process.env.REACT_APP_BE_HOST;

  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [updatedLessonInfo, setUpdatedLessonInfo] = useState({ _id: lessonId });
  const [progressPercent, setProgressPercent] = useState(0);

  const fetchData = () => {
    axios.get(`${backendHost}/api/lesson/${lessonId}`).then((response) => {
      setData(response.data.lesson);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpload = (e) => {
    e.preventDefault();
    const dateNow = String(Date.now());

    const storageRef = ref(storage, `files/${file.name + dateNow}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUpdatedLessonInfo((prev) => {
            return { ...prev, videoUrl: downloadURL };
          });
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = backendHost + `/api/lesson/${data.id}`;
      await axios.put(url, updatedLessonInfo);
      alert("Successfully updated!");
      window.location.reload();
    } catch (error) {
      alert("Failed to update...");
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
          <div className="left">
            <video
              style={{
                width: "400px",
                height: "200px",
                objectFit: "fill",
                borderRadius: "4px",
              }}
              src={
                progressPercent === 100 && file
                  ? URL.createObjectURL(file)
                  : data.videoUrl
              }
              controls
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Teaching Video:{" "}
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                {file && (
                  <button
                    onClick={handleUpload}
                    disabled={progressPercent > 0 && progressPercent}
                  >
                    {progressPercent <= 0
                      ? "Upload this file"
                      : progressPercent < 100
                      ? `Loading ${progressPercent}%`
                      : "Done 100%"}
                  </button>
                )}
                <input
                  type="file"
                  id="file"
                  onChange={(e) => {
                    e.preventDefault();
                    setFile(e.target.files[0]);
                  }}
                  style={{ display: "none" }}
                />
              </div>

              {/* firstname input */}
              <div className="formInput">
                <label>Lesson name</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedLessonInfo((prev) => {
                      {
                        return { ...prev, name: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  defaultValue={data.name}
                />
              </div>

              {/* lastname input */}
              <div className="formInput">
                <label>Course ID</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedLessonInfo((prev) => {
                      {
                        return { ...prev, courseId: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  defaultValue={data.courseId}
                />
              </div>

              <div className="formInput">
                <label>Description</label>
                <input
                  id="subscription-select"
                  defaultValue={data.description}
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedLessonInfo((prev) => {
                      {
                        return { ...prev, description: e.target.value };
                      }
                    });
                  }}
                />
              </div>

              <div className="formInput">
                <label>Guide</label>
                <input
                  type="text"
                  defaultValue={data.text}
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedLessonInfo((prev) => {
                      {
                        return {
                          ...prev,
                          text: e.target.value,
                        };
                      }
                    });
                  }}
                ></input>
              </div>

              <div className="formInput">
                <label>Date created</label>
                <input
                  type="text"
                  defaultValue={data?.createdAt?.split("T")[0]}
                  disabled
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
