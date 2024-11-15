import User from "../model/user.js";
import Profile from "../model/profile.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';

//signUp
export const signUpUser =async(request,response)=>{
    try{
        const {name,email,password}=request.body
        const userExist=await User.findOne({email})
        if(userExist){
            return response.status(400).json({message:"User already exist"})
            
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = new User({
            name,
            email,
            password:hashedPassword
            })
            const SECRET_KEY = 'tharun'
                const token=jwt.sign({id:user._id},SECRET_KEY,{expiresIn:'1d'})
            
                const userId = (user._id);   
            const userSave=await user.save()
            response.status(201).json({message:"User created successfully",token,name,userId})
            console.log('user created')
            }
                catch(error){
                    response.status(500).json({message:error.message})
                    }


}

//login

export const loginUser = async (request, response) => {
    try {
        const { email, password } = request.body
        const user = await User.findOne({ email})
        if (!user) {
            return response.status(400).json({ message: "Invalid email" })
            }
            const isValidPassword = await bcrypt.compare(password, user.password)
            if (!isValidPassword) {
                return response.status(400).json({ message: "Invalid  password" })
                }
                const SECRET_KEY = 'tharun'
                const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1d'
                    })
                    const name = (user.name);
                    const userId = (user._id);
                    response.status(200).json({ message: "Login successfully", token,name,userId })
                    console.log('login successful')
                    
                    }
                    catch (error) {
                        response.status(500).json({ message: error.message })
                        }
}

//profile
export const createProfile = async (req, res) => {
     try { 
    const { name, height, weight, lastPeriodDate,profileId } = req.body;
        const photo = req.file ? req.file.path : ''; // Assuming you use multer for file uploads 
        const newProfile = new Profile({ name, height, weight, lastPeriodDate,profileId, photo });
        await newProfile.save();
        res.status(201).json({ message: 'Profile created successfully', profile: newProfile });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

//get profile by Profile Id
export const getUser = async (req, res) => {
    try {
        const profileId = req.params.id;
        const profile = await Profile.find({ _id: profileId })
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
            }
            res.status(200).json({ profile });
            }
            
            catch (error) {
                res.status(500).json({ error: 'Server error' });
                }
            }



//update userprofile by id
export const updateUser = async (req, res) => {
    try {
        const { name, height, weight, lastPeriodDate,profileId } = req.body;
        const photo = req.file ? req.file.path : null;
        const updatedData = { name, height, weight, lastPeriodDate,profileId };
        if (photo) { 
            updatedData.photo = photo;
        }
        const user = await Profile.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        } 
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};