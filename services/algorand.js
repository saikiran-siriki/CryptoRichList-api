const axios = require('axios');
const {ALGO_BASE_URL} = require('../helpers/urls/algorand')



module.exports = {algorand_instance:axios.create({
    baseURL: ALGO_BASE_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})}
