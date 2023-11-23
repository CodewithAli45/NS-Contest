const Student = require('../models/studentModel');

// Function to get all students
exports.getStudents = async (req, res) => {
  try {
    // TODO: Define the logic to retrieve all student records from the database
    // TODO: Respond with the list of students

    const students = await Student.find();

    res.status(200).json(students);

  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to create a new student
exports.createStudent = async (req, res) => {
  const { name } = req.body;

  try {
    // TODO: Define the logic to create a new student record based on the provided data
    // TODO: Save the new student record to the database
    // TODO: Respond with a success message and the newly created student record
    const students = new Student({
        name, 
    });

    await students.save();
    res.status(201).json(students);

  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to update a student's grades
exports.updateGrades = async (req, res) => {
  const { studentId } = req.params;
  const { subject, score } = req.body;

  try {
    // TODO: Retrieve the student record with the given 'studentId' from the database
    // TODO: Check if the student record exists and handle the case when it doesn't
    // TODO: Add the new grade to the student's grades array
    // TODO: Calculate the new average score
    // TODO: Save the updated student record to the database
    // TODO: Respond with a success message and the updated student record
    if (typeof subject !== 'string' || isNaN(score)) {
        return res.status(400).json({ message: 'Invalid input parameters.' });
      }

    const existingStudent = await Student.findById({studentId});
    if(!existingStudent){
        return res.status(404).json({
            error: "Student not found"
        })
    }

    const newGrade = {subject, score};
    existingStudent.grades.push(newGrade);

    const totalScore = existingStudent.grades.reduce((acc, curr) => acc + curr.score, 0);
    const average = totalScore / existingStudent.grades.length;

    existingStudent.averageScore = average;

    await existingStudent.save();

    res.status(201).json(existingStudent);

  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to generate a grade report for a student
exports.generateGradeReport = async (req, res) => {
  const { studentId } = req.params;

  try {
    // TODO: Retrieve the student record with the given 'studentId' from the database
    // TODO: Check if the student record exists and handle the case when it doesn't
    // TODO: Generate a report with the student's name, grades, and average score
    // TODO: Respond with the generated grade report
    if (typeof subject !== 'string' || isNaN(score)) {
        return res.status(400).json({ message: 'Invalid student ID.'  });
    }

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found.' });
    }

    // Prepare Grade Report
    const gradeReport = {
      name: student.name,
      grades: student.grades,
      averageScore: student.averageScore
    };

    // Response
    res.status(200).json(gradeReport);
  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: 'Internal server error' });
  }
};