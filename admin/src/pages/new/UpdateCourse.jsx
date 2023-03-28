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
  const courseId = location.pathname.split("/").slice(-1)[0];
  const backendHost = process.env.REACT_APP_BE_HOST;

  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [updatedCourseInfo, setUpdatedCourseInfo] = useState({ _id: courseId });
  const [progressPercent, setProgressPercent] = useState(0);

  const fetchData = () => {
    axios.get(`${backendHost}/api/course/${courseId}`).then((response) => {
      setData(response.data.course);
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
          setUpdatedCourseInfo((prev) => {
            return { ...prev, img: downloadURL };
          });
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = backendHost + `/api/course/${data.id}`;
      await axios.put(url, updatedCourseInfo);
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
            <img
              style={{
                width: "400px",
                height: "200px",
                objectFit: "fill",
                borderRadius: "4px",
              }}
              src={
                progressPercent === 100 && file
                  ? URL.createObjectURL(file)
                  : data.img
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                {file && (
                  <button
                    disabled={progressPercent > 0 && progressPercent}
                    onClick={handleUpload}
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
                <label>Course name</label>
                <input
                  // id={input.key}
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedCourseInfo((prev) => {
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
                <label>Description</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedCourseInfo((prev) => {
                      {
                        return { ...prev, description: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  defaultValue={data.description}
                />
              </div>

              {/* subscription */}
              <div className="formInput">
                <label>Grade level</label>
                <select
                  name="subscription"
                  id="subscription-select"
                  defaultValue={data.gradeLevel}
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedCourseInfo((prev) => {
                      {
                        return { ...prev, gradeLevel: e.target.value };
                      }
                    });
                  }}
                >
                  <option value="G10">Grade 10</option>
                  <option value="G11">Grade 11</option>
                  <option value="G12">Grade 12</option>
                  <option value="collegePrep">College prep</option>
                </select>
              </div>

              {/* author */}
              <div className="formInput">
                <label>Author</label>
                <input
                  type="text"
                  defaultValue={data.author}
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedCourseInfo((prev) => {
                      {
                        return {
                          ...prev,
                          author: e.target.value,
                        };
                      }
                    });
                  }}
                ></input>
              </div>

              <div className="formInput">
                <label>Number of students</label>
                <input type="number" value={data.buyersCount} disabled></input>
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
