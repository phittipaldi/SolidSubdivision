/*jslint browser: false, nomen: true, sloppy: true*/
/*global require, console, exports*/

var TwitterAPI = require('node-twitter-api');

//TODO: How can we set these values on a config file that's not tracked by git?
var twitter = new TwitterAPI({
    consumerKey: '',
    consumerSecret: ''
});

exports.postToTimeline = function (message, url) {
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
};
