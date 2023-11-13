# Financial-Health-Tool

This is an app where you can calculate your financial health by giving a few inputs, like your monthly income, expenses, debt, and assets. It's a react app
and in backend we have used express and as database mongodb atlas. The app is hosted in netlify and the backend is hosted in render. 

Live Link: https://financial-health-tool12.netlify.app/

The app has the following features:
-- User can give their company_name, monthly expense, income, debt and assets as input and then the app will calculate their financial score.
-- If there is any previous data for that company it will show that data in graph as well
-- By the graph the company can see their improvement
-- The data is secured with Authorization token
-- The mongodb Atlas database is used here
-- It's build to be user friendly. 

Financial Score:
-- The financial score is determined by three factors: the ratio of expenses to income, the ratio of assets to debts, and the overall balance. 
Each factor has specific score contributions based on predefined ranges. A lower expense-to-income ratio and a higher asset-to-debt ratio contribute 
positively, while a positive overall balance is favorable. The scoring logic assigns tiered increments for different ranges of these factors to evaluate 
and quantify the financial health of a company. The resulting score is sent to a backend API along with other financial details for storage and analysis.

There is two folders here. One is for the frontend and the other is for backend. Here is how you can run the project:

Frontend:
-- Clone the project
-- cd to frontend
-- npm install
-- Create a .env file and provide two values: 
  SECURE_TOKEN=Any Token string
  endpoint="http://localhost:4000"
-- npm run start

Backend:
-- Clone the project
-- cd to backend
-- npm install
-- Create a .env file and provide two values: 
  MONGO_URI=mongodb_atlas_url
  PORT=4000
  SECURE_TOKEN=Same token as frontend
-- npm run start
