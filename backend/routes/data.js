// routes/data.js
const express = require('express');
const router = express.Router();
const FinancialData = require('../models/financialData.js');

// Save financial data
router.post('/', async (req, res) => {
  try {
    const { companyName, income, expenses, debts, assets, score } = req.body;
    const financialData = new FinancialData({ companyName, income, expenses, debts, assets, score });
    await financialData.save();
    res.json({ message: 'Financial data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all financial data
router.get('/', async (req, res) => {
  try {
    const financialData = await FinancialData.find();
    res.json(financialData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
