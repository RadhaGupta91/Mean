const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:String
    },
    description:{
        type:String
    }
})

const Contact = module.exports = mongoose.model('contacts',contactSchema);