const express=require("express")
const app=express()
const port=process.env.PORT || 3000
//package.json a giye thn scripts er under a 
//"start":" node app.js"
//"devs": nodemon app.js

//connect mongodb student-api database
require('./db/connection.js')
// Collection set
const Student=require('./Model/student')

//to get json data from postamn
app.use(express.json())
//connect mongodb student-api database end


//routing

app.get("/",(req,res)=>{
    res.send("Hello from Students Database")
})
//post
//create a student using promise
/*app.post("/students",(req,res)=>{
    console.log(req.body)

    const user=new Student(req.body)
    //req.body from posttman
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})
*/

//using async await
app.post("/students", async(req,res)=>{
    try{
        const user=new Student(req.body)
        const CreateStu= await user.save()
        res.status(201).send(CreateStu)
    }

    catch(e){
      res.status(400).send(e)
    }
})
//connection

app.listen(port,()=>[
    console.log(` Connected from ${port}`)
])