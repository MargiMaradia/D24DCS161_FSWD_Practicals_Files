import axios from "axios";
import { useState } from "react";

const API = "http://localhost:3000/api/students";

function StudentList({ students, onUpdate }) {
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", age: "", grade: "", contact: "" });

  const startEdit = (student) => {
    setEditing(student._id);
    setForm(student);
  };

  const saveEdit = async () => {
    try {
      await axios.put(`${API}/${editing}`, form);
      setEditing(null);
      onUpdate();
    } catch (err) {
      console.error("Failed to update student:", err);
      alert("Could not update student. See console for details.");
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      onUpdate();
    } catch (err) {
      console.error("Failed to delete student:", err);
      alert("Could not delete student. See console for details.");
    }
  };

  return (
    <div className="student-list">
      <h2>📋 Student Records</h2>
      {students.length === 0 ? (
        <p className="empty">No students added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>
                  {editing === student._id ? (
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  ) : (
                    student.name
                  )}
                </td>
                <td>
                  {editing === student._id ? (
                    <input type="number" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
                  ) : (
                    student.age
                  )}
                </td>
                <td>
                  {editing === student._id ? (
                    <input value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })} />
                  ) : (
                    student.grade
                  )}
                </td>
                <td>
                  {editing === student._id ? (
                    <input value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
                  ) : (
                    student.contact
                  )}
                </td>
                <td>
                  {editing === student._id ? (
                    <>
                      <button className="save" onClick={saveEdit}>Save</button>
                      <button className="cancel" onClick={() => setEditing(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="edit" onClick={() => startEdit(student)}>Edit</button>
                      <button className="delete" onClick={() => deleteStudent(student._id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
