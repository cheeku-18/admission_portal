const mongoose = require('mongoose');
const liveDb = 'mongodb+srv://aryanaryan8999:Aryan123@cluster0.vdm1si7.mongodb.net/admissionPortal?retryWrites=true&w=majority&appName=Cluster0'
const localDb = 'mongodb://127.0.0.1:27017/admissionPortal'
const connectDb = () =>{
    return mongoose.connect(liveDb)
    .then(()=>{
        console.log("Connected Succeessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connectDb