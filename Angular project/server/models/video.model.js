const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var videoSchema = new mongoose.Schema({
    id: {
        type: Int32Array,
        unique: true
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: Date
    },
    duration: {
        type: String
    },
    resolution: {
        type: String
    },
    advertisable: {
        type: String,
    },
    watermark: {
        type: String
    },
    saltSecret: String
});


videoSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

mongoose.model('Video', videoSchema);