import { jsonRequest } from './apiRequest'

const baseUrl = 'https://6069981de1c2a10017544b18.mockapi.io/transactions'

export function fetchTransactions(page = 1) {
  return jsonRequest(
    `${baseUrl}?sortBy=createdAt&order=desc&p=${page}&l=10`,
    null,
    'GET'
  )
}
export function searchTransactions(filter = '') {
  return jsonRequest(
    `${baseUrl}?sortBy=createdAt&order=desc&search=${filter}`,
    null,
    'GET'
  )
}
export function addTransaction(params) {
  return jsonRequest(`${baseUrl}`, params, 'POST')
}
