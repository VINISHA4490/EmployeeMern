const express=require('express');
const router=express.Router();
const UserModel=require('../model/userData')
router.use(express.json());

router.post('/login',async(req,res)=>{

    try{
        const user=UserModel.findOne({email:req.body.email})
    if(!user){
        res.send('user not found')
    }
    
    
    else{
        if(!user.password==req.body.password){
            res.status(200).send('login successfully')
        }
        else{
            res.status(200).send('invalid credentials ')

        }

    }
}catch(error){
        console.log(error)
    }


})

router.post('/signup',async(req,res)=>{
    try {
        
        const data=req.body;
        await UserModel(data).save()
        res.status(200).send({message:"data added"});
    } catch (error) {
        console.log(error);
    }
})

module.exports=router;