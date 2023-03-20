import React, { useState } from "react";
import "./ListCourses.scss";
import { useSearchParams } from "react-router-dom";
import MainTitle from "../MainTitle/MainTitle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SweetPagination from "sweetpagination";

function ListCourses() {
  const [searchParams, _] = useSearchParams();
  let level = searchParams.get("level");
  const [showFilter, setShowFilter] = useState(true);
  const [currentPageData, setCurrentPageData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const levelMap = {
    "lop-10": "lớp 10",
    "lop-11": "lớp 11",
    "lop-12": "lớp 12",
    "on-thi-dai-hoc": "ôn thi đại học",
  };

  const pageTitle = levelMap[level];

  return (
    <div>
      <MainTitle title={`Khoá học ${pageTitle}`} />
      <div className="heading">10,000 khoá học cho học sinh lớp 11</div>
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => setShowFilter(!showFilter)}
        >
          <i class="fa fa-filter" aria-hidden="true"></i>Bộ lọc
        </button>
        <div className="sort-select">
          <div>
            <select class="form-select" aria-label=".form-select-lg example">
              <option selected value="most-learners">
                Nhiều người học nhất
              </option>
              <option value="newest">Mới nhất</option>
              <option value="joined">Đã tham gia</option>
              <option value="not-join">Chưa tham gia</option>
            </select>
          </div>
        </div>
        <div className="course-count">10,000 khoá học</div>
      </div>
      <div className="body">
        {showFilter && (
          <div className="filter-list">
            <div className="filter-element">
              <div className="title">Cấp độ</div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="level"
                  id="level-10"
                />
                <label class="form-check-label" for="level-10">
                  Lớp 10
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="level"
                  id="level-11"
                />
                <label class="form-check-label" for="level-11">
                  Lớp 11
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="level"
                  id="level-12"
                />
                <label class="form-check-label" for="level-12">
                  Lớp 12
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="level"
                  id="on-thi-dai-hoc"
                />
                <label class="form-check-label" for="on-thi-dai-hoc">
                  Ôn thi đại học
                </label>
              </div>
            </div>

            <div className="filter-element">
              <div className="title">Loại khoá học</div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="type"
                  id="paid"
                />
                <label class="form-check-label" for="paid">
                  Mất phí
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="type"
                  id="free"
                />
                <label class="form-check-label" for="free">
                  Miễn phí
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="type"
                  id="all"
                />
                <label class="form-check-label" for="all">
                  Tất cả
                </label>
              </div>
            </div>
          </div>
        )}
        <div className="list-courses">
          <div className="course">
            <div className="img-course">
              <img src="/logo.png" alt="" height={140} width={260} />
            </div>

            <div className="detail-course">
              <div className="title-course">
                Khoa hoc Bootcamp 2023 on tap cho hoc sinh lop 10
              </div>
              <div className="desc-course">
                Developer with just ONE course. HTML, CSS, Javascript, Node,
                React, MongoDB, Web3 and DApps
              </div>
              <div className="stat">69 bai hoc - 23,034 nguoi tham gia</div>
              <div className="author">Thay Vu Minh Duc</div>
            </div>

            <div className="course-action">
              <button type="button" class="btn btn-primary">
                Tiếp tục
              </button>
              <div className="progress-circle">
                <CircularProgressbar
                  value={66}
                  text={`${66}%`}
                  styles={buildStyles({
                    textColor: "#0d6efd",
                    pathColor: "#0d6efd",
                  })}
                />
              </div>
            </div>
          </div>

          <div className="course">
            <div className="img-course">
              <img src="/logo.png" alt="" height={140} width={260} />
            </div>

            <div className="detail-course">
              <div className="title-course">
                <span>Free</span>Khoa hoc Bootcamp 2023 on tap cho hoc sinh lop
                10
              </div>
              <div className="desc-course">
                Developer with just ONE course. HTML, CSS, Javascript, Node,
                React, MongoDB, Web3 and DApps
              </div>
              <div className="stat">69 bai hoc - 23,034 nguoi tham gia</div>
              <div className="author">Thay Vu Minh Duc</div>
            </div>

            <div className="course-action">
              <button type="button" class="btn btn-outline-primary">
                Tham gia
              </button>
              {/* <div className="progress-circle">
                <CircularProgressbar value={66} text={`${66}%`} />
              </div> */}
            </div>
          </div>

          <div className="course">
            <div className="img-course">
              <img src="/logo.png" alt="" height={140} width={260} />
            </div>

            <div className="detail-course">
              <div className="title-course">
                Khoa hoc Bootcamp 2023 on tap cho hoc sinh lop 10
              </div>
              <div className="desc-course">
                Developer with just ONE course. HTML, CSS, Javascript, Node,
                React, MongoDB, Web3 and DApps
              </div>
              <div className="stat">69 bai hoc - 23,034 nguoi tham gia</div>
              <div className="author">Thay Vu Minh Duc</div>
            </div>

            <div className="course-action">
              {/* check done */}
              <button
                type="button"
                class="btn btn-success"
                style={{ backgroundColor: "#28a745" }}
              >
                Đã học
              </button>
              <div className="progress-circle">
                <CircularProgressbar
                  value={100}
                  text={`${100}%`}
                  styles={buildStyles({
                    textColor: "rgb(40, 167, 69)",
                    pathColor: "rgb(40, 167, 69)",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pagination">
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={10}
          getData={items}
          navigation={true}
          getStyle={"style-custom"}
        />
      </div>
    </div>
  );
}

export default ListCourses;
