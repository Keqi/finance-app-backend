const express = require("express");
const cors = require('cors')

const PORT = process.env.PORT || 3001;
const app = express();
const financeRecordsController = require('./../controllers/finance_records')

app.use(cors())
app.use(express.json());

app.get('/finance_records', financeRecordsController.getFinanceRecords)
app.post('/finance_records', financeRecordsController.postFinanceRecord)
app.put('/finance_records/:id', financeRecordsController.editFinanceRecord)
app.delete('/finance_records/:id', financeRecordsController.deleteFinanceRecord)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});