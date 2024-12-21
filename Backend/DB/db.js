const mongoose = require('mongoose');

function connectToDB(){
try {
    mongoose.connect(process.env.DB_CONNECT_URL)
    .then(()=>{
        console.log('Database Connected👍');
    }) } catch(err) {
console.log(err);

    }
}



module.exports=connectToDB;