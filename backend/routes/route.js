import express from 'express'
import { signUpUser , loginUser,createProfile,getUser,updateUser,emailend} from '../controller/usercontroller.js'
import multer from 'multer';


const router = express.Router();

// Set up multer for file uploads 
const storage = multer.diskStorage({
     destination: function (req, file, cb) { cb(null, 'uploads/'); },
     filename: function (req, file, cb) { cb(null, Date.now() + '-' + file.originalname); } 
    });

const upload = multer({ storage: storage });

router.post('/signup', signUpUser);
router.post('/login', loginUser);
router.post('/userform',upload.single('photo'),createProfile);
router.get('/user/:id',getUser);
router.put('/user/:id',upload.single('photo'),updateUser);
router.post('/email',emailend);

export default router