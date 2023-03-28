import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import LessonTable from "../../components/datatable/LessonTable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <LessonTable />
      </div>
    </div>
  );
};

export default List;
