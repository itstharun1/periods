import mongoose from "mongoose";

const connection = async()=>{
    const URL = "mongodb+srv://itstharun01:zl4B4R7KjUjy5hB5@cluster0.rdg8q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    try{
        await mongoose.connect(URL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log(err.message);
    }
    
}

export default connection;