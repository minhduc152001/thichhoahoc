import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import List from "./pages/list/List";
import ListCourses from "./pages/list/ListCourses";
import ListLessons from "./pages/list/ListLessons";
import ListRiddles from "./pages/list/ListRiddles";
import ListDocuments from "./pages/list/ListDocuments";
import ListTests from "./pages/list/ListTests";

import Single from "./pages/single/SingleUser";
import SingleCourse from "./pages/single/SingleCourse";
import SingleLesson from "./pages/single/SingleLesson";
import SingleRiddle from "./pages/single/SingleRiddle";
import SingleDocument from "./pages/single/SingleDocument";
import SingleTest from "./pages/single/SingleTest";

import UpdateUser from "./pages/new/UpdateUser";
import UpdateCourse from "./pages/new/UpdateCourse";
import UpdateLesson from "./pages/new/UpdateLesson";
import UpdateRiddle from "./pages/new/UpdateRiddle";
import UpdateDocument from "./pages/new/UpdateDocument";
import UpdateTest from "./pages/new/UpdateTest";

import NewCourse from "./pages/new/NewCourse";
import NewLesson from "./pages/new/NewLesson";
import NewRiddle from "./pages/new/NewRiddle";
import NewDocument from "./pages/new/NewDocument";
import NewTest from "./pages/new/NewTest";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="update/:userId"
                element={<UpdateUser title="Update User" />}
              />
            </Route>

            <Route path="courses">
              <Route index element={<ListCourses />} />
              <Route path=":courseId" element={<SingleCourse />} />
              <Route
                path="new"
                element={<NewCourse title="Add New Course" />}
              />
              <Route
                path="update/:courseId"
                element={<UpdateCourse title="Update Course" />}
              />
            </Route>

            <Route path="lessons">
              <Route index element={<ListLessons />} />
              <Route path=":lessonId" element={<SingleLesson />} />
              <Route
                path="new"
                element={<NewLesson title="Add New Lesson" />}
              />
              <Route
                path="update/:lessonId"
                element={<UpdateLesson title="Update Lesson" />}
              />
            </Route>

            <Route path="riddles">
              <Route index element={<ListRiddles />} />
              <Route path=":riddleId" element={<SingleRiddle />} />
              <Route
                path="new"
                element={<NewRiddle title="Add New Riddle" />}
              />
              <Route
                path="update/:riddleId"
                element={<UpdateRiddle title="Update Riddle" />}
              />
            </Route>

            <Route path="documents">
              <Route index element={<ListDocuments />} />
              <Route path=":documentId" element={<SingleDocument />} />
              <Route
                path="new"
                element={<NewDocument title="Add New Document" />}
              />
              <Route
                path="update/:documentId"
                element={<UpdateDocument title="Update Document" />}
              />
            </Route>

            <Route path="tests">
              <Route index element={<ListTests />} />
              <Route path=":testId" element={<SingleTest />} />
              <Route path="new" element={<NewTest title="Add New Test" />} />
              <Route
                path="update/:testId"
                element={<UpdateTest title="Update Test" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
