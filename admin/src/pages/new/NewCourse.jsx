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
  const [course, setCourse] = useState({ isFree: true, gradeLevel: "G10" });
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
          setCourse((prev) => {
            return { ...prev, img: downloadURL };
          });
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = backendHost + `/api/course`;
      await axios.post(url, course);
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
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
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

              {/* course name input */}
              <div className="formInput">
                <label>Course name</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setCourse((prev) => {
                      {
                        return { ...prev, name: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  placeholder="Khóa H2 - Luyện thi THPT Quốc gia môn Hóa Học"
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
                    setCourse((prev) => {
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

              {/* author */}
              <div className="formInput">
                <label>Author</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setCourse((prev) => {
                      {
                        return { ...prev, author: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  placeholder="ThS. Nguyễn Quỳnh Mai"
                />
              </div>

              {/* type */}
              <div className="formInput">
                <label>Course Type</label>
                <select
                  name="subscription"
                  id="subscription-select"
                  defaultValue={true}
                  onChange={(e) => {
                    e.preventDefault();
                    setCourse((prev) => {
                      {
                        return { ...prev, isFree: e.target.value === "true" };
                      }
                    });
                  }}
                >
                  <option value="true">free</option>
                  <option value="false">paid</option>
                </select>
              </div>

              {/* desc */}
              <div className="formInput">
                <label>Description</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setCourse((prev) => {
                      {
                        return { ...prev, description: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  placeholder="Khoá học nói về..."
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
