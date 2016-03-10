// config/database.js

// expose the mongodb connection url to our app with module.exports
module.exports = {
    urlHeroku : 'mongodb://heroku_eaitododb:@eaimongodb1@ds011409.mlab.com:11409/heroku_vm5mmdxg',
    urlLocal : 'mongodb://localhost:27017/todo'
};