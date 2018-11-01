const express = require('express');
const router = express.Router();
const Actions = require('../Actions')

//fetch all item from my blog
router.route('/')
.get(Actions.getAllBlogs)
// create posts
.post(Actions.createBlog)

//fetch a post by id
router.route('/:blogid')
.get(Actions.fetchAblog)
//update a particular post
.put(Actions.updateBlog)
 //delete a blog post
.delete(Actions.deleteBlog )
//====================the .ROUTE make similar request CHAINABLE
// //fetch all item from my blog
// router.get('/', Actions.getAllBlogs)

// // create posts
// router.post('/', Actions.createBlog)

// //fetch a post by id
// router.get('/:blogid', Actions.fetchAblog)

// //update a particular post
// router.put('/:blogid', Actions.updateBlog)
  //delete a blog post
// router.delete('/:blogid', Actions.deleteBlog )

module.exports = router;