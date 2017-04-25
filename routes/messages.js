const express = require('express');
const router = express.Router();


//get all messages
router.get('/',(req,res,next)=>{
    res.send('protected route: all messages here');
})


//new messages
router.post('/',(req,res,next)=>{
    res.send('protected route: post message here');
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