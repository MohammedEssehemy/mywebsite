const express = require('express');
const router = express.Router();
const Message = require('../models/message');


//get all messages
router.get('/',(req,res,next)=>{
    res.send('protected route: all messages here');
})


//new messages
router.post('/',(req,res,next)=>{
    ///// email validation 
    let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!emailRegex.test(req.body.email)) {
        return res.json({
            success: false,
            message: "wrong email format"
        })
    }
    
    let newMessage = new Message({
        username: req.body.username,
        email : req.body.email,
        title : req.body.title,
        body : req.body.body
    });
    newMessage.save((err,message)=>{
         if (err) {
                    return res.json({
                        success: false,
                        msg: 'failed to add message'
                    });
                }
                res.json({
                    success: true,
                    msg: 'Message Added',
                    message : {
                      username: message.username,
                         email: message.email,
                        title: message.title,
                        body : message.body
                    }
                });
    })

})

//get specific messages
router.get('/:id',(req,res,next)=>{
    res.send('protected route: specific message');
})

//delete messages
router.delete('/:id',(req,res,next)=>{
    res.send('protected route: delete message here');
})

//edit messages
router.delete('/:id',(req,res,next)=>{
    res.send('protected route: edit message here');
})


module.exports = router;