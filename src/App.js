import './CSS/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom/dist'

import SideBar from './Components/SideBar/SideBar';
import SchoolPage from './Components/Pages/SchoolPages/SchoolPage';
import ClassPage from './Components/Pages/ClassPages/ClassPage';
import StudentPage from './Components/Pages/StudentPages/StudentPage';
import schoolApi from "./Services/schoolApi";
import {useEffect, useState} from "react";


function App() {
    const [schools, setSchools] = useState([]);
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const schools = await schoolApi.findAll();
        setSchools(schools);
        console.log(schools)
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchSchools();
  }, []);

  return (
      <Router>
        <div className="App">
          <SideBar />
          <Routes>
            <Route exact path="/" element={<SchoolPage />} />
            <Route exact path="/Classes" element={<ClassPage />} />
            <Route exact path="/Students" element={<StudentPage />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;
