const express=require('express');
const router=express.Router();
const EmployeeModel=require('../model/employeedata')
router.use(express.json());

router.get('/',async(req,res)=>{
    try{
    const data=await EmployeeModel.find();
    res.status(200).send(data);
    }catch(error){
        res.status(400).send('no data')
    }

})

module.exports=router;