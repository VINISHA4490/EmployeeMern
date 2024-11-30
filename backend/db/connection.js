const mongoose=require('mongoose');
mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log('connection established')
}).catch(()=>{
    console.log('connection error')
})
