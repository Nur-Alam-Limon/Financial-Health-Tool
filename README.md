# Financial-Health-Tool
<br/>
This is an app where you can calculate your financial health by giving a few inputs, like your monthly income, expenses, debt, and assets. It's a react app
and in backend we have used express and as database mongodb atlas. The app is hosted in netlify and the backend is hosted in render. <br/>
<br/>
Live Link: https://financial-health-tool12.netlify.app/<br/>
<br/><br/>
The app has the following features:<br/>
-- User can give their company_name, monthly expense, income, debt and assets as input and then the app will calculate their financial score.<br/>
-- If there is any previous data for that company it will show that data in graph as well<br/>
-- By the graph the company can see their improvement<br/>
-- The data is secured with Authorization token<br/>
-- The mongodb Atlas database is used here<br/>
-- It's build to be user-friendly. <br/>
<br/>
Financial Score:<br/>
-- The financial score is determined by three factors: the ratio of expenses to income, the ratio of assets to debts, and the overall balance. 
Each factor has specific score contributions based on predefined ranges. A lower expense-to-income ratio and a higher asset-to-debt ratio contribute 
positively, while a positive overall balance is favorable. The scoring logic assigns tiered increments for different ranges of these factors to evaluate 
and quantify the financial health of a company. The resulting score is sent to a backend API along with other financial details for storage and analysis.
<br/>
There are two folders here. One is for the front end and the other is for back end. Here is how you can run the project:<br/>
<br/><br/>
Frontend:<br/>
-- Clone the project<br/>
-- cd to frontend<br/>
-- npm install<br/>
-- Create a .env file and provide two values: <br/>
  SECURE_TOKEN=Any Token string<br/>
  endpoint="http://localhost:4000"<br/>
-- npm run start<br/>
<br/><br/>
Backend:<br/>
-- Clone the project<br/>
-- cd to backend<br/>
-- npm install<br/>
-- Create a .env file and provide two values: <br/>
  MONGO_URI=mongodb_atlas_url<br/>
  PORT=4000<br/>
  SECURE_TOKEN=Same token as frontend<br/>
-- npm run start<br/>
