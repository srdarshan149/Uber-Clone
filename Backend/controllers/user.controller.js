const userModel = require('../models/user.model')
const userservice = require('../services/user.service') 
const {validationResult} =require('express-validator')

// module.exports.registerUser =async (req,res,next)=>{

//     const  error = validationResult(req);
//     if(!error.isEmpty()){
//         return res.status(400).json({errors:error.array()})
//     }


//     const {   fullname,email,password} = req.body;

//     const hashedpwd =await userModel.hashpassword(password);

//                 const user = await userservice.createUser({
//             firstname:fullname.firstname,
//             lastname:fullname.lastname,
//             email,
//             password:hashedpwd
//                 });
//             const tokan =user.generateAuthToken();

//             res.status(201).json({token,user});

//             }


module.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userservice.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });


}
