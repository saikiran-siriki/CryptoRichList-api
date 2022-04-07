const express = require('express')
const app = express()
var cors = require('cors')
const axios = require('axios')
const {algorand_instance} = require('./services/algorand')
const {GET_RICH_LIST, GET_CURR_SUPPLY} = require('./helpers/urls/algorand')
app.use(cors())

async function getCurrentSupply() {
    return new Promise((res,rej)=>{
        axios.get(GET_CURR_SUPPLY).then((algoresp)=>{
            res(algoresp.data)
          })
    })
    
}


app.get('/algorand/richlist',async (req,res) => {
    const current_supply = await getCurrentSupply()
    algorand_instance.get(GET_RICH_LIST).then((algoresp)=>{
        const accounts = algoresp.data.accounts
        const top100 = (accounts.reduce((n, {balance}) => Number(n) + Number(balance), 0))/10000
        console.log(top100,current_supply)
        res.send(JSON.stringify(top100/current_supply))
      })
})

app.listen('8000',(req,res)=>{
    console.log('Listening in 8000')
})