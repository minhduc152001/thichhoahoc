import React, { useState } from "react";
import "./ListCourses.scss";
import { useSearchParams } from "react-router-dom";
import MainTitle from "../MainTitle/MainTitle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SweetPagination from "sweetpagination";
import numberWithCommas from "../../utils/numberWithCommas";

function ListCourses() {
  const [searchParams, _] = useSearchParams();
  let level = searchParams.get("level");
  const [showFilter, setShowFilter] = useState(true);
  const [currentPageData, setCurrentPageData] = useState([1]);
  const courses = [
    {
      _id: "course1",
      name: "Cách Lấy Gốc Hóa Đạt 9 điểm Trong 2 THÁNG | HOẠT HÌNH",
      gradeLevel: "G10",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/6926005ea411e490ff8d4c5d4ff426/chemistry_logo.png?auto=format%2Ccompress&dpr=1",
      description:
        "Khi tôi lên lớp 8, tôi biết là môn hóa rất khó. Tôi cảm thấy mình học bao nhiêu cũng không vào nào là các hóa trị, cách tính số mol, phản ứng... nó làm tôi như muốn nổi khùng lên. Cũng chính vì lí do đó, về nhà tôi không làm bài tập và cũng không soạn bài trước khi đến lớp, tôi cũng chẳng chịu tìm hiểu về môn hóa. Giữa học kì 2 lớp 8, tôi trở thành học sinh mất gốc thật sự. Bạn biết không? Để được trên 6,5 môn hóa tôi phải đi học thêm, không phải để biết thêm kiến thức đâu. Nói nhỏ ở đây thôi nhé, học thêm để thầy cho biết đề trước và nâng điểm.",
      author: "Thầy Vũ Minh Đức",
      isFree: false,
      completedLessons: ["lesson11", "lesson12", "lesson13"],
      totalLessons: 4,
      totalBuyers: 100,
      createdAt: "2022-01-23",
      lessons: [
        {
          _id: "lesson11",
        },

        {
          _id: "lesson12",
        },
        {
          _id: "lesson13",
        },
        {
          _id: "lesson14",
        },
      ],
    },

    {
      _id: "course2",
      name: "Cách Lấy Gốc Hóa Đạt 9 điểm Trong 2 THÁNG | HOẠT HÌNH",
      gradeLevel: "G10",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/6926005ea411e490ff8d4c5d4ff426/chemistry_logo.png?auto=format%2Ccompress&dpr=1",
      description:
        "Khi tôi lên lớp 8, tôi biết là môn hóa rất khó. Tôi cảm thấy mình học bao nhiêu cũng không vào nào là các hóa trị, cách tính số mol, phản ứng... nó làm tôi như muốn nổi khùng lên. Cũng chính vì lí do đó, về nhà tôi không làm bài tập và cũng không soạn bài trước khi đến lớp, tôi cũng chẳng chịu tìm hiểu về môn hóa. Giữa học kì 2 lớp 8, tôi trở thành học sinh mất gốc thật sự. Bạn biết không? Để được trên 6,5 môn hóa tôi phải đi học thêm, không phải để biết thêm kiến thức đâu. Nói nhỏ ở đây thôi nhé, học thêm để thầy cho biết đề trước và nâng điểm.",
      author: "Thầy Phạm Xuân Lâm",
      isFree: true,
      completedLessons: ["lesson21"],
      totalLessons: 4,
      totalBuyers: 2349834,
      createdAt: "2022-01-23",
      lessons: [
        {
          _id: "lesson21",
        },

        {
          _id: "lesson22",
        },
        {
          _id: "lesson23",
        },
        {
          _id: "lesson24",
        },
      ],
    },

    {
      _id: "course3",
      name: "Cách Lấy Gốc Hóa Đạt 9 điểm Trong 2 THÁNG | HOẠT HÌNH",
      gradeLevel: "G10",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/6926005ea411e490ff8d4c5d4ff426/chemistry_logo.png?auto=format%2Ccompress&dpr=1",
      description:
        "Khi tôi lên lớp 8, tôi biết là môn hóa rất khó. Tôi cảm thấy mình học bao nhiêu cũng không vào nào là các hóa trị, cách tính số mol, phản ứng... nó làm tôi như muốn nổi khùng lên. Cũng chính vì lí do đó, về nhà tôi không làm bài tập và cũng không soạn bài trước khi đến lớp, tôi cũng chẳng chịu tìm hiểu về môn hóa. Giữa học kì 2 lớp 8, tôi trở thành học sinh mất gốc thật sự. Bạn biết không? Để được trên 6,5 môn hóa tôi phải đi học thêm, không phải để biết thêm kiến thức đâu. Nói nhỏ ở đây thôi nhé, học thêm để thầy cho biết đề trước và nâng điểm.",
      author: "Cô Tống Thị Minh Ngọc",
      isFree: false,
      completedLessons: ["lesson31", "lesson32"],
      totalLessons: 4,
      totalBuyers: 43998,
      createdAt: "2022-01-23",
      lessons: [
        {
          _id: "lesson31",
        },

        {
          _id: "lesson32",
        },
        {
          _id: "lesson33",
        },
        {
          _id: "lesson34",
        },
      ],
    },

    {
      _id: "course4",
      name: "Cách Lấy Gốc Hóa Đạt 9 điểm Trong 2 THÁNG | HOẠT HÌNH",
      gradeLevel: "G10",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/6926005ea411e490ff8d4c5d4ff426/chemistry_logo.png?auto=format%2Ccompress&dpr=1",
      description:
        "Khi tôi lên lớp 8, tôi biết là môn hóa rất khó. Tôi cảm thấy mình học bao nhiêu cũng không vào nào là các hóa trị, cách tính số mol, phản ứng... nó làm tôi như muốn nổi khùng lên. Cũng chính vì lí do đó, về nhà tôi không làm bài tập và cũng không soạn bài trước khi đến lớp, tôi cũng chẳng chịu tìm hiểu về môn hóa. Giữa học kì 2 lớp 8, tôi trở thành học sinh mất gốc thật sự. Bạn biết không? Để được trên 6,5 môn hóa tôi phải đi học thêm, không phải để biết thêm kiến thức đâu. Nói nhỏ ở đây thôi nhé, học thêm để thầy cho biết đề trước và nâng điểm.",
      author: "Cô Nguyễn Thị A",
      isFree: true,
      completedLessons: ["lesson41", "lesson42", "lesson43", "lesson44"],
      totalLessons: 4,
      totalBuyers: 100,
      createdAt: "2022-01-23",
      lessons: [
        {
          _id: "lesson41",
        },

        {
          _id: "lesson42",
        },
        {
          _id: "lesson43",
        },
        {
          _id: "lesson44",
        },
      ],
    },

    {
      _id: "course5",
      name: "Cách Lấy Gốc Hóa Đạt 9 điểm Trong 2 THÁNG | HOẠT HÌNH",
      gradeLevel: "G10",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/6926005ea411e490ff8d4c5d4ff426/chemistry_logo.png?auto=format%2Ccompress&dpr=1",
      description:
        "Khi tôi lên lớp 8, tôi biết là môn hóa rất khó. Tôi cảm thấy mình học bao nhiêu cũng không vào nào là các hóa trị, cách tính số mol, phản ứng... nó làm tôi như muốn nổi khùng lên. Cũng chính vì lí do đó, về nhà tôi không làm bài tập và cũng không soạn bài trước khi đến lớp, tôi cũng chẳng chịu tìm hiểu về môn hóa. Giữa học kì 2 lớp 8, tôi trở thành học sinh mất gốc thật sự. Bạn biết không? Để được trên 6,5 môn hóa tôi phải đi học thêm, không phải để biết thêm kiến thức đâu. Nói nhỏ ở đây thôi nhé, học thêm để thầy cho biết đề trước và nâng điểm.",
      author: "Thầy Vũ Minh Đức",
      isFree: true,
      completedLessons: [],
      totalLessons: 4,
      totalBuyers: 1043,
      createdAt: "2022-01-23",
      lessons: [
        {
          _id: "lesson51",
        },

        {
          _id: "lesson52",
        },
        {
          _id: "lesson53",
        },
        {
          _id: "lesson54",
        },
      ],
    },

    {
      _id: "course6",
      name: "Cách Lấy Gốc Hóa Đạt 9 điểm Trong 2 THÁNG | HOẠT HÌNH",
      gradeLevel: "G10",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/6926005ea411e490ff8d4c5d4ff426/chemistry_logo.png?auto=format%2Ccompress&dpr=1",
      description:
        "Khi tôi lên lớp 8, tôi biết là môn hóa rất khó. Tôi cảm thấy mình học bao nhiêu cũng không vào nào là các hóa trị, cách tính số mol, phản ứng... nó làm tôi như muốn nổi khùng lên. Cũng chính vì lí do đó, về nhà tôi không làm bài tập và cũng không soạn bài trước khi đến lớp, tôi cũng chẳng chịu tìm hiểu về môn hóa. Giữa học kì 2 lớp 8, tôi trở thành học sinh mất gốc thật sự. Bạn biết không? Để được trên 6,5 môn hóa tôi phải đi học thêm, không phải để biết thêm kiến thức đâu. Nói nhỏ ở đây thôi nhé, học thêm để thầy cho biết đề trước và nâng điểm.",
      author: "Thầy Vũ Minh Đức",
      isFree: false,
      completedLessons: [],
      totalLessons: 3,
      totalBuyers: 49300,
      createdAt: "2022-01-23",
      lessons: [
        {
          _id: "lesson61",
        },

        {
          _id: "lesson62",
        },
        {
          _id: "lesson63",
        },
      ],
    },
  ];
  const levelMap = {
    "lop-10": "lớp 10",
    "lop-11": "lớp 11",
    "lop-12": "lớp 12",
    "on-thi-dai-hoc": "ôn thi đại học",
  };

  const pageTitle = levelMap[level];

  const formatTextAction = (percentage) => {
    return percentage <= 0
      ? "Tham gia"
      : percentage > 0 && percentage < 100
      ? "Tiếp tục"
      : "Đã học";
  };

  const getTheNextLessonIndex = (course) => {
    if (course.completedLessons.length / course.totalLessons === 0) return 0;
    if (course.completedLessons.length / course.totalLessons < 1)
      return course.completedLessons.length;
    return course.completedLessons.length - 1;
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
          {courses.map((course) => (
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
                  {course.totalLessons} bài học -{" "}
                  {numberWithCommas(course.totalBuyers)} người tham gia
                </div>
                <div className="author">{course.author}</div>
              </div>

              <div className="course-action">
                <button
                  type="button"
                  onClick={() =>
                    (window.location.href = `/hoc/${course._id}/bai-hoc/${
                      course.lessons[getTheNextLessonIndex(course)]._id
                    }`)
                  }
                  class={`btn btn-${
                    course.completedLessons.length / course.totalLessons <= 0
                      ? "primary"
                      : course.completedLessons.length / course.totalLessons < 1
                      ? "outline-primary"
                      : "success"
                  }`}
                >
                  {formatTextAction(
                    Math.floor(
                      (course.completedLessons.length / course.totalLessons) *
                        100
                    )
                  )}
                </button>
                {course.completedLessons.length / course.totalLessons > 0 && (
                  <div className="progress-circle">
                    <CircularProgressbar
                      value={Math.floor(
                        (course.completedLessons.length / course.totalLessons) *
                          100
                      )}
                      text={`${Math.floor(
                        (course.completedLessons.length / course.totalLessons) *
                          100
                      )}%`}
                      styles={buildStyles(
                        course.completedLessons.length / course.totalLessons < 1
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
      </div>

      <div className="pagination">
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={2}
          getData={courses}
          navigation={true}
          getStyle={"style-custom"}
        />
      </div>
    </div>
  );
}

export default ListCourses;
