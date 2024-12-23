const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors =require('cors');
const app = express();
const connectTODB =require('./DB/db')
const  userRouter= require('./routes/user.routes')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectTODB()

 app.use(cors());
app.get('/',(req,res)=>{
    res.send("Welcome")

});


app.use('/user',userRouter)

module.exports =app;