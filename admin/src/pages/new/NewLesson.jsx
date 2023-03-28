import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import axios from "axios";

const New = ({ title }) => {
  const [file, setFile] = useState();
  const [lesson, setLesson] = useState({});
  const [progressPercent, setProgressPercent] = useState(0);

  const backendHost = process.env.REACT_APP_BE_HOST;

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
          setLesson((prev) => {
            return { ...prev, videoUrl: downloadURL };
          });
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = backendHost + `/api/lesson`;
      await axios.post(url, lesson);
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
          <div className="left">
            <video
              style={{
                width: "400px",
                height: "200px",
                objectFit: "fill",
                borderRadius: "4px",
              }}
              src={
                progressPercent === 100 && file && URL.createObjectURL(file)
                // : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
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

              <div className="formInput">
                <label>Lesson name</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setLesson((prev) => {
                      {
                        return { ...prev, name: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  placeholder="Bài 1: Khóa H2 - Luyện thi THPT Quốc gia môn Hóa Học"
                />
              </div>

              <div className="formInput">
                <label>Course ID</label>
                <input
                  name="subscription"
                  id="subscription-select"
                  onChange={(e) => {
                    e.preventDefault();
                    setLesson((prev) => {
                      {
                        return { ...prev, courseId: e.target.value };
                      }
                    });
                  }}
                  placeholder="63f0d09b1b42be8b2176b10d"
                />
              </div>

              <div className="formInput">
                <label>Description</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setLesson((prev) => {
                      {
                        return { ...prev, description: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  placeholder="Mô tả bài học..."
                />
              </div>

              <div className="formInput">
                <label>Lesson Guide</label>
                <input
                  placeholder="Hướng dẫn học hiệu quả:..."
                  onChange={(e) => {
                    e.preventDefault();
                    setLesson((prev) => {
                      {
                        return { ...prev, text: e.target.value };
                      }
                    });
                  }}
                />
              </div>

              <div className="formInput">
                <label>Date created</label>
                <input
                  type="text"
                  defaultValue={new Date().toLocaleDateString()}
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
