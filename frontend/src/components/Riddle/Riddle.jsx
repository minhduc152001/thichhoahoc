import React, { useEffect, useState } from "react";
import "./Riddle.scss";
import MainTitle from "../MainTitle/MainTitle";
import { user } from "../../constants/profileUser";
import NeedLogin from "../NeedLogin/NeedLogin";
import axios from "axios";

function Riddle() {
  const [riddles, setRiddles] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BE_HOST}/api/riddles`
    );
    setRiddles(data.riddles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <MainTitle title={"đố vui cùng chemx"} />
      <div className="riddles-container">
        {!!user?.userId ? (
          riddles?.map((riddle, i) => (
            <>
              <div className="riddles-list col">
                <img src={riddle.imageUrl} alt="Câu đố số 1" />
                <div className="riddle-content">
                  <a href={`/do-vui/${riddle._id}`} className="riddle-title">
                    Câu hỏi đố vui số {i + 1}
                  </a>
                  <div className="riddle-req">{riddle.name}</div>
                </div>
              </div>
            </>
          ))
        ) : (
          <NeedLogin />
        )}
      </div>
    </div>
  );
}

export default Riddle;
