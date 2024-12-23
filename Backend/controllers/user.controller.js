const userModel = require('../models/user.model')
const userservice = require('../services/user.service')
const {validationResult} =require('express-validator')
const bcryptjs = require('bcryptjs')
const backlistTokenModel  = require('../models/blacklistToken.model')

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });
    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const user = await userservice.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
};


module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // console.log(req.body);
    const user = await userModel.findOne({ email }).select('+password');

    

    // const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordMatch = await bcryptjs.compare(password, user.password);
    // console.log(isPasswordMatch,"password");
    
    if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid email or password ' });
    }

    const token = user.generateAuthToken();

    res.cookie('token', token
        //  { httpOnly: true 
        // ,secure: process.env.NODE_ENV === 'production'
        // ,maxAge: 1000 * 60 * 60 * 24 * 7 }
    );

    res.status(200).json({ token, user });
}
module.exports.getUserProfile = async (req, res, next) => {
    //  const user = await userModel.findById(req.user._id);
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token =req.cookies.token || req.headers.authorization.split(' ')[1];

    await backlistTokenModel.create({token});
    res.status(200).json({ message: 'Logout successfully' });
}