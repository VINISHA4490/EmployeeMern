const express=require('express')
const app=new express();
const dotenv=require('dotenv');

const cors=require('cors')
require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection')

const EmployeeModel=require('./routes/employeeroutes')
app.use('/employee',employeeroutes)
const UserRoutes=require('./routes/userroutes')
app.use('/user',UserRoutes)
app.use(cors());




app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})