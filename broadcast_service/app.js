/*jslint browser: false, nomen: true, sloppy: true*/
/*global require, console*/

//TODO: Eduardo, I still don't know the best way to organize all objects (inside a IIFE, inside a module, a literal, etc.)
//It's still all at the global level, I know it can be improved.

var fs = require('fs'),
    TwitterAPI = require('node-twitter-api'),
    util = requre('./util'),
    contentDirectory = '../content/',
    files = fs.readdirSync(contentDirectory),
    fileIterator,
    currentFile,
    entries = [];

//TODO: How can we set these values on a config file that's not tracked by git?
var twitter = new TwitterAPI({
    consumerKey: '',
    consumerSecret: ''
});

function addEntryToIndex(fileName) {
    util.getFirstLineFromMd(contentDirectory + fileName, function (err, text) {
        console.log("adding to index: " + text);
        entries.push({
            file: fileName,
            content: text
        });
    });
}

function postToTimeline(message, url) {
    twitter.statuses("update", {
        status: message
    },
        'Access Token',
        'Access Token Secret', function (error, data, response) {
            if (error) {
                console.log('Error: ' + error);
            } else {
                console.log(response);
            }
        });
}

for (fileIterator = 0; fileIterator < files.length; fileIterator += 1) {
    currentFile = files[fileIterator];
    if (currentFile.split('.').pop().toLowerCase() === 'md') {
        addEntryToIndex(currentFile);
    }
}
