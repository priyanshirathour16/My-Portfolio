const mongoose = require("mongoose");

mongoose.connect("mongodb://containers-us-west-155.railway.app:7692/employeeuser" , {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connection successfull"))
.catch((err)=> console.log(err))
