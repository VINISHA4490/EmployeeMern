const mongoose=require('mongoose');
const EmployeeSchema=mongoose.Schema({
    Name:String,
    Place:String,
    Department:String,
    Salary:Number
})
const EmployeeData=mongoose.model('employeedata',EmployeeSchema);
module.exports=EmployeeData;