const Currency = require('../models/currencyModel');

// Function to create a new currency
const createCurrency = async (req, res) => {
  const { code, name, exchangeRate } = req.body;

  try {
    // TODO: Define the logic to create a new currency based on the provided data
    // TODO: Save the new currency to the database
    // TODO: Respond with a success message and the newly created currency
    const newCurrency = new createCurrency({
        code, name, exchangeRate
    })
    await Currency.create(newCurrency);
    res.status(201).json({newCurrency});
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to get all currencies
const getAllCurrencies = async (req, res) => {
  try {
    // TODO: Define the logic to retrieve all currencies from the database
    // TODO: Respond with the list of currencies
    const currency = await Currency.find();
    res.status(200).json({ currency});
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to convert currency
const convertCurrency = async (req, res) => {
  const { fromCurrency, toCurrency, amount } = req.body;

  try {
    // TODO: Retrieve exchange rates for 'fromCurrency' and 'toCurrency' from a reliable source or database
    // - You can use a currency exchange rate API or fetch rates from a database
    // TODO: Check if the provided currency codes 'fromCurrency' and 'toCurrency' are valid
    // TODO: Perform the currency conversion using the exchange rates
    // - Use the exchange rates to calculate the converted amount
    // TODO: Handle edge cases, such as invalid currency codes or non-numeric 'amount'
    // TODO: Respond with the converted amount or appropriate error messages
    
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  convertCurrency,
  createCurrency,
  getAllCurrencies,
};