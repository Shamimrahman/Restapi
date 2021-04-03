const express=require('express')

// 1.construct router
// 2. Define Router
//3. Use Router in router.js
const router=new express.Router()
const Student =require('../Model/student')

//routing
router.get("/",(req,res)=>{
    res.send("Hello from Students Database")
})
//post
//create a student using promise
/*router.post("/students",(req,res)=>{
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
router.post("/students", async(req,res)=>{
    try{
        const user=new Student(req.body)
        const CreateStu= await user.save()
        res.status(201).send(CreateStu)
    }

    catch(e){
      res.status(400).send(e)
    }
})

//add student end

//get Student
router.get("/students",async(req,res)=>{
    const Studentdata=await Student.find()
    res.send(Studentdata)
})

//get student end

//get imdividual student

router.get('/students/:id', async (req,res)=>{
      
   try{
    const _id=req.params.id
    const studentdata= await Student.findById(_id)

    console.log(studentdata)

    if(!studentdata){
        res.status(404)
    }
    else{
        res.status(200).send(studentdata)
    }
   }

   catch(e){
       res.status(400).send(e)
   }


})

//get imdividual student finish

//Delete Student Data

router.delete("/students/:id" ,async(req,res)=>{
    try{
        const _id=req.params.id
        const delstu=await Student.findByIdAndDelete(_id)
        if(!_id){
            res.status(404)
        }

        else{
            res.status(200).send(delstu)
            console.log("Deleted")
        }

    }

    catch(e){
        res.status(500).send(e)
    }

})
//delete end

//update

router.patch('/students/:id',async (req,res)=>{
    try{
    const _id=req.params.id
    const updatestu=await Student.findByIdAndUpdate(_id, req.body ,{
        new:true
    })

     if(!_id){
         res.status(404).send()
     }

     else{
         res.status(200).send(updatestu)
     }
    }

    catch(e){
        res.status(500).send(e)
    }

})

module.exports=router