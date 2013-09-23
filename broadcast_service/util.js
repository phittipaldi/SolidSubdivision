/*jslint browser: false, nomen: true, sloppy: true*/
/*global require, console, exports*/

var fs = require('fs');

exports.getFirstLineFromMd = function (filename, callback) {
    fs.readFile(filename, function (err, data) {
        if (err) return callback(err);
        
        var lines = data.toString('utf-8').split("\n");

        if (lines.length === 0) {
            return callback('File is empty', null);
        }
        callback(null, lines[0]);
    });
};
