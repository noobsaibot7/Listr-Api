const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost/blog-api");
mongoose.Promise = Promise;

module.exports.Blog = require('./blog');