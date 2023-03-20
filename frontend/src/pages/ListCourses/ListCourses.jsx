import React from "react";
import "./ListCourses.scss";
import ListCoursesComponent from "../../components/ListCourses/ListCourses";
import Banner from "../../components/Banner/Banner";
import MainContent from "../../components/MainContent/MainContent";

function ListCourses() {
  return (
    <div>
      <Banner />
      <MainContent
        pageName={"danh sách khoá học"}
        Component={ListCoursesComponent}
      />
    </div>
  );
}

export default ListCourses;
