/*challange
>Create home Page and write 'This is the home page'
>Create help page and write 'This is help page'
>Create about page and write 'This is about page'
>Create weather page and write 'This is Weather page'
>Create a sever with 3000 port
*/



const express = require('express')
const app = express()    // the variable app is the app for this project



//This is our home page or landing page 
//let this is the home page > www.apple.com
app.get('',(req,res)=>{
    res.send('This is home page')
})



//let this is the help page > www.apple.com/help
app.get('/help' , (req,res)=>{
    res.send('this is help page')
})



//let this is the about page > www.apple.com/about
app.get('/about' ,(req , res)=>{
    res.send('this is about page')
})



//let this is the weather  page > www.apple.com/weather
app.get('/weather'  , (req , res)=>{
    res.send('this is weather')
})




//This is the port in which our app run
app.listen('3000' , ()=>{
    console.log('The server is up to run')
})


/* 
##How to use
in terminal
> node 1.basicexpressserver.js 

goto browser and in url
> localhost:3000
* it will give home page i.e landing page called

> localhost:3000/help
* it will give help page

> localhost:3000/about
> localhost:3000/weather

respectly
*/