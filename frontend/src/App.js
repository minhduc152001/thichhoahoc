import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Signup/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Intro from "./pages/Intro/Intro";
import Balancer from "./pages/Balancer/Balancer";
import ListCourses from "./pages/ListCourses/ListCourses";
import LearnScreen from "./pages/LearnScreen/LearnScreen";
import TestRoom from "./pages/TestRoom/TestRoom";
import Exam from "./pages/Exam/Exam";
import Riddle from "./pages/Riddle/Riddle";
import RiddleAnswer from "./pages/RiddleAnswer/RiddleAnswer";
import Document from "./pages/Document/Document";
import DetailDoc from "./pages/DetailDoc/DetailDoc";
import Payment from "./pages/Payment/Payment";
import LearnGuide from "./pages/LearnGuide/LearnGuide";
// import { useContext } from "react";
// import { ParentProvider } from "./store/Provider";

function App() {
  // const useStore = useContext(ParentProvider);
  return (
    <div className="App">
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/dang-ky" element={<Signup />} />
        <Route path="/gioi-thieu" element={<Intro />} />
        <Route path="/can-bang-pthh" element={<Balancer />} />
        <Route path="/khoa-hoc" element={<ListCourses />} />
        <Route
          path="/hoc/:courseId/bai-hoc/:lessonId"
          element={<LearnScreen />}
        />
        <Route path="/phong-thi" element={<TestRoom />} />
        <Route path="/do-vui" element={<Riddle />} />
        <Route path="/do-vui/:riddleId" element={<RiddleAnswer />} />
        <Route path="/lam-bai-thi/:testId" element={<Exam />} />
        <Route path="/doc-tai-lieu/:documentId" element={<DetailDoc />} />
        <Route path="/tai-lieu" element={<Document />} />
        <Route path="/thanh-toan" element={<Payment />} />
        <Route path="/huong-dan" element={<LearnGuide />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
