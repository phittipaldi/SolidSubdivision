
exports.getFirstLineFromMd = function(filename, callback) {
    fs.readFile(filename, function (err, data) {
        if (err) {
            throw err;
            //TODO: Is there another way to do this?
        }

        // Data is a buffer that we need to convert to a string
        // Improvement: loop over the buffer and stop when the line is reached
        var lines = data.toString('utf-8').split("\n");

        if (lines.length === 0) {
            return callback('File is empty', null);
        }
        callback(null, lines[0]);
    });
}
