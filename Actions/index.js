const DB = require('../models')
const Actions = {};

Actions.getAllBlogs = (req, res)=>{
  DB.Blog.find()
  .then(objs=>res.json(objs))
  .catch(err=> res.send(err))
};

Actions.createBlog = (req, res)=>{
  DB.Blog.create(req.body)
  .then(done=>res.status(201).json(done))
  .catch(err=> res.send(err))
};

Actions.fetchAblog = (req, res)=>{
  DB.Blog.findById(req.params.blogid)
  .then(done=>res.json(done))
  .catch(err=> res.send(err))
};

Actions.updateBlog = (req, res)=>{
  //DB.Blog.findByIdAndUpdate(req.params.blogid, req.body)
  DB.Blog.findOneAndUpdate({_id: req.params.blogid}, req.body, {new: true})
  //by default, on update---the json returned is unchanged unless this =={new: true}== is set
  .then(done=>res.json(done))
  .catch(err=> res.send(err))
};

Actions.deleteBlog = (req, res)=>{
  DB.Blog.remove({_id: req.params.blogid})
  .then(done=>res.send({info: 'Removed'}))
  .catch(err=> res.send(err))
}

module.exports = Actions;