const Pool = require('pg').Pool

const pool = new Pool({
  user: 'macior',
  host: 'localhost',
  database: 'finance_manager_database',
  password: 'elo123',
  port: 5432,
})

const getFinanceRecords = (request, response) => {
  pool.query("SELECT to_char(date, 'Mon YYYY') as formatted_date, * FROM finance_records ORDER BY created_at ASC", (error, results) => {
    if (error) {
      response.status(400).json({ error: error.stack })
    } else {
      response.status(200).json(results.rows)
    }
  })
}

const postFinanceRecord = (request, response) => {
  const data = request.body;

  pool.query(`INSERT INTO finance_records (date, etf_capital, etf_total, bonds_capital, bonds_total, exchange_rate, inflation) VALUES ('${data.date}', ${data.etfCapital}, ${data.etfTotal}, ${data.bondsCapital}, ${data.bondsTotal}, ${data.exchangeRate}, ${data.inflation})`, (error, results) => {
    if (error) {
      response.status(400).json({ error: error.stack })
    } else {
      response.status(200).json(results.rows)
    }
  })
}

const deleteFinanceRecord = (request, response) => {
  pool.query(`DELETE FROM finance_records WHERE id = ${request.params.id}`, (error, results) => {
    if (error) {
      response.status(400).json({ error: error.stack })
    } else {
      response.status(200).json(results.rows)
    }
  })
}

module.exports = {
  getFinanceRecords,
  postFinanceRecord,
  deleteFinanceRecord
}