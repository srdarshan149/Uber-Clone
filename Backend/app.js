const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors =require('cors');
const app = express();
const connectTODB =require('./DB/db')
const  userRouter= require('./routes/user.routes')
const  captainRoutes  = require('./routes/captain.routes')
const cookieParser = require('cookie-parser');

connectTODB()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


 app.use(cors());
app.get('/',(req,res)=>{
    res.send("Welcome")

});


app.use('/users',userRouter)
app.use('/captains',captainRoutes)

module.exports =app;