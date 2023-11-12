// App.js
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import FinancialHealthScore from './components/FinancialHealthScore';
import Visualization from './components/Visualization';
import axios from 'axios';

const App = () => {
  const [financialHealthScore, setFinancialHealthScore] = useState(null);
  const [scores, setScores]=useState([]);
  const[date, setDate]=useState([]);

  const calculateFinancialHealth = async ({ companyName, income, expenses, debts, assets }) => {
    const formatDate = (date) => {
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth() + 1).padStart(2, '0'); 
      const yy = String(date.getFullYear()).slice(-2);
  
      return `${dd}/${mm}/${yy}`;
    };

    // Convert inputs to numbers
    income = parseFloat(income);
    expenses = parseFloat(expenses);
    debts = parseFloat(debts);
    assets = parseFloat(assets);

    const date=formatDate(new Date());
  

    // Check if any input is not a valid number
    if (isNaN(income) || isNaN(expenses) || isNaN(debts) || isNaN(assets)) {
      alert('Please enter valid numbers for all inputs.');
      return;
    }

    // Calculate ratios and overall balance
    const expenseToIncomeRatio = expenses / income;
    const assetToDebtRatio = assets / debts;
    const overallBalance = (income - expenses) + (assets - debts);

    // Define scoring logic
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
      const secureToken = process.env.SECURE_TOKEN;
      // Make a POST request to the backend endpoint
      const response = await axios.post('http://localhost:4000/api/data', {
        companyName,
        income,
        expenses,
        debts,
        assets,
        score,
        date
      }, {
        headers: {
          Authorization: secureToken,
        },
      }
      );

      //console.log('Data saved successfully', response.data);

    } catch (error) {
      // Handle errors
      //console.error('Error saving data', error);
    }

    try {
      const secureToken = process.env.SECURE_TOKEN;

      const response = await axios.get(`http://localhost:4000/api/data?companyName=${companyName}`, {
        headers: {
          Authorization: secureToken,
        },
      }
      );

      setDate(response.data.dates);
      setScores(response.data.scores);

      
      //console.log('Data get successfully', response.data);

    } catch (error) {
      // Handle errors
      console.error('Error getting data', error);
    }
    
  };

  return (
    <div className='main-div'>
      <div>
        <h1>Financial Health Tool</h1>
        <InputForm onSubmit={calculateFinancialHealth} />
        {financialHealthScore !== null && <FinancialHealthScore financialScore={financialHealthScore} />}
        {scores.length>0 && <Visualization scores={scores} date={date}/>}
      </div>
    </div>
  );
};

export default App;
