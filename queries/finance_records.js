const Pool = require('pg').Pool

const pool = new Pool({
  user: 'macior',
  host: 'localhost',
  database: 'finance_manager_database',
  password: 'elo123',
  port: 5432,
})

const getFinanceRecords = (request, response) => {
  pool.query('SELECT * FROM finance_records ORDER BY created_at ASC', (error, results) => {
    if (error) {
      response.status(400).json({ error: error })
    } else {
      response.status(200).json(results.rows)
    }
  })
}

module.exports = {
  getFinanceRecords
}