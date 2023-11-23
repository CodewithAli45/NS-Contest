
const Product = require('../models/logicalModel');




const addProduct = async (req, res) => {
    const { name, description, price, category} = req.body;
    try {
        const products = new Product({
            name, description, price, category
        });

        await Product.create(products);

        res.status(201).json({
            msg: "success",
            data: {products}
        })
    } catch (error) {
        
    }
}


const getProduct = async (req, res) => {
   
    try {
        const products = await Product.find();

        res.status(200).json({
            msg: "success",
            data: {products}
        })
    } catch (error) {
        
    }
}


// TODO: Implement logical operators for querying products

// Get all products where price is 2000 or name is 'product1'
const or = async (req, res) => {
  try {
    // TODO: Write a query to find products matching the given conditions using the $or operator
    // TODO: Use $or to find products where price is 2000 or name is 'product1'
    const products = await Product.find({
        $or : [
            { price: {$gt : 2000}},
            { name: "product1"}
        ]
    });

    res.status(200).json(products);

  } catch (error) {
    res.status(404).send(error);
  }
};

// Get all products where price is 2000 and name is 'product1'
const and = async (req, res) => {
  try {
    // TODO: Write a query to find products matching the given conditions using the $and operator
    // TODO: Use $and to find products where price is 2000 and name is 'product1'
    const products = await Product.find({
        $and : [
            { price: {$eq : 2000}},
            { name: "product1"}
        ]
    });

    res.status(200).json(products);

  } catch (error) {
    res.status(404).send(error);
  }
};

// Get all products where price is not greater than 2000 (i.e., less than or equal to 2000)
const not = async (req, res) => {
  try {
    // TODO: Write a query to find products where price is not greater than 2000 using the $not and $gt operators

    const products = await Product.find({
        price: {
            $not : { $gt: 2000}
        }
    });

    res.status(200).json(products);

  } catch (error) {
    res.status(404).send(error);
  }
};

// Get all products except those where price is 2000 or name is 'product1'
const nor = async (req, res) => {
  try {
    // TODO: Write a query to find products except those where price is 2000 or name is 'product1' using the $nor operator

    const products = await Product.find({
        $nor : [
            { price: {$eq : 2000}},
            { name: "product1"}
        ]
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { or, and, not, nor, addProduct, getProduct };