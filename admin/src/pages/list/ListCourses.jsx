import "./ListCourses.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CourseTable from "../../components/datatable/CourseTable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <CourseTable />
      </div>
    </div>
  );
};

export default List;
