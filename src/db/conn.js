const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/employeeuser" , {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connection successfull"))
.catch((err)=> console.log(err))