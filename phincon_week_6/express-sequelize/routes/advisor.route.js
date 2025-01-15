const express = require("express");
const router = express.Router();
const { getAdvisorsWithStudentNames } = require("../controllers/advisor.controller");

router.get("/students", getAdvisorsWithStudentNames);
// router.get("/", getAllStudents);
// router.get("/:id", getStudentById);
// router.post("/", createStudent);
// router.put("/:id", updateStudent);
// router.delete("/:id", deleteStudent);

module.exports = router;
