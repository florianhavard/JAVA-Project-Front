import './CSS/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom/dist'

import SideBar from './Components/SideBar/SideBar';
import SchoolPage from './Components/Pages/SchoolPages/SchoolPage';
import ClassPage from './Components/Pages/ClassPages/ClassPage';
import StudentPage from './Components/Pages/StudentPages/StudentPage';
import CreateSchoolPage from './Components/Pages/SchoolPages/CreateSchoolPage';
import EditSchoolPage from "./Components/Pages/SchoolPages/EditSchoolPage";
import CreateClassPage from "./Components/Pages/ClassPages/CreateClassPage";
import EditClassPage from "./Components/Pages/ClassPages/EditClassPage";
import CreateStudentPage from "./Components/Pages/StudentPages/CreateStudentPaga";
import EditStudentPage from "./Components/Pages/StudentPages/EditStudentPage";


function App() {
  return (
      <Router>
        <div className="App">
          <SideBar />
          <Routes>
            <Route exact path="/" element={<SchoolPage />} />
            <Route exact path="/Schools" element={<SchoolPage />} />
            <Route exact path="/Schools/create" element={<CreateSchoolPage />} />
            <Route exact path="/Schools/edit/:id" element={<EditSchoolPage />} />
            <Route exact path="/Classes" element={<ClassPage />} />
              <Route exact path="/Classes/create" element={<CreateClassPage />} />
              <Route exact path="/Classes/edit/:id" element={<EditClassPage />} />
              <Route exact path="/Students" element={<StudentPage />} />
              <Route exact path="/Students/create" element={<CreateStudentPage />} />
              <Route exact path="/Students/edit/:id" element={<EditStudentPage />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;
