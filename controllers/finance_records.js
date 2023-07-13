const models = require('../db/models')

const getFinanceRecords = async (request, response) => {
  const financeRecords = await models.FinanceRecord.findAll();

  response.status(200).json(financeRecords)
}

const postFinanceRecord = async (request, response) => {
  const data = request.body;
  const financeRecord = await models.FinanceRecord.create(data)

  response.status(200).json(financeRecord)
}

const editFinanceRecord = async (request, response) => {
  const data = request.body;

  const financeRecord = await models.FinanceRecord.findOne({ where: { id: request.params.id } })
  financeRecord.set(data);

  await financeRecord.save();

  response.status(200).json(financeRecord)
}

const deleteFinanceRecord = async (request, response) => {
  const data = request.body;
  const financeRecord = await models.FinanceRecord.findOne({ where: { id: request.params.id } })

  await financeRecord.destroy();

  response.status(200).json(financeRecord)
}

module.exports = {
  getFinanceRecords,
  postFinanceRecord,
  deleteFinanceRecord,
  editFinanceRecord
}