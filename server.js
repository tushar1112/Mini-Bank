require("dotenv").config({ path: "./config.env" });
const express=require('express');
const app =express();
const path= require("path")
const mongoose=require('mongoose');
const routeUrls= require('./routes/routes')
const cors=require('cors')
const port=process.env.PORT || 5000;


mongoose.connect(process.env.DATABASE_ACCESS,{ useNewUrlParser: true },()=>console.log("database connected 1"));

app.use(express.json())
app.use(cors())
app.use('/app',routeUrls)


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }  
else{
    app.get("/",(req,res)=>{
       res.send("Api is running"); 
    });
}



app.listen(port,()=>console.log("server is running"))
