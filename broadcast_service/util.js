var fs = require('fs');

exports.getFirstLineFromMd = function(filename, callback) {
    fs.readFile(filename, function (err, data) {
        if (err) return callback(err); // Yes there is :P

        // Data is a buffer that we need to convert to a string
        // Improvement: loop over the buffer and stop when the line is reached
        var lines = data.toString('utf-8').split("\n");

        if (lines.length === 0) {
            return callback('File is empty', null);
        }
        callback(null, lines[0]);
    });
}
