// App.js (update the existing code)
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import FinancialHealthScore from './components/FinancialHealthScore';
import Visualization from './components/Visualization';
import axios from 'axios';

const App = () => {
  const [financialData, setFinancialData] = useState({});
  const [financialHealthScore, setFinancialHealthScore] = useState(null);

  const calculateFinancialHealth = async ({ companyName, income, expenses, debts, assets }) => {
    // Convert inputs to numbers
    income = parseFloat(income);
    expenses = parseFloat(expenses);
    debts = parseFloat(debts);
    assets = parseFloat(assets);

    // Check if any input is not a valid number
    if (isNaN(income) || isNaN(expenses) || isNaN(debts) || isNaN(assets)) {
      alert('Please enter valid numbers for all inputs.');
      return;
    }

    // Calculate ratios and overall balance
    const expenseToIncomeRatio = expenses / income;
    const assetToDebtRatio = assets / debts;
    const overallBalance = (income - expenses) + (assets - debts);

    // Define scoring logic (you can adjust these thresholds based on your criteria)
    let score = 0;

    if (expenseToIncomeRatio <= 0.5) {
      score += 30;
    } else if (expenseToIncomeRatio <= 0.7) {
      score += 20;
    } else if (expenseToIncomeRatio <= 1) {
      score += 10;
    }

    if (assetToDebtRatio >= 2) {
      score += 30;
    } else if (assetToDebtRatio >= 1.5) {
      score += 20;
    } else if (assetToDebtRatio >= 1) {
      score += 10;
    }

    if (overallBalance >= 0) {
      score += 30;
    } else if (overallBalance >= -500) {
      score += 20;
    } else if (overallBalance >= -1000) {
      score += 10;
    }

    // Set the financial health score
    setFinancialHealthScore(score);

    try {
      // Make a POST request to the backend endpoint
      const response = await axios.post('http://localhost:4000/api/data', {
        companyName,
        income,
        expenses,
        debts,
        assets,
        score,
      });

      // Handle the response as needed
      console.log('Data saved successfully', response.data);

    } catch (error) {
      // Handle errors
      console.error('Error saving data', error);
    }
    
  };

  return (
    <div className='main-div'>
      <div>
      <h1>Financial Health Tool</h1>
      <InputForm onSubmit={calculateFinancialHealth} />
      {financialHealthScore !== null && <FinancialHealthScore score={financialHealthScore} />}
      {financialHealthScore != null && <Visualization financialScore={financialHealthScore} />}
      </div>
    </div>
  );
};

export default App;
