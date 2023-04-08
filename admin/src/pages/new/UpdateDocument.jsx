import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import Select from "../../components/Select/Select";

const New = ({ title }) => {
  // eslint-disable-next-line no-restricted-globals
  const documentId = location.pathname.split("/").slice(-1)[0];
  const backendHost = process.env.REACT_APP_BE_HOST;

  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [updatedDocumentInfo, setUpdatedDocumentInfo] = useState({
    _id: documentId,
  });
  const [progressPercent, setProgressPercent] = useState(0);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${backendHost}/api/document/${documentId}`
    );
    setData(data.document);
    const { name, type, gradeLevel, url, _id } = data.document;
    setUpdatedDocumentInfo({ name, type, gradeLevel, url, _id });
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
          setUpdatedDocumentInfo((prev) => {
            return { ...prev, url: downloadURL };
          });
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, type, gradeLevel, url, _id } = updatedDocumentInfo;
    const isFormFilled = name && type && gradeLevel && url && _id;
    if (!isFormFilled) {
      alert("You have to fill out all fields!");
      return;
    } else
      try {
        const url = backendHost + `/api/document/${data.id}`;
        await axios.put(url, updatedDocumentInfo);
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
            <iframe
              src={
                progressPercent === 100 && file
                  ? URL.createObjectURL(file)
                  : data.url
              }
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

              {/* firstname input */}
              <div className="formInput">
                <label>Document name</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedDocumentInfo((prev) => {
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
                <label>Type</label>
                <select
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedDocumentInfo((prev) => {
                      {
                        return { ...prev, type: e.target.value };
                      }
                    });
                  }}
                  defaultValue={data.type}
                >
                  <option value="pdf">PDF</option>
                </select>
              </div>

              <Select
                gradeLevel={data.gradeLevel}
                setUpdatedInfo={setUpdatedDocumentInfo}
              />

              <button onClick={handleSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
