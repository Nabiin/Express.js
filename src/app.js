const express = require('express')
const path = require('path')
const app = express()

/* console.log(__dirname)
console.log(path.join(__dirname, '../public'))
*/

const publicpath = path.join(__dirname, '../public')

app.use(express.static(publicpath))

 app.listen('3000' , ()=>{
    console.log('the server is running in 3000 port')
})

