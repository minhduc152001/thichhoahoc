import React from "react";
import "./Riddle.scss";
import MainTitle from "../MainTitle/MainTitle";

function Riddle() {
  const riddles = [
    {
      id: "13",
      question: "Nguyên tố nào trong bảng tuần hoàn có số proton lớn nhất?",
      answer: ["Iridium"],
      image_url: "/img-riddle.png",
    },
    {
      id: "13",
      question: 'Chất nào được gọi là "chất độc ác"?',
      answer: ["Hydrofluoric acid"],
      image_url: "/img-riddle.png",
    },
    {
      id: "13",
      question:
        "Nguyên tố nào được sử dụng để làm nhiên liệu cho các tàu vũ trụ?",
      answer: ["Hydrogen", "H", "Hidro"],
      image_url: "/img-riddle.png",
    },
    {
      id: "13",
      question:
        "Trong các nguyên tố sau, nguyên tố nào có số lượng điện tử bên ngoài ít nhất? Li, Na, K, Rb",
      answer: ["Lithium", "Li"],
      image_url: "/img-riddle.png",
    },
    {
      id: "13",
      question:
        "Điện phân nước (H2O) sẽ tạo ra khí Hydro nằm ở cực âm. Khí nào nằm ở cực dương?",
      answer: ["Oxygen", "O2"],
      image_url: "/img-riddle.png",
    },
    {
      id: "13",
      question: "Chất nào làm cho lá xanh của cây trở nên màu vàng?",
      answer: ["Ethylene", "C2H4"],
      image_url: "/img-riddle.png",
    },
    {
      id: "13",
      question: "Nguyên tố nào có tên gọi theo tên một hành tinh?",
      answer: ["Uranium", "U"],
      image_url: "/img-riddle.png",
    },
    {
      id: "13",
      question:
        "Nguyên tố nào trong bảng tuần hoàn có khối lượng riêng lớn nhất?",
      answer: ["Osmium", "Os"],
      image_url: "/img-riddle.png",
    },
    {
      id: "13",
      question: "Chất nào làm cho nước có mùi khai?",
      answer: ["Ammonia", "NH3"],
      image_url: "/img-riddle.png",
    },
    {
      id: "13",
      question: "Phản ứng oxi-hoá khử là gì?",
      answer: ["Redox reaction"],
      image_url: "/img-riddle.png",
    },
  ];

  return (
    <div>
      <MainTitle title={"đố vui cùng chemx"} />
      <div className="riddles-container">
        {riddles.map((r, i) => (
          <>
            <div className="riddles-list col">
              <img src={r.image_url} alt="Câu đố số 1" />
              <div className="riddle-content">
                <a href={`/do-vui/${r.id}`} className="riddle-title">
                  Câu hỏi đố vui {i + 1}
                </a>
                <div className="riddle-req">{r.question}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Riddle;
