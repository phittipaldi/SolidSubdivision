/*jslint browser: false, nomen: true, sloppy: true*/
/*global require, console*/

//TODO: Eduardo, I still don't know the best way to organize all objects (inside a IIFE, inside a module, a literal, etc.)
//It's still all at the global level, I know it can be improved.

var fs = require('fs');
var util = require('./util');
var twitterHelpers = require('./twitter-helpers');
var contentDirectory = '../content/';
var files = fs.readdirSync(contentDirectory);
var fileIterator;
var currentFile;
var entries = [];

function addEntryToIndex(fileName) {
    util.getFirstLineFromMd(contentDirectory + fileName, function (err, text) {
        console.log("adding to index: " + text);
        entries.push({
            file: fileName,
            content: text
        });
    });
}

for (fileIterator = 0; fileIterator < files.length; fileIterator += 1) {
    currentFile = files[fileIterator];
    if (currentFile.split('.').pop().toLowerCase() === 'md') {
        addEntryToIndex(currentFile);
    }
}
