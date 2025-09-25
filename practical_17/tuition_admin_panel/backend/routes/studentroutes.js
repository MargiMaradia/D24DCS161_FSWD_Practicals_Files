const express = require("express");
const { addStudent, getStudents, updateStudent, deleteStudent } = require("../controllers/studentController");

const router = express.Router();

router.post("/", addStudent);         // Add
router.get("/", getStudents);         // View
router.put("/:id", updateStudent);    // Edit
router.delete("/:id", deleteStudent); // Delete

module.exports = router;
