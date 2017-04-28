const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const adminAuth = require('../modules/adminauthMiddleware');




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


router.use(adminAuth);
//get all messages
router.get('/',(req,res,next)=>{
    Message.find((err,messages)=>{
        if (err) console.error(err)
        if (messages) {
            return res.json({
                success: true,
                messages: messages
            });
        }
        res.json({
            success: false,
            msg: "no messages found"
        })
    })

})

//delete message
router.delete('/:id', (req, res, next) => {
    Message.findByIdAndRemove(req.params.id, (err, message) => {
        if (err) console.error(err);
        if (message) {
            return res.json({
                success: true,
                message: message
            })
        }
        res.json({
            success: false,
            msg: 'message not found',
        })
    });
})


//get specific messages
router.get('/:id',(req,res,next)=>{
Message.findById(req.params.id, (err, message) => {
        if (err) console.error(err);
        if (message) {
            return res.json({
                success: true,
                message: message
            });
        }
        res.json({
            success: false,
            msg: "message not found"
        })
    });
})



module.exports = router;
