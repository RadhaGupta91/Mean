const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/contactDirectory";

const connect  = mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true  });

connect.then((db)=>{
    console.log('Server connected successfully');
});
