const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  // TODO: Define the properties of the model
  // Field 1: Define a property for 'name' with a String data type
  // Field 2: Define a property for 'grades' as an array with subdocuments subject as a string and score as number
  // Field 3: Define a property for 'averageScore' with a Number data type
  name : {type: String, required: true},
  grades: [
    {
        subject: {type: String, required: true},
        score: {type: Number, required: true}
    }
  ],
  averageScore: {type: Number}

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;