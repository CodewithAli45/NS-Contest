const User = require('../models/userModel');

const paginate = async (req, res) => {
    const defaultPage = 1;
    const defalutLimit = 10;

  try {
    // TODO: Query the users based on the pagination parameters
    // TODO: Respond with the paginated users
    // page (Number, optional): The page number (default is 1).
    // limit (Number, optional): The number of users per page (default is 10).
    const page = parseFloat(req.query.page) || defaultPage;
    const limit = parseFloat(req.query.limit) || defalutLimit;

    const skipSize = (page - 1) * limit;

    const users = await User.find().skip(skipSize).limit(limit);

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const sort = async (req, res) => {
  const sortOptions = {};

  if (req.query.sort) {
    // Get the sorting order from the 'sort' query parameter
    const sortOrder = req.query.sort.toLowerCase(); // Convert to lowercase for case-insensitivity

    // Define sorting options based on the sortOrder
    if (sortOrder === 'asc' || sortOrder === 'ascending') {
      sortOptions.age = 1; // 1 for ascending order
    } else if (sortOrder === 'desc' || sortOrder === 'descending') {
      sortOptions.age = -1; // -1 for descending order
    } else {
      // Handle invalid sorting orders
      return res.status(400).json({
        message: 'Invalid sorting order. Use "asc" for ascending or "desc" for descending.',
      });
    }
  }

  try {
    // TODO: Query and sort the products based on the sorting options
    // TODO: Respond with the sorted products
    const users = await User.find().sort(sortOptions);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

async function findAndSort(req, res){
  try {
    const users = await User.find()
    .skip(1)
    .limit(3)
    .sort({age: -1});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message: 'Internal server error'});
  }
}

module.exports = {
  paginate,
  sort,
  findAndSort
};