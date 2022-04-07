const ALGO_BASE_URL = 'https://indexer.algoexplorerapi.io'
const GET_RICH_LIST = '/stats/v2/accounts/rich-list?include-nonpart=true&limit=100'
const GET_CURR_SUPPLY = 'https://metricsapi.algorand.foundation/v1/supply/circulating?unit=algo'

module.exports = {
    ALGO_BASE_URL,
    GET_RICH_LIST,
    GET_CURR_SUPPLY
}