import React, { useEffect, useState } from "react";
import "./ListCourses.scss";
import { useSearchParams } from "react-router-dom";
import MainTitle from "../MainTitle/MainTitle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SweetPagination from "sweetpagination";
import numberWithCommas from "../../utils/numberWithCommas";
import axios from "axios";
import { user } from "../../constants/profileUser";
import { paidToast } from "../../utils/toastInfo";
import NeedLogin from "../NeedLogin/NeedLogin";

function ListCourses() {
  const { REACT_APP_BE_HOST } = process.env;
  const userId = localStorage.getItem("userId");

  const [searchParams, _] = useSearchParams();
  let level = searchParams.get("level");
  const levelMap = {
    "lop-10": ["lớp 10", "G10"],
    "lop-11": ["lớp 11", "G11"],
    "lop-12": ["lớp 12", "G12"],
    "on-thi-dai-hoc": ["ôn thi đại học", "collegePrep"],
  };

  const [showFilter, setShowFilter] = useState(true);
  const [data, setData] = useState([]);
  const [coursesAndCompletion, setCoursesAndCompletion] = useState([]);
  const [currentGradeLevel, setCurrentGradeLevel] = useState(
    levelMap[level][1]
  );

  const fetchData = async () => {
    const { data } = await axios.get(
      `${REACT_APP_BE_HOST}/api/courses-and-completion/${userId}`
    );
    setCoursesAndCompletion(
      data.coursesAndCompletion?.filter(
        (el) => el.course.gradeLevel === currentGradeLevel
      )
    );
    setData(data.coursesAndCompletion);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [currentPageData, setCurrentPageData] = useState(
    new Array(coursesAndCompletion.length).fill()
  );

  const pageTitle = levelMap[level][0];

  const formatTextAction = (percentage) => {
    return percentage <= 0
      ? "Tham gia"
      : percentage > 0 && percentage < 100
      ? "Tiếp tục"
      : "Đã học";
  };

  const getTheNextLessonIndex = ({ course, completedLessons }) => {
    if (completedLessons?.length / course.lessons?.length === 0) return 0;
    if (completedLessons?.length / course.lessons?.length < 1)
      return completedLessons?.length;
    return completedLessons?.length - 1;
  };

  const filterCoursesByGrade = (gradeLevel) => {
    setCurrentGradeLevel(gradeLevel);
    setCoursesAndCompletion(data);
    const tempVar = data?.filter((el) => el.course.gradeLevel === gradeLevel);
    setCoursesAndCompletion(tempVar);
  };

  const filterFreeOrPaidCourses = (isFree) => {
    setCoursesAndCompletion(
      data.filter((el) => el.course.gradeLevel === currentGradeLevel)
    );
    setCoursesAndCompletion((prev) =>
      prev.filter((el) => el.course.isFree === isFree)
    );
  };

  const removeFreeOrPaidFilter = () => {
    setCoursesAndCompletion(
      data.filter((el) => el.course.gradeLevel === currentGradeLevel)
    );
  };

  const sortMostLearners = () => {
    setCoursesAndCompletion(
      data.filter((el) => el.course.gradeLevel === currentGradeLevel)
    );
    setCoursesAndCompletion((prev) =>
      prev.sort((a, b) => b.course.students.length - a.course.students.length)
    );
  };

  const sortNewestCourses = () => {
    setCoursesAndCompletion(
      data.filter((el) => el.course.gradeLevel === currentGradeLevel)
    );
    setCoursesAndCompletion(
      data.filter((el) => el.course.gradeLevel === currentGradeLevel)
    );
  };

  const sortJoinedCourses = () => {
    setCoursesAndCompletion(
      data.filter((el) => el.course.gradeLevel === currentGradeLevel)
    );
    setCoursesAndCompletion((prev) =>
      prev.filter((el) => el.course.students.includes(userId))
    );
  };

  const sortUnjoinedCourses = () => {
    setCoursesAndCompletion(
      data.filter((el) => el.course.gradeLevel === currentGradeLevel)
    );
    setCoursesAndCompletion((prev) =>
      prev.filter((el) => !el.course.students.includes(userId))
    );
  };

  const handleClickCourse = async ({ course, completedLessons }) => {
    if (course.isFree || user.subscription !== "NORMAL") {
      await axios.post(
        `${REACT_APP_BE_HOST}/api/participation/${course._id}/${userId}`
      );
      window.location.href = `/hoc/${course._id}/bai-hoc/${
        course.lessons[getTheNextLessonIndex({ completedLessons, course })]._id
      }`;
    } else {
      paidToast();
    }
  };

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
            <select
              defaultValue="newest"
              onChange={(e) => {
                const sort = e.target.value;
                if (sort === "most-learners") sortMostLearners();
                if (sort === "joined") sortJoinedCourses();
                if (sort === "not-join") sortUnjoinedCourses();
                if (sort === "newest") sortNewestCourses();
              }}
              class="form-select"
              aria-label=".form-select-lg example"
            >
              <option value="newest">Mới nhất</option>
              <option value="most-learners">Nhiều người học nhất</option>
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
                  checked={currentGradeLevel === "G10"}
                  onChange={() => filterCoursesByGrade("G10")}
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
                  checked={currentGradeLevel === "G11"}
                  onChange={() => filterCoursesByGrade("G11")}
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
                  checked={currentGradeLevel === "G12"}
                  onChange={() => filterCoursesByGrade("G12")}
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
                  checked={currentGradeLevel === "collegePrep"}
                  onChange={() => filterCoursesByGrade("collegePrep")}
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
                  onClick={() => filterFreeOrPaidCourses(false)}
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
                  onClick={() => filterFreeOrPaidCourses(true)}
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
                  defaultChecked
                  onClick={removeFreeOrPaidFilter}
                />
                <label class="form-check-label" for="all">
                  Tất cả
                </label>
              </div>
            </div>
          </div>
        )}
        {userId ? (
          <div className="list-courses">
            {currentPageData?.map(({ course, completedLessons }) => (
              <div className="course">
                <div className="img-course">
                  <img src={course.img} alt="" height={140} width={260} />
                </div>

                <div className="detail-course">
                  <div className="title-course">
                    {course.isFree && <span>Free</span>}
                    {course.name}
                  </div>
                  <div className="desc-course">{course.description}</div>
                  <div className="stat">
                    {course.lessons?.length} bài học -{" "}
                    {numberWithCommas(course.students?.length)} người tham gia
                  </div>
                  <div className="author">{course.author}</div>
                </div>

                <div className="course-action">
                  <button
                    type="button"
                    onClick={() =>
                      handleClickCourse({ course, completedLessons })
                    }
                    class={`btn btn-${
                      completedLessons?.length / course.lessons?.length <= 0
                        ? "primary"
                        : completedLessons?.length / course.lessons?.length < 1
                        ? "outline-primary"
                        : "success"
                    }`}
                  >
                    {formatTextAction(
                      Math.floor(
                        (completedLessons?.length / course.lessons?.length) *
                          100
                      )
                    )}
                  </button>
                  {completedLessons?.length / course.lessons?.length > 0 && (
                    <div className="progress-circle">
                      <CircularProgressbar
                        value={Math.floor(
                          (completedLessons?.length / course.lessons?.length) *
                            100
                        )}
                        text={`${Math.floor(
                          (completedLessons?.length / course.lessons?.length) *
                            100
                        )}%`}
                        styles={buildStyles(
                          completedLessons?.length / course.lessons?.length < 1
                            ? {
                                textColor: "#0d6efd",
                                pathColor: "#0d6efd",
                              }
                            : {
                                textColor: "rgb(40, 167, 69)",
                                pathColor: "rgb(40, 167, 69)",
                              }
                        )}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NeedLogin />
        )}
      </div>

      <div className="pagination">
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={6}
          getData={coursesAndCompletion}
          navigation={true}
          getStyle={"style-custom"}
        />
      </div>
    </div>
  );
}

export default ListCourses;
