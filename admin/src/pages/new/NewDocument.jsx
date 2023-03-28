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
  const [document, setDocument] = useState({ type: "pdf", gradeLevel: "G10" });
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
          setDocument((prev) => {
            return { ...prev, url: downloadURL };
          });
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = backendHost + `/api/document`;
      await axios.post(url, document);
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
            {/* <img
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
            /> */}
            <iframe
              src={progressPercent === 100 && file && URL.createObjectURL(file)}
              height="600"
              width="400"
              style={{ border: "1px solid #333" }}
            ></iframe>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Document: <DriveFolderUploadOutlinedIcon className="icon" />
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

              {/* document name input */}
              <div className="formInput">
                <label>Document name</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setDocument((prev) => {
                      {
                        return { ...prev, name: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  placeholder="Tài liệu dành cho học sinh Lớp 10 Chuyên đề: Oxi hoá - khử"
                />
              </div>

              {/* grade level */}
              <div className="formInput">
                <label>Grade level</label>
                <select
                  defaultValue="G10"
                  onChange={(e) => {
                    e.preventDefault();
                    setDocument((prev) => {
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
                <label>Type</label>
                <select
                  onChange={(e) => {
                    e.preventDefault();
                    setDocument((prev) => {
                      {
                        return { ...prev, type: e.target.value };
                      }
                    });
                  }}
                  defaultValue="pdf"
                >
                  <option value="pdf">PDF</option>
                  <option value="docx">Docx</option>
                </select>
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
