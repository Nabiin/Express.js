const express = require('express')
const path = require('path')


const app = express()


let publicPathDir = path.join(__dirname , '/Learned-Public')


console.log(publicPathDir)


app.use(express.static(publicPathDir))


app.listen('3000' , ()=>{
    console.log('app is listing in port 3000')
})


