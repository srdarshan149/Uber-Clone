const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const  captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First name Must be at least 3 characters long"],
        },
        lastname: {
            type: String,
            minlength: [3, "Last name Must be at least 3 characters long"],
        },
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [5, "Email must be at least 5 characters long"],
        match: [/\S+@\S+\.\S+/, 'please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "Color Must be at least 3 characters long"],
        },
         plate:{
            type: String,
            required: true,
            minlength: [3, "Plate Must be at least 3 characters long"],
         },
         capacity:{
            type: Number,
            required: true,
            min:[1, "Capacity must be at least 1"],
         },
         vehicleType:{
            type: String,
            required: true,
            enum: ['car', 'motorcycle' , 'auto'],
         }
    },

    location:{
        lat:{
            type: Number,
        },
        lug:{
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY,{expiresIn:'24h'});
    return token;
}

captainSchema.statics.hashpassword = async function (password) {
    return await bcryptjs.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;