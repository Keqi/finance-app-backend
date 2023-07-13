const express = require("express");
const cors = require('cors')

const PORT = process.env.PORT || 3001;
const app = express();
const financeRecords = require('./../queries/finance_records')

app.use(cors())
app.use(express.json());

app.get('/finance_records', financeRecords.getFinanceRecords)
app.post('/finance_records', financeRecords.postFinanceRecord)
app.delete('/finance_records/:id', financeRecords.deleteFinanceRecord)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});