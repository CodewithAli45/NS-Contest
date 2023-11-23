const User = require("./models/userModel");

const users = [
    {
      name: 'John Doe',
      age: 25,
      course: 'Computer Science',
      experience: true,
    },
    {
      name: 'Alice Smith',
      age: 30,
      course: 'Electrical Engineering',
      experience: false,
    },
    {
      name: 'Bob Johnson',
      age: 22,
      course: 'Mechanical Engineering',
      experience: true,
    },
    {
      name: 'Eva Williams',
      age: 28,
      course: 'Data Science',
      experience: true,
    },
    {
      name: 'Charlie Brown',
      age: 23,
      course: 'Civil Engineering',
      experience: false,
    },
    {
      name: 'Grace Davis',
      age: 26,
      course: 'Chemistry',
      experience: true,
    },
    {
      name: 'Daniel Miller',
      age: 29,
      course: 'Physics',
      experience: false,
    },
    {
      name: 'Sophia Wilson',
      age: 24,
      course: 'Mathematics',
      experience: true,
    },
    {
      name: 'James Taylor',
      age: 27,
      course: 'Environmental Science',
      experience: false,
    },
    {
      name: 'Olivia Brown',
      age: 31,
      course: 'Astronomy',
      experience: true,
    },
  ];

  async function seed(){
    try {
      await User.create(users);
      console.log('Seed: Initial data seeded successfully');
    } catch (error) {
      console.error('Seed: Error seeding initial data:', error);
    }
  }

module.exports = seed;