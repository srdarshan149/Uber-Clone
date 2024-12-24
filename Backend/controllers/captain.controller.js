const captainModel =require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} =require('express-validator')


module.exports.registerCaptain = async (req, res, next) => {
    const  errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {fullname, email, password,  vehicle} = req.body;

    const isCaptainAlready = await captainModel.findOne({ email });
    if (isCaptainAlready) {
        return res.status(400).json({ message: 'Captain already exists' });
    }

    const hashedPassword = await captainModel.hashpassword(password);
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    // console.log(captain);

    const token = await captain.generateAuthToken();
    res.status(201).json({ token, captain });
    

}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel
        .findOne({ email }).select('+password');
        
        if (!captain) {
            return res.status(400).json({ message: 'Invalid Email or Password' });
        }
}
