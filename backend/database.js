const mongoose=require('mongoose');
const host = "mongodb+srv://Jilani:Jillu143@jilani.uwptgvf.mongodb.net/ecommers?retryWrites=true&w=majority"


const connectDataBase=()=>{
    mongoose.set('strictQuery',true)
    try {
        mongoose.connect(host)
        console.log(`Mongodb connected${host}`)
    } catch (error) {
        console.log(error)
    }
   

}

module.exports=connectDataBase



// 