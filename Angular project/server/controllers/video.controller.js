const mongoose = require('mongoose');
const Video = mongoose.model('Video');

module.exports.material = (req, res, next) => {
    var video = new video();
    video.id = req.body.id;
    video.title = req.body.title;
    video.author = req.body.author;
    video.date = req.body.date;
    video.duration = req.body.duration;
    video.resolution = req.body.resolution;
    video.advertisable = req.body.advertisable;
    video.watermark = req.body.watermark;
    video.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate video found.']);
            else
                return next(err);
        }

    });
}


