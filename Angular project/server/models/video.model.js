const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
var videoSchema=new mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    title:{
        type:String,
    },
    author:{
        type:String,
    },
    date:{
        type:String,
    },
    duration:{
        type:String,
    },
    resolution:{
        type:String,
    },
    advertisable:{
        type:String,
    },
    watermark:{
        type:String,
    },
    saltSecret:String
});

mongoose.model('Video',videoSchema);
