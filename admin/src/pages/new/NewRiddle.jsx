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
  const [riddle, setRiddle] = useState();
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
          setRiddle((prev) => {
            return { ...prev, imageUrl: downloadURL };
          });
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = backendHost + `/api/riddle`;
      await axios.post(url, riddle);
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

              <div className="formInput">
                <label>Riddle answers</label>
                <span
                  style={{
                    color: "#333",
                    fontSize: "14px",
                    fontStyle: "italic",
                  }}
                >
                  can be multiple answers, separated by commas
                </span>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setRiddle((prev) => {
                      {
                        return {
                          ...prev,
                          correctAnswer: e.target.value
                            .split(",")
                            .map((el) => el.trim()),
                        };
                      }
                    });
                  }}
                  type="text"
                  placeholder="CO2, carbon dioxit, khí carbonic, thán khí"
                />
              </div>

              <div className="formInput">
                <label>Riddle name</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setRiddle((prev) => {
                      {
                        return { ...prev, name: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  placeholder="Phần lớn khí quyển trên sao Kim chứa khí gì?"
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
