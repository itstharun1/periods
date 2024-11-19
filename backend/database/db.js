import mongoose from "mongoose";
const URI = process.env.URI;

const connection = async()=>{
    const URL = {URI}
    try{
        await mongoose.connect(URL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log(err.message);
    }
    
}

export default connection;