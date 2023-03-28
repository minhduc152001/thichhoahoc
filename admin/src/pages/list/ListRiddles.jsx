import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import RiddleTable from "../../components/datatable/RiddleTable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <RiddleTable />
      </div>
    </div>
  );
};

export default List;
