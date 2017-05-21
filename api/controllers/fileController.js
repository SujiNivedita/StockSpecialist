var mongoose = require('mongoose'),
   _ = require('lodash');

var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
var gfs = new Grid(mongoose.connection.db);

exports.upload_ID_Proof = function(req, res) {

    var part = req.files.filefield;

    var writeStream = gfs.createWriteStream({
        filename: part.name,
        mode: 'w',
        content_type:part.mimetype
    });


    writeStream.on('close', function(file) {
        return res.status(200).send({
            message: 'Success',
            id:file._id
        });
    });

    writeStream.write(part.data);

    writeStream.end();

};

exports.read_ID_Proof = function(req, res) {

    gfs.files.findById(req.params.regId).toArray(function (err, files) {

        if(files.length===0){
            return res.status(400).send({
                message: 'No ID Proof available'
            });
        }
        if (err)
            res.send(err);
        res.json(files);
    });

};

exports.read_all_ID_Proof = function(req, res) {

   gfs.files.find({}).toArray(function (err, files) {

        if(files.length===0){
            return res.status(400).send({
                message: 'NO Files Uplaoded'
            });
        }
        if (err)
            res.send(err);
        res.json(files);
    });
};