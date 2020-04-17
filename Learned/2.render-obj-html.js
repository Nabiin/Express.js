/* 
In this code We will learn ho to render html and object , arrays in browser from express route
*/
const express = require('express')
const app = express()



//In homw page we will render html h1 
app.get('',(req, res)=>{
   res.send('<h1>Welcome to my site</h1>')
   //The express will automatically detect the html code from the string and automatically extract the html code and help to render in the browser
})


//In help page we will Render javascript object 
app.get('/help',(req, res)=>{
    res.send({
        Name : 'Nabin',
        Home : 'Ghorahi'
    }) //The express will be detect this js object and automatically stringfy this object for browser optimization
   
})



//In about page we will Render javascript object  and arrays
app.get('/about',(req, res)=>{
   res.send([{
    Name : 'Nabin',
    Home : 'Ghorahi'
},{
    Name : 'Bibhu',
    Home : 'Suryabinayek'
}]) 
})


//The weather page will render the html and js both
app.get('/weather',(req, res)=>{
    res.send({
        Address : 'Nepal' , 
        temp : 30,
        Weather : 'No cloud , sky is clean'
    })
})

app.listen('3000' , ()=>{
    console.log('Server is running in port 300')
})




