import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DocumentTable from "../../components/datatable/DocumentTable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DocumentTable />
      </div>
    </div>
  );
};

export default List;
