const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');


var bookSchema=new mongoose.Schema({
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
    pages:{
        type:String,
    },
    edition:{
        type:String,
    },
    languages:{
        type:String,
    },
    publisher:{
        type:String,
    },
    clasification:{
        type:String,
    },
    saltSecret:String
});

mongoose.model('Book',bookSchema);