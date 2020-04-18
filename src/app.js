const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);


app.get("", (req, res) => {
  res.render("index", {
    name: "Home",
    author: "Nabin Bhandari",
  });
});


app.get("/about", (req, res) => {
  res.render("about", {
    name: "About us",
    author: "Nabin Bhandari",
  });
});


app.get("/help", (req, res) => {
  res.render("help", {
    name: "Help",
    author: "Nabin Bhandari",
  });
}); 


app.get('/help/*' , (req,res)=>{
  res.render('404',{
    error : 'Help article not Found',
  })
})

app.get('/about/*' , (req,res)=>{
  res.render('404',{
    error : 'About Section not Found',
  })
})
app.get('*' , (req, res)=>{
  res.render('404',{
    error : 'Page not Found',
  })
})

app.listen("3000", () => {
  console.log("App is listen in 3000 port");
});
