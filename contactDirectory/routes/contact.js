const express = require('express');
const Contact = require('../models/contact');
const contactRouter = express.Router();

contactRouter.route('/')
.all((req,res,next)=>{
     res.statusCode = 200;
     res.setHeader('Content-Type','text/json');
     next();
})
.get((req,res,next)=>{
    Contact.find({})
    .then((data)=>{
    console.log(data);
    res.send(data);
    });
})

.post((req,res,next)=>{  
    
    Contact.create({
        name: req.body.name,
        contact: req.body.contact,
        description: req.body.description
    })
    .then(data=>{
        console.log("response");
        res.send(data);
    })
    .catch((err) => next(err));
  
});

contactRouter.route('/:id')
    .delete((req,res,next)=>{
        Contact.findById(req.params.id)
        .then((data)=>{
            if(data == null )
            res.send("INVALID RECORD");
            else{
                Contact.findByIdAndRemove(req.params.id)
                .then(()=>{
                    res.send({status:true});
                })
            }
        })
        .catch((err) => next(err));
        
    })
    
module.exports = contactRouter;