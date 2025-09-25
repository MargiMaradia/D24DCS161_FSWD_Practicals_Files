import { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

const API = "http://localhost:5000/api/students";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="app-container">
      <div className="panel">
        <h1 className="title">🎓 Tuition Class Admin Panel</h1>
        <StudentForm onStudentAdded={fetchStudents} />
        <StudentList students={students} onUpdate={fetchStudents} />
      </div>
    </div>
  );
}

export default App;
