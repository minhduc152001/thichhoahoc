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
  const userId = location.pathname.split("/").slice(-1)[0];
  const backendHost = process.env.REACT_APP_BE_HOST;

  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    file: "",
  });
  const [updatedUserInfo, setUpdatedUserInfo] = useState({ _id: userId });
  const [progressPercent, setProgressPercent] = useState(0);

  const fetchData = () => {
    axios.get(`${backendHost}/api/user/${userId}`).then((response) => {
      setData(response.data.user);
      setFormData({
        file: response.data.user.avatar,
        firstName: response.data.user.firstName,
        lastName: response.data.user.lastName,
      });
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
          setUpdatedUserInfo((prev) => {
            return { ...prev, avatar: downloadURL };
          });
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName } = formData;
    const isFormFilled = firstName && lastName;
    if (!isFormFilled) {
      alert("You have to fill out all fields!");
      return;
    } else
      try {
        const url = backendHost + `/api/user/${data.id}`;
        await axios.put(url, updatedUserInfo);
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
              src={
                progressPercent === 100 && file
                  ? URL.createObjectURL(file)
                  : data.avatar
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Avatar: <DriveFolderUploadOutlinedIcon className="icon" />
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
                <label>First name</label>
                <input
                  // id={input.key}
                  onChange={(e) => {
                    e.preventDefault();
                    setFormData((prev) => {
                      return { ...prev, firstName: e.target.value };
                    });
                    setUpdatedUserInfo((prev) => {
                      {
                        return { ...prev, firstName: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  defaultValue={data.firstName}
                />
              </div>

              {/* lastname input */}
              <div className="formInput">
                <label>Last name</label>
                <input
                  onChange={(e) => {
                    e.preventDefault();
                    setFormData((prev) => {
                      return { ...prev, lastName: e.target.value };
                    });
                    setUpdatedUserInfo((prev) => {
                      {
                        return { ...prev, lastName: e.target.value };
                      }
                    });
                  }}
                  type="text"
                  defaultValue={data.lastName}
                />
              </div>

              {/* subscription */}
              <div className="formInput">
                <label>Subscription</label>
                <select
                  name="subscription"
                  id="subscription-select"
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedUserInfo((prev) => {
                      {
                        return { ...prev, subscription: e.target.value };
                      }
                    });
                  }}
                >
                  <option
                    {...(data.subscription === "NORMAL" && {
                      selected: "selected",
                    })}
                    value="NORMAL"
                  >
                    NORMAL
                  </option>
                  <option
                    {...(data.subscription === "MONTHLY" && {
                      selected: "selected",
                    })}
                    value="MONTHLY"
                  >
                    MONTHLY
                  </option>
                  <option
                    {...(data.subscription === "ANNUALLY" && {
                      selected: "selected",
                    })}
                    value="ANNUALLY"
                  >
                    ANNUALLY
                  </option>
                  <option
                    {...(data.subscription === "UNLIMITED" && {
                      selected: "selected",
                    })}
                    value="UNLIMITED"
                  >
                    UNLIMITED
                  </option>
                </select>
              </div>

              {/* author */}
              <div className="formInput">
                <label>Expires at</label>
                <input
                  type="date"
                  defaultValue={data?.subscriptionExpiresAt?.split("T")[0]}
                  onChange={(e) => {
                    e.preventDefault();
                    setUpdatedUserInfo((prev) => {
                      {
                        return {
                          ...prev,
                          subscriptionExpiresAt: new Date(e.target.value),
                        };
                      }
                    });
                  }}
                ></input>
              </div>

              <div className="formInput">
                <label>Begins at</label>
                <input
                  type="text"
                  disabled
                  defaultValue={data?.createdAt?.split("T")[0]}
                ></input>
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
