import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  lastPeriodDate: { type: Date, required: true },
  profileId:{type:String,required:true},
  photo: { type: String, required: true },
}, { timestamps: true });


const Profile=mongoose.model('profile',userSchema);
export default Profile