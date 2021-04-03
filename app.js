const express=require("express")
const app=express()
const port=process.env.PORT || 3000
//package.json a giye thn scripts er under a 
//"start":" node app.js"
//"devs": nodemon app.js

//connect mongodb student-api database
require('./db/connection.js')

//to get json data from postamn
app.use(express.json())
//connect mongodb student-api database end

//get routing module
const routers=require("./Router/routers")

//use  express router

app.use(routers)




//connection

app.listen(port,()=>[
    console.log(` Connected from ${port}`)
])