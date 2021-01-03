const express=require('express');
const router=express.Router();


router.post('/register',ctrlVideo.register);
router.post('/register',ctrlBook.register);

module.exports=router;