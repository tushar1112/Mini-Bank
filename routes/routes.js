const express=require('express')
const router=express.Router()
const dataTemplate=require('../modals/usermodals')

router.post('/signup',(request,response)=>{
   
    const dataUser= new dataTemplate({
       fullname:request.body.fullname,
       accountNo:request.body.accountNo,
       email:request.body.email,
       amount:request.body.amount
   })
   dataUser.save()
   .then(data=>{
       response.json(data)
   })
   .catch(error=>{
    response.json(error)
   })
})

router.post('/signup/transfer',(request,response)=>{
   
  const dataUser= new dataTemplate({
     sender:request.body.sender,
     receiver:request.body.receiver,
     amount:request.body.amount,
 })
 dataUser.save()
 .then(data=>{
     response.json(data)
 })
 .catch(error=>{
  response.json(error)
 })
})


router.get('/signup/mydata',async (request,response)=>{

  try{
    const data= await dataTemplate.find();
    response.json(data);
  }
  catch{
    response.json({message:error})
  }
})

router.post('/signup/change',async (request,response)=>{

    const updated1= await dataTemplate.updateOne({accountNo:request.body.user1},{$inc : {amount:-request.body.user3}})
    const updated2=await dataTemplate.updateOne({accountNo:request.body.user2},{$inc:{amount:request.body.user3}})
    
    return response.json({message:"success"});
})


module.exports=router