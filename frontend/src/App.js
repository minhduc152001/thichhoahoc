import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import { useContext } from "react";
// import { ParentProvider } from "./store/Provider";

function App() {
  // const useStore = useContext(ParentProvider);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
