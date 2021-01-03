const express=require('express');
const router=express.Router();


router.post('/register',ctrlUser.register);

module.exports=router;