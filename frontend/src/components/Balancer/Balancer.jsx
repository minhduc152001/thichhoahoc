import React, { useEffect } from "react";
import "./balancer.scss";
import MainTitle from "../MainTitle/MainTitle";

function Balancer() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://firebasestorage.googleapis.com/v0/b/thesis-7edb1.appspot.com/o/script%2Findex.js?alt=media&token=1ea35946-3d19-46d1-b76d-bfbdf8e1548b";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <MainTitle title={"cân bằng phương trình hoá học"} />
      <h5 aria-label="inputFormula">Phương trình</h5>
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          autoComplete="off"
          placeholder="H2 + O2 = H2O"
          id="inputFormula"
        />

        <div>
          <button type="button" id="balance-button" className="btn btn-primary">
            Cân bằng
          </button>

          <button
            type="button"
            className="btn btn-info"
            id="random-button"
            // onClick={doRandom}
          >
            Ngẫu nhiên
          </button>
        </div>

        <p>
          <span style={{ color: "green", fontWeight: "bold" }}>Kết quả: </span>
          <span id="balanced" className="output"></span>
        </p>

        <p>
          {/* <span style={{ color: "red" }}>Lỗi </span> */}
          <span id="message" style={{ color: "red" }} className="output"></span>
        </p>
        <p>
          {/* <span style={{ color: "red" }}>Kiểm tra lại: </span> */}
          <span id="codeOutput" className="output"></span>
        </p>
      </div>
      <div className="guide-toggle">
        <p className="btn-guide-box">
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Hướng dẫn sử dụng
          </button>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="card card-body">
                <div className="guide-line">
                  <h4>Cú pháp</h4>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Đầu vào</th>
                        <th scope="col">Phương trình tương ứng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Đơn chất</th>
                        <td>N = N2</td>
                        <td>
                          N <span className="rightarrow">→</span> N<sub>2</sub>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hợp chất</th>
                        <td>H2 + O2 = H2O</td>
                        <td>
                          H<sub>2</sub> + O<sub>2</sub>{" "}
                          <span className="rightarrow">→</span> H<sub>2</sub>O
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Nhóm chất</th>
                        <td>Mg(OH)2 = MgO + H2O</td>
                        <td>
                          Mg(OH)<sub>2</sub>{" "}
                          <span className="rightarrow">→</span> MgO + H
                          <sub>2</sub>O
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Các ion</th>
                        <td>H^+ + CO3^2- = H2O + CO2</td>
                        <td>
                          H<sup>+</sup> + CO<sub>3</sub>
                          <sup>2-</sup>
                          <span class="rightarrow"> → </span>H<sub>2</sub>O + CO
                          <sub>2</sub>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Hạt electron</th>
                        <td>Fe^3+ + e = Fe</td>
                        <td>
                          Fe<sup>3+</sup> + e<sup>−</sup>
                          <span class="rightarrow"> → </span>Fe
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Khác</th>
                        <td>Neu^5+ + Cs^3- = NeuCs2 + NeuCs^-</td>
                        <td>
                          Neu<sup>5+</sup> + Cs<sup>3−</sup>
                          <span class="rightarrow"> → </span>NeuCs<sub>2</sub> +
                          NeuCs<sup>−</sup>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <div className="guide-line">
                  <h4>Lỗi</h4>
                  <div>
                    <h6>Lỗi cú pháp</h6>
                    <p>
                      Đầu vào không mô tả đúng một phương trình hóa học. Kiểm
                      tra cẩn thận từng ký tự và làm theo các ví dụ dưới trên
                      bảng hướng dẫn để viết đúng cú pháp.
                    </p>
                  </div>

                  <div>
                    <h6>Không có kết quả</h6>
                    <p>
                      Kết quả cân bằng duy nhất cho một phương trình hoá học có
                      tất cả các hệ số được đặt thành 0, đây là một kết quả cho
                      mọi phương trình hóa học. Ví dụ: C → N<sub>2</sub> không
                      có kết quả vì kết quả duy nhất là 0C → 0N<sub>2</sub>.
                    </p>
                  </div>

                  <div>
                    <h6>Có nhiều kết quả khác nhau</h6>
                    <p>
                      Tồn tại nhiều nghiệm cho các hệ số của phương trình hoá
                      học. Chẳng hạn H + O → H<sub>2</sub> + O<sub>2</sub> không
                      có nghiệm duy nhất vì hai kết quả 2H + 4O → H<sub>2</sub>{" "}
                      + 2O<sub>2</sub> và 6H + 2O → 3H<sub>2</sub> + O
                      <sub>2</sub> có các hệ số không phải là bội số của nhau.
                    </p>
                  </div>

                  <div>
                    <h6>Số quá lớn - không thể tính toán</h6>
                    <p>
                      Kết quả cân bằng phương trình hoá học có các hệ số quá
                      lớn.
                    </p>
                  </div>

                  <div>
                    <h6>Lỗi không xác định</h6>
                    <p>
                      Một số lỗi xảy ra do sự cố hệ thống. Hãy{" "}
                      <a href="/lien-he">liên hệ</a> admin để nhận sự trợ giúp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balancer;
