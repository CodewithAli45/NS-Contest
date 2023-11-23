const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.get('/students', studentController.getStudents);
router.post('/students', studentController.createStudent);
router.put('/students/:studentId/grades', studentController.updateGrades);
router.get(
  '/students/:studentId/report',
  studentController.generateGradeReport
);

module.exports = router;