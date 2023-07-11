const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const financeRecords = require('./../queries/finance_records')


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/finance_records', financeRecords.getFinanceRecords)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});