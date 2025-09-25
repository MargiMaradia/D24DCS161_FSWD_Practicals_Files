import { useState } from "react";
import axios from "axios";

const API = "http://localhost:3000/api/students";

function StudentForm({ onStudentAdded }) {
  const [form, setForm] = useState({ name: "", age: "", grade: "", contact: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API, form);
      setForm({ name: "", age: "", grade: "", contact: "" });
      onStudentAdded();
    } catch (err) {
      console.error("Failed to add student:", err);
      alert("Could not add student. Check the server console or network tab for details.");
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input placeholder="Age" type="number" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
      <input placeholder="Grade" value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })} />
      <input placeholder="Contact" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
      <button type="submit">➕ Add Student</button>
    </form>
  );
}

export default StudentForm;
