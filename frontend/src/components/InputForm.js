// InputForm.js
import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [companyName, setCompanyName] = useState('');
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [debts, setDebts] = useState('');
  const [assets, setAssets] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pass the financial data to the parent component
    onSubmit({ companyName, income, expenses, debts, assets });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company Name:
        <br />
        <input
          className='m-5'
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Monthly Income ($):
        <br />
        <input
          className='m-5'
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Monthly Expenses ($):
        <br />
        <input
        className='m-5'
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Total Debts ($):
        <br />
        <input
        className='m-5'
          type="number"
          value={debts}
          onChange={(e) => setDebts(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Total Assets ($):
        <br />
        <input
        className='m-5'
          type="number"
          value={assets}
          onChange={(e) => setAssets(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Calculate</button>
    </form>
  );
};

export default InputForm;
