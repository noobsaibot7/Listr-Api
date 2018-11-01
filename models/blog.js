const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please input a name'
  },
  completed: {
    type:Boolean,
    default: false
  },
  created_at:{
    type: Date,
    default: Date.now
  }
});

const blog = mongoose.model('blog', blogSchema);
module.exports = blog;